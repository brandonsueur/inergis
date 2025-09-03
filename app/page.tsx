import { Banner } from "@/components/banner";

import { Layout } from "@/components/layout";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <Layout>
      <Banner />

      <Services />
    </Layout>
  );
}
