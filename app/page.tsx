import { Banner } from "@/components/banner";

import { Layout } from "@/components/layout";
import { Innovation } from "@/sections/innovation";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <Layout>
      <Banner />

      <Services />

      <Innovation />
    </Layout>
  );
}
