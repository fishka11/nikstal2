import Link from "next/link";
import styles from "./menuItem.module.css";

export default function MenuItem({ slug, display, toggle, isActive }) {

  return (
    <li>
      <Link
        className={`${styles.navLink} ${
          isActive ? styles.active : ""
        } relative block w-auto whitespace-nowrap pb-0 pt-5 text-right text-base font-[400] text-[#17388a] hover:bg-gray-50 active:text-blue-700 md:border-0 md:p-0  md:hover:bg-transparent md:hover:text-blue-900`}
        href={slug}
        onClick={() => toggle()}
      >
        {display.toUpperCase()}
      </Link>
    </li>
  );
}
