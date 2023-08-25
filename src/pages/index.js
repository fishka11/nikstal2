import CardWithIcon from "@/components/cardWithIcon";
import CardWithPic from "@/components/cardWithPic";
import Cover from "@/components/cover";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import RootLayout from "@/layouts/rootLayout";
import {
  getPagesContent,
  getStaticPagesContent,
  getFirmData,
} from "@/lib/hygraphcms";
import CustomHead from "@/components/head";
import Footer from "@/components/footer";

export default function HomePage({ pageData, dynamicRoutesData, firmsData }) {
  const content = pageData.staticPages[0];
  const pageSEO = content?.seo;
  return (
    <RootLayout>
      <CustomHead SEO={pageSEO} />
      Strona startowa
      <Cover header={content.header} ctaButtons={content.ctaButtons} />
      <div className="bg-white pb-14 pt-4 md:pt-14">
        <div className="container max-w-screen-lg">
          <h1 className="mb-4 mt-4 text-center text-xl font-light text-blue-900 md:mb-8 md:mt-0 md:text-3xl">
            {content?.title}
          </h1>
          <ReactMarkdown className="text-center">
            {content?.texts[0]?.text?.markdown}
          </ReactMarkdown>
        </div>
        <div className="container mt-14 flex max-w-screen-2xl flex-wrap justify-center">
          {content?.cardsWithIcon.map((card) => {
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
      </div>
      <div
        className="linear-gradient(to bottom, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)) bg-cover bg-fixed bg-center bg-no-repeat py-20"
        // style={bg2}
      >
        <div className="container max-w-screen-lg p-12">
          <h2 className="mb-6 text-center text-2xl font-light text-slate-200">
            {content?.texts[1]?.subtitle}
          </h2>
          <ReactMarkdown className="text-center text-white">
            {content?.texts[1]?.text?.markdown}
          </ReactMarkdown>
        </div>
      </div>
      <div className="bg-white pt-20">
        <div className="container flex max-w-screen-2xl flex-wrap justify-center">
          {content?.cardsWithPic.map((card) => {
            return (
              <CardWithPic
                key={card?.id || uuidv4()}
                pic={card?.picture}
                title={card?.subtitle}
                texts={card?.texts}
              />
            );
          })}
        </div>
        <div className="container max-w-screen-lg p-12">
          <ReactMarkdown className="text-center">
            {content?.texts[2]?.text?.markdown}
          </ReactMarkdown>
        </div>
      </div>
      <Footer data={dynamicRoutesData} />
    </RootLayout>
  );
}

export async function getServerSideProps() {
  const pageData = (await getStaticPagesContent("/")) || {};
  const dynamicRoutesData = (await getPagesContent()) || {};
  const firmsData = (await getFirmData()) || {};
  return {
    props: {
      pageData,
      dynamicRoutesData,
      firmsData,
    },
  };
}
