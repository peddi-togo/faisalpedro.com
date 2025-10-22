import Image from "next/image";

export default function Icon({ className = "", name, size = 16 }) {
  return (
    <Image
      className={className}
      src={`/svg/${name}.svg`}
      alt={name}
      width={size}
      height={size}
    />
  );
}
