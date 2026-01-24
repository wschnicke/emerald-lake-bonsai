import Image from "next/image";
import type { ReactNode } from "react";

interface ContentBlockProps {
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  children: ReactNode;
}

export default function ContentBlock({
  imageSrc,
  imageAlt,
  reversed = false,
  children,
}: ContentBlockProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-start">
      <div
        className={`relative aspect-4/3 w-full bg-gray-200 rounded-md ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top rounded-md"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div
        className={`px-4 py-6 sm:px-6  ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        {children}
      </div>
    </section>
  );
}
