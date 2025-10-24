import NextLink from "next/link";
import Avatar from "@/components/avatar";
import Heading from "@/components/heading";

export default function Header() {
  return (
    <header className="px-3">
      <div className="max-w-md py-9 mx-auto">
        <NextLink
          href="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <Avatar src="/images/pedro.jpeg" alt="Faisal Pedro" size={80} />
          <Heading level={1} className="text-lg text-gray-500 font-medium">
            Faisal Pedro
          </Heading>
        </NextLink>
      </div>
    </header>
  );
}
