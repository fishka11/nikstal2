"use client";
import ContactBar from "./contactBar";
import Menu from "./menu";
import { routes, firmData } from "@/lib/variables";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 backdrop-blur-sm">
      <div className="">
        <ContactBar phone={firmData.phone} email={firmData.email} />
        <Menu routes={routes} />
      </div>
    </div>
  );
}
