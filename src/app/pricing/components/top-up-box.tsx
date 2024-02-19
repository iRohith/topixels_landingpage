import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TopupBox({
  cost,
  tokens,
}: Readonly<{
  cost: number;
  tokens: number;
}>) {
  return (
    <Button variant="ghost" className="w-fit h-fit">
      <Card className="w-48 h-24">
        <CardHeader>
          <CardTitle className="text-center">{`$ ${cost}`}</CardTitle>
          <CardDescription className="text-center h-4">
            {`${tokens} tokens`}
          </CardDescription>
        </CardHeader>
      </Card>
    </Button>
  );
}
