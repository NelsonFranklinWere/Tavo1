import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const MAX_WIDTH = {
  hero: 1920,
  food: 800,
  drinks: 800,
  interior: 1400,
  default: 1200,
};

function getMaxWidth(relativePath) {
  const folder = relativePath.split("/")[0];
  return MAX_WIDTH[folder] ?? MAX_WIDTH.default;
}

async function walk(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(full, rel)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push({ full, rel });
    }
  }

  return files;
}

async function optimizeImage({ full, rel }) {
  const webpPath = full.replace(/\.(png|jpe?g)$/i, ".webp");
  const maxWidth = getMaxWidth(rel);

  const pipeline = sharp(full).rotate();
  const meta = await pipeline.metadata();

  let resized = pipeline;
  if (meta.width && meta.width > maxWidth) {
    resized = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
  }

  await resized.webp({ quality: 78, effort: 4 }).toFile(webpPath);

  const [srcStat, webpStat] = await Promise.all([stat(full), stat(webpPath)]);
  const saved = ((1 - webpStat.size / srcStat.size) * 100).toFixed(0);

  console.log(
    `  ${rel} → ${rel.replace(/\.(png|jpe?g)$/i, ".webp")} (${formatSize(srcStat.size)} → ${formatSize(webpStat.size)}, -${saved}%)`
  );

  return { rel, saved: srcStat.size - webpStat.size };
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function main() {
  console.log("Optimizing images in public/...\n");

  const files = await walk(PUBLIC_DIR);
  let totalSaved = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    totalSaved += result.saved;
    await unlink(file.full);
  }

  // Rename reservation hero (had space in filename)
  const oldReservation = join(PUBLIC_DIR, "hero", "heroimageresevation page.webp");
  const newReservation = join(PUBLIC_DIR, "hero", "reservations-hero.webp");
  try {
    await stat(oldReservation);
    const { rename } = await import("fs/promises");
    await rename(oldReservation, newReservation);
    console.log("\n  Renamed heroimageresevation page.webp → reservations-hero.webp");
  } catch {
    // already renamed or missing
  }

  console.log(`\nDone. Total saved: ${formatSize(totalSaved)} across ${files.length} images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
