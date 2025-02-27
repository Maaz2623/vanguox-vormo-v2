import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="w-full border rounded-lg bg-white aspect-video shadow-md p-4">
      {/* Subscription ID */}
      <div>
        <p className="text-sm text-muted-foreground">Subscription ID</p>
        <p className="text-xl text-primary/80 font-semibold">9J7GH</p>
      </div>

      {/* Row for Plan & Status */}
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-sm text-muted-foreground">Plan</p>
          <p className="text-lg font-medium">Premium</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="text-lg font-medium text-green-600">Active</p>
        </div>
      </div>

      {/* Validity & Price */}
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-sm text-muted-foreground">Validity</p>
          <p className="text-lg font-medium">20-Oct-2025</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="text-lg font-medium">₹999/year</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
