import NextLink from "next/link";
import Avatar from "@/components/avatar";

export default function Header() {
  return (
    <header className="px-3">
      <div className="max-w-md py-9 mx-auto">
        <NextLink href="/" className="flex flex-col items-center justify-center gap-2">
          <Avatar
            src="/images/pedro.jpeg"
            alt="Faisal Pedro"
            size={80}
          />
          <h1 className="text-lg text-gray-600 font-semibold">Faisal Pedro</h1>
        </NextLink>
      </div>
    </header>
  );
}
