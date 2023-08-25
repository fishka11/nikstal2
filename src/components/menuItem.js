import Link from "next/link";

export default function MenuItem({ slug, display, toggle, isActive }) {
  return (
    <li>
      <Link
        className={`${
          isActive ? "before:w-full" : ""
        } relative block w-auto whitespace-nowrap pb-0 pt-5 text-right text-base font-[400] text-[#17388a] before:absolute before:bottom-0.5 before:left-0 before:z-50 before:block before:h-px before:w-0 before:bg-blue-800 before:transition-all before:content-[''] hover:bg-gray-50 hover:before:w-full active:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-900`}
        href={slug}
        onClick={() => toggle()}
      >
        {display.toUpperCase()}
      </Link>
    </li>
  );
}
