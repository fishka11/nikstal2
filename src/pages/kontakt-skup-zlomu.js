import Image from "next/image";
import RootLayout from "@/layouts/rootLayout";
import {
  getStaticPagesContent,
  getFirmData,
  getPagesContent,
} from "@/lib/hygraphcms";
import CustomHead from "@/components/head";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/global.module.css";
import FirmData from "@/components/firmData";
import Footer from "@/components/footer";
import OpeningHours from "@/components/openingHours";
import GoogleMap from "@/components/googleMap";
import CardWithIcon from "@/components/cardWithIcon";

export default function ContactPage({
  pageData,
  firmsData,
  dynamicRoutesData,
}) {
  const content = pageData.staticPages[0];
  const pageSEO = content.seo;
  const firmData = firmsData.firmsData[0];

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
      <div className="container flex max-w-screen-2xl flex-wrap justify-center">
        {content.cardsWithIcon.map((card) => {
          return (
            <CardWithIcon
              key={card?.id || uuidv4()}
              icon={card?.fontAwesomeIconName}
              title={card?.subtitle}
              texts={card?.texts}
            />
          );
        })}
      </div>
      <FirmData firmData={firmData} />
      <OpeningHours firmData={firmData} />
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
      <GoogleMap />
      <Footer data={dynamicRoutesData} />
    </RootLayout>
  );
}

export async function getStaticProps() {
  const pageData = (await getStaticPagesContent("kontakt-skup-zlomu")) || {};
  const dynamicRoutesData = (await getPagesContent()) || {};
  const firmsData = (await getFirmData()) || {};
  return {
    props: {
      pageData,
      firmsData,
      dynamicRoutesData,
    },
  };
}
