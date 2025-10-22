import Image from "next/image";

export default function Avatar({ src, alt = "Avatar", size = 24 }) {
  return (
    <div
      className="relative border border-gray-300 bg-gray-100 rounded-full overflow-hidden grayscale-80"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image className="h-auto! object-cover top-0" src={src} alt={alt} fill />
    </div>
  );
}
