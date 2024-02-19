import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle } from "lucide-react";

export type PricingDetails = {
  monthly: number;
  yearly: number;
  perks: string[];
};

export default function PricingBox({
  isMonthly,
  pricingDetails,
}: Readonly<{
  isMonthly: boolean;
  pricingDetails: PricingDetails;
}>) {
  const save = pricingDetails.monthly * 12 - pricingDetails.yearly;
  return (
    <Button variant="ghost" className="w-fit h-fit">
      <Card className="w-64 h-64">
        <CardHeader>
          <CardTitle className="text-center">
            {`$ ${isMonthly ? pricingDetails.monthly : pricingDetails.yearly}`}
          </CardTitle>
          <CardDescription className="text-center h-4">
            {isMonthly || save <= 0 ? "" : `save $${save}`}
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="w-full h-full flex flex-col gap-2">
            {pricingDetails.perks.map((perk) => (
              <div
                key={perk}
                className="flex flex-row items-start text-start justify-start min-w-fit min-h-fit"
              >
                {perk.charAt(0) == "y" ? (
                  <CheckCircle2 color="green" size={24} className="min-w-fit" />
                ) : (
                  <XCircle color="#A00000" size={24} className="min-w-fit" />
                )}
                <p className="text-sm text-wrap ms-2">{perk.substring(2)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Button>
  );
}
