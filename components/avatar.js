import Image from "next/image";

export default function Avatar({ src, alt = "Avatar", size = 24 }) {
  return (
    <div
      className="rounded-full overflow-hidden grayscale"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
}
