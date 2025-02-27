import PageHeaderContainer from "@/components/page-header-container";
import SubscriptionCard from "@/components/subscription-card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SubscriptionsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeaderContainer
        title="Vormo Subscriptions"
        description="All your past and ongoing subscriptions"
      />
      <Separator className="mb-8" />
      <div className="border min-h-screen flex md:justify-end rounded-lg shadow-inner p-4 bg-neutral-100">
        <div className="flex justify-center flex-col gap-y-8 md:w-1/3">
          <SubscriptionCard />
          <SubscriptionCard />
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
