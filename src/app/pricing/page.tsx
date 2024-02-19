"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import PricingBox, { PricingDetails } from "./components/pricing-box";
import TopupBox from "./components/top-up-box";

const tokens = [1200, 3000, 6000, 12000];

const pricing1: PricingDetails = {
  monthly: 0,
  yearly: 0,
  perks: [
    "y:100 initial tokens",
    "y:50 daily tokens for first month when tokens < 50",
    "n:No concurrent generations",
  ],
};

const pricing2: PricingDetails = {
  monthly: 5,
  yearly: 50,
  perks: [
    `y:${tokens[0]} monthly tokens`,
    `y:${tokens[0] / 15} tokens daily when tokens < ${tokens[0] / 15}`,
    "n:No concurrent generations",
  ],
};

const pricing3: PricingDetails = {
  monthly: 15,
  yearly: 15,
  perks: [
    `y:${tokens[1]} monthly tokens`,
    `y:${tokens[1] / 15} tokens daily when tokens < ${tokens[1] / 15}`,
    "y:5 concurrent generations",
  ],
};

const pricing4: PricingDetails = {
  monthly: 25,
  yearly: 250,
  perks: [
    `y:${tokens[2]} monthly tokens`,
    `y:${tokens[2] / 15} tokens daily when tokens < ${tokens[2] / 15}`,
    "y:10 concurrent generations",
  ],
};

const pricing5: PricingDetails = {
  monthly: 50,
  yearly: 500,
  perks: [
    `y:${tokens[3]} monthly tokens`,
    `y:${tokens[3] / 15} tokens daily when tokens < ${tokens[3] / 15}`,
    "y:15 concurrent generations",
  ],
};

export default function Page() {
  const [isMonthly, setMonthly] = useState(true);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-center text-4xl mt-10 font-bold">
        Unleash your full potential
      </h1>
      <p className="text-center mt-2">Choose a suitable plan for you</p>
      <p className="text-center mt-2">
        No limitations on what you use in any pack
      </p>
      <p className="text-center mt-2">
        Number of tokens is the only limitation
      </p>
      <ToggleGroup
        className="mt-5"
        type="single"
        value={isMonthly ? "true" : "false"}
        onValueChange={(v) => {
          if (v) {
            setMonthly(v === "true");
          }
        }}
      >
        <ToggleGroupItem value="true">Monthly</ToggleGroupItem>
        <ToggleGroupItem value="false">Yearly</ToggleGroupItem>
      </ToggleGroup>
      <div className="w-full mt-5 gap-5 flex flex-wrap justify-center">
        <PricingBox pricingDetails={pricing1} isMonthly={isMonthly} />
        <PricingBox pricingDetails={pricing2} isMonthly={isMonthly} />
        <PricingBox pricingDetails={pricing3} isMonthly={isMonthly} />
        <PricingBox pricingDetails={pricing4} isMonthly={isMonthly} />
        <PricingBox pricingDetails={pricing5} isMonthly={isMonthly} />
      </div>
      <h1 className="text-center text-4xl mt-10 font-bold">Top Up</h1>
      <p className="text-center mt-2">Add tokens to current plan</p>
      <div className="w-full mt-5 gap-5 flex flex-wrap justify-center">
        <TopupBox cost={1} tokens={200} />
        <TopupBox cost={5} tokens={tokens[0]} />
        <TopupBox cost={10} tokens={tokens[1]} />
        <TopupBox cost={20} tokens={tokens[2]} />
        <TopupBox cost={50} tokens={tokens[3]} />
      </div>
    </div>
  );
}
