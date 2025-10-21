import NextLink from "next/link";
import Avatar from "@/components/avatar";

export default function Header() {
  return (
    <header>
      <div className="max-w-xl mx-auto">
        <NextLink href="/" className="flex items-center justify-center gap-2">
          <Avatar src="/images/pedro-3.jpeg" alt="Faisal Pedro" width={24} height={24} />
          <h1 className="text-l text-gray-500 font-semibold">Faisal Pedro</h1>
        </NextLink>
      </div>
    </header>
  );
}
