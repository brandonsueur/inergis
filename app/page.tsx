import { Banner } from "@/components/banner";

import { Layout } from "@/components/layout";
import { Innovation } from "@/sections/innovation";
import { Services } from "@/sections/services";
import { Partners } from "@/sections/partners";
import { FAQ } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Banner />

      <Services />

      <Innovation />

      <Partners />

      <FAQ />
    </Layout>
  );
}
