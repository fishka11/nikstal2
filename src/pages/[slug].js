import { getPagesContent, getPageContent } from "@/lib/hygraphcms";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/global.module.css";
import RootLayout from "@/layouts/rootLayout";
import CustomHead from "@/components/head";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Page({ pageData, dynamicRoutesData }) {
  const content = pageData.pages[0];
  const pageSEO = content.seo;
  return (
    <RootLayout>
      <CustomHead SEO={pageSEO} />
      <div className="relative h-60 w-full overflow-hidden bg-slate-400 lg:h-80">
        <Image
          src={content?.header?.picture?.url}
          fill={true}
          alt={content?.title}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </div>
      <div className="container mb-4 mt-4 max-w-screen-lg pt-2 md:mb-8 md:mt-0 md:pt-12">
        <h1 className="mb-2 text-center text-2xl font-light text-blue-900 md:text-3xl">
          {content?.title}
        </h1>
        <p className="mb-2 text-center text-xl font-light md:mb-8">
          {content?.subtitle}
        </p>
      </div>
      <div className="container max-w-screen-lg p-2 md:pb-8 md:pt-0">
        <h2 className="mb-2 text-2xl font-light text-blue-800">
          {content?.texts[0]?.subtitle}
        </h2>
        <ReactMarkdown className={styles.text}>
          {content?.texts[0]
            ? content?.texts[0]?.text?.markdown
            : content?.markdownTexts[0]?.markdownText}
        </ReactMarkdown>
      </div>
      <Footer data={dynamicRoutesData} />
    </RootLayout>
  );
}

export async function getStaticProps({ params }) {
  const pageData = (await getPageContent(params.slug)) || {};
  const dynamicRoutesData = (await getPagesContent()) || {};
  return {
    props: { pageData, dynamicRoutesData },
  };
}

export async function getStaticPaths() {
  const pageData = (await getPagesContent()) || {};
  const paths = pageData.pages.map((page) => ({
    params: {
      slug: page.menuLink.slug,
    },
  }));
  return { paths, fallback: false };
}
