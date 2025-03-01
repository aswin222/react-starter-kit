import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import Head from "@/components/Head";

const stocks = [
  { label: "Apple (AAPL)", value: "AAPL" },
  { label: "Tesla (TSLA)", value: "TSLA" },
  { label: "Amazon (AMZN)", value: "AMZN" },
  { label: "Google (GOOGL)", value: "GOOGL" },
  { label: "Microsoft (MSFT)", value: "MSFT" },
];

export default function AI() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [days, setDays] = useState("");

  const handleCheckProfitLoss = () => {
    console.log("Checking profit/loss for", selectedStock, quantity, days);
  };

  return (
    <AppLayout breadcrumbs={[{ label: "AI Analysis", href: "#" }]}>
      <Head title="AI Analysis" />
      <div className="container mx-auto py-12 max-w-lg">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Stock Investment Analysis</h2>
            <Combobox
              options={stocks}
              value={selectedStock}
              onChange={setSelectedStock}
              placeholder="Search for a stock"
            />
            <Input
              type="number"
              placeholder="Enter quantity invested"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Investment duration (days)"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <Button onClick={handleCheckProfitLoss} className="w-full">
              Check Profit/Loss Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}