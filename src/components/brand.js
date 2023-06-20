import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Brand() {
  const router = useRouter();
  return (
    <Link className="flex justify-start" href="/">
      <Image
        quality={100}
        alt="logo NikStal - skup złomu stalowego i metali kolorowych"
        className={`${
          router.asPath === "/" ? "active" : ""
        } ml-0 mr-3 block h-12 w-full md:h-16 md:w-auto`}
        src="/logoNikstal.svg"
        width={160}
        height={64}
      />
    </Link>
  );
}
