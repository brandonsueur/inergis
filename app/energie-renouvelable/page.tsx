"use client";

import { Layout } from "@/components/layout";
import { ActivityDetail } from "@/components/activityDetail";
import { activities } from "@/constants/activities";
import { notFound } from "next/navigation";
import { metadata } from "@/utils/metadata";

const activity = activities.find((a) => a.name === "énergie renouvelable");

// export const generateMetadata = () => {
//   if (!activity) return {};

//   return metadata(
//     `${activity.label} - Services professionnels`,
//     `${
//       activity.description
//     } Intervention rapide, devis gratuit. Contactez nos experts en ${activity.label.toLowerCase()} pour tous vos besoins.`
//   );
// };

export default function EnergieRenouvelablePage() {
  if (!activity) {
    notFound();
  }

  return (
    <Layout>
      <ActivityDetail activity={activity} />
    </Layout>
  );
}
