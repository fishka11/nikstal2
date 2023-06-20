import CustomHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import "@/styles/globals.css";

export default function RootLayout({
  email,
  phone,
  routes,
  rootSEO,
  SEO,
  children,
}) {
  return (
    <>
      <CustomHead rootSEO={rootSEO} SEO={SEO} />
      <Header email={email} phone={phone} routes={routes} />
      <main className="relative">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
