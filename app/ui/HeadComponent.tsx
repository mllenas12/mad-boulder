import Head from "next/head";

const HeadComponent = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Head>
      <title>{title ? title : ""}</title>
      <meta name="description" content={description ? description : ""} />
    </Head>
  );
};

export default HeadComponent;
