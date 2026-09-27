import Image from "next/image";
import { asset } from "@/lib/asset";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function Mascot({
  src,
  alt,
  className = "",
  priority = false,
  width = 480,
  height = 480,
}: Props) {
  return (
    <Image
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`pointer-events-none select-none object-contain ${className}`}
    />
  );
}
