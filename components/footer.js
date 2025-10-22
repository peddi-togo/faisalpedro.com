import Link from "@/components/link";
import Icon from "@/components/icon";

export default function Footer() {
  return (
    <footer className="px-3">
      <div className="max-w-md py-9 mx-auto">
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Link href="tel:+17788776997" className="group">
            <Icon name="phone" size={16} />
            Phone
          </Link>
          <Link href="mailto:fslpdr@gmail.com" className="group">
            <Icon name="envelope" size={16} />
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/faisal-pedro-1412b1161/"
            className="group"
          >
            <Icon name="user" size={16} />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
