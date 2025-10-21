import Image from "next/image";

export default function Avatar({ src, alt = "Avatar", width, height }) {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden grayscale">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
