import { PhoneIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "@/components/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-xl mx-auto">
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
          <Link href="tel:+17788776997" className="group">
            <PhoneIcon className="size-4" />
            Phone
          </Link>
          <Link href="mailto:fslpdr@gmail.com" className="group">
            <EnvelopeIcon className="size-4" />
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/faisal-pedro-1412b1161/"
            className="group"
          >
            <UserIcon className="size-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
