import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal, Calendar as CalendarIcon } from "lucide-react";
import stocks from "../stockslist.js";
import { Calendar } from '@/components/ui/calendar.js';
import { format } from "date-fns";
import { Tag } from "lucide-react";

export default function AI() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [days, setDays] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckProfitLoss = () => {
    if (!selectedStock) {
      setError("Please select a stock to analyze your investment.");
      return;
    }

    if (!quantity) {
      setError("Enter the quantity of stocks you have invested in for accurate analysis.");
      return;
    }

    if (!days) {
      setError("Specify the investment duration in days for a better prediction.");
      return;
    }

    setError(null);
    console.log("Checking profit/loss for", selectedStock, quantity, days);
  };

  const clearFields = () => {
    setSelectedStock(null);
    setQuantity("");
    setDays(null);
    setError(null);
  };

  return (
    <AppLayout breadcrumbs={[{ label: "AI Analysis", href: "#" }]}>
      <Head title="AI Analysis" />

      <div className="flex flex-col md:flex-row h-auto p-4">
        <div className="w-full md:w-1/2 lg:w-1/4 mx-auto">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-center flex items-center justify-center space-x-2">
                AI Stock Investment Analysis
                <span className="flex items-center text-blue-600 text-xs font-semibold bg-blue-100 px-2 py-1 rounded-md ml-3">
                  <Tag className="h-3 w-3 mr-1" /> Beta
                </span>
              </h2>

              {error && (
                <Alert className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col space-y-1 text-left">
                  <div className="flex items-center">
                    <Terminal className="h-4 w-4 mr-2" />
                    <AlertTitle className="font-bold">Heads up!</AlertTitle>
                  </div>
                  <AlertDescription className="text-sm text-black">{error}</AlertDescription>
                </Alert>
              )}

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full text-left">
                    {selectedStock ? selectedStock.label : "Select a stock"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search for a stock..." />
                    <CommandList>
                      {stocks.map((stock) => (
                        <CommandItem
                          key={stock.value}
                          onSelect={() => {
                            setSelectedStock(stock);
                            setOpen(false);
                          }}
                        >
                          {stock.label}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Input
                type="number"
                placeholder="Enter quantity invested"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full"
              />

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${!days ? "text-muted-foreground" : ""}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {days ? format(days, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={days}
                    onSelect={(date) => {
                      setDays(date);
                      console.log("Selected date:", date);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Button onClick={handleCheckProfitLoss} className="w-full">
                Review Stock Performance
              </Button>
              <Button onClick={clearFields} className="w-full">
                Clear
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}