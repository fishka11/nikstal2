import CustomHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RootLayout from "./rootLayout";

export default function PagesLayout({ email, phone, routes, SEO, children }) {
  return (
    <RootLayout email={email} phone={phone} routes={routes} SEO={SEO}>
      {/* <Header email={email} phone={phone} routes={routes} /> */}
      <main className=" bg-slate-400 text-red-700">{children}</main>
      {/* <Footer /> */}
    </RootLayout>
  );
}
