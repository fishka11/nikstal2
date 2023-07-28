import Head from "next/head";

export default function CustomHead({ SEO }) {
  const title = SEO?.title;
  const description = SEO?.description;
  const keywords = SEO?.keywords;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          SocialMediaSiteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={SocialMediaSiteTitle} />
      <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {title ? (
        <title>{title}</title>
      ) : (
        <title key="title">
          Skup złomu Sosnowiec, skup złomu Jaworzno, Katowice, Śląsk, skup
          metali kolorowych
        </title>
      )}
      {description ? (
        <meta name="description" key="description" content={description} />
      ) : (
        <meta
          name="description"
          key="description"
          content="Skup złomu Sosnowiec - Nikstal - skupujemy metale kolorowe i surowce
        wtórne z rejonu Śląska i Zagłębia. Obsługujemy: Mysłowice, Sosnowiec,
        Jaworzno, Mikołów, Tychy, Zawiercie, Dąbrowa Górnicza, Katowice,
        Skupujemy złom po najwyższych cenach w regionie! Prowadzimy skup hurtowy
        i detaliczny."
        />
      )}
      {keywords ? (
        <meta name="keywords" key="keywords" content={keywords} />
      ) : (
        <meta
          name="keywords"
          key="keywords"
          content="Skup złomu, Mysłowice, Sosnowiec, Jaworzno, Katowice, Tychy, Śląsk,
      Mikołów, Zawiercie, ceny skupu stali, miedzi, mosiądzu, aluminium, cynku,
      ołowiu, makulatury, akumulatorów, hurtowy, detaliczny"
        />
      )}
      <meta name="author" key="author" content="Rafał Piaśnik" />
      <meta
        name="google-site-verification"
        content="i5ZygHCqAwgik27FxY6hJ1MOfBvANHBBprYJB4JI8oo"
      />
    </Head>
  );
}
