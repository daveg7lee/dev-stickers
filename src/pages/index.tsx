import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Home">
      <p>Welcome to DevStickers!</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
