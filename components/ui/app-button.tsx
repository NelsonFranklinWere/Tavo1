import Link from "next/link";
import { cn } from "@/lib/utils";

type AppButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const variants = {
  primary: [
    "bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600",
    "hover:from-accent-500 hover:via-accent-400 hover:to-accent-500",
    "text-white shadow-lg shadow-accent-500/30",
    "hover:shadow-xl hover:shadow-accent-500/45",
    "hover:scale-[1.03] active:scale-[0.98]",
    "border border-accent-400/30",
  ].join(" "),
  secondary: [
    "bg-gradient-to-r from-gold-500 to-gold-400",
    "hover:from-gold-400 hover:to-gold-300",
    "text-charcoal-950 shadow-lg shadow-gold-500/25",
    "hover:shadow-xl hover:shadow-gold-500/40",
    "hover:scale-[1.03] active:scale-[0.98]",
  ].join(" "),
  outline: [
    "bg-transparent border-2 border-ivory/30",
    "hover:border-accent-400 hover:bg-accent-500/10",
    "text-ivory hover:text-white",
    "backdrop-blur-sm",
    "hover:scale-[1.03] active:scale-[0.98]",
  ].join(" "),
};

const base = [
  "inline-flex items-center justify-center gap-2.5",
  "px-8 py-3.5 md:px-10 md:py-4",
  "rounded-full",
  "font-semibold text-xs md:text-sm tracking-[0.12em] uppercase",
  "transition-all duration-300 ease-out",
  "whitespace-nowrap",
].join(" ");

export function AppButton({
  href,
  children,
  variant = "primary",
  external,
  className,
  icon,
}: AppButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    const isNewTab = href.startsWith("http");
    return (
      <a
        href={href}
        {...(isNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
