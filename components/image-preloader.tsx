"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { allSiteImages, preloadImages } from "@/lib/images";
import { menuItems } from "@/lib/data";

const menuImages = Array.from(
  new Set(menuItems.map((item) => item.image).filter((img): img is string => Boolean(img)))
);

export function ImagePreloader() {
  const pathname = usePathname();

  useEffect(() => {
    const prefetch = () => {
      if (pathname === "/menu") {
        preloadImages(menuImages);
      } else {
        preloadImages(allSiteImages);
      }
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }

    const timer = setTimeout(prefetch, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
