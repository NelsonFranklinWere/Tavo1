import Image, { type ImageProps } from "next/image";
import { imageSizes } from "@/lib/images";

type Variant = "hero" | "menuCard" | "galleryThumb" | "galleryLightbox";

type OptimizedImageProps = Omit<ImageProps, "sizes"> & {
  variant?: Variant;
  sizes?: string;
  alt: string;
};

const variantSizes: Record<Variant, string> = {
  hero: imageSizes.hero,
  menuCard: imageSizes.menuCard,
  galleryThumb: imageSizes.galleryThumb,
  galleryLightbox: imageSizes.galleryLightbox,
};

export function OptimizedImage({
  variant,
  sizes,
  quality = 75,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      sizes={sizes ?? (variant ? variantSizes[variant] : undefined)}
      quality={quality}
      {...props}
    />
  );
}
