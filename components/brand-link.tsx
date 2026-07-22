import Image from "next/image";
import Link from "next/link";

export function BrandLink() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3 text-lg font-semibold transition hover:text-blue-700 dark:hover:text-blue-300"
    >
      <Image
        src="/brand/alan-logo.jpg"
        alt="Alan Liu logo"
        width={36}
        height={36}
        sizes="(max-width: 639px) 32px, 36px"
        priority
        className="h-8 w-8 rounded-full border border-slate-300 object-cover dark:border-slate-700 sm:h-9 sm:w-9"
      />
      <span>Alan Liu</span>
    </Link>
  );
}
