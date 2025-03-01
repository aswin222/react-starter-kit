import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, TrendingUp, TrendingDown, BarChart3, DollarSign } from "lucide-react";

interface Stock {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    name: string;
    exchange_code: string;
    symbol: string;
    date: string;
}

interface StockData {
    data: Stock[];
}

interface MarketPulseProps {
    stockData: StockData | null;
}

export default function MarketPulse({ stockData }: MarketPulseProps) {
    console.log('Stock Data:', stockData);
  
    return (
        <AppLayout breadcrumbs={[{ title: 'Pulse', href: '/market-pulse' }]}>
            <Head title="Market Pulse" />
            <div className="container mx-auto py-12">
                {stockData?.data?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stockData.data.map((stock, index) => {
                            const name = stock?.name ?? "N/A";
                            const symbol = stock?.symbol ?? `stock-${index}`;
                            const exchange = stock?.exchange_code ?? "Unknown Exchange";
                            const date = stock?.date ? new Date(stock.date).toLocaleDateString() : "N/A";
                            const open = stock?.open ? `$${stock.open.toFixed(2)}` : "N/A";
                            const high = stock?.high ? `$${stock.high.toFixed(2)}` : "N/A";
                            const low = stock?.low ? `$${stock.low.toFixed(2)}` : "N/A";
                            const close = stock?.close ? `$${stock.close.toFixed(2)}` : "N/A";
                            const volume = stock?.volume ? stock.volume.toLocaleString() : "N/A";
    
                            return (
                                <Card key={symbol} className="shadow-md">
                                    <CardHeader>
                                        <CardTitle>{name} ({symbol})</CardTitle>
                                        <CardDescription>Exchange: {exchange}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-500 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gray-500" /> {date}
                                        </p>
                                        <p className="mt-2 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-500" /> Open: {open}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <TrendingDown className="w-4 h-4 text-red-500" /> High: {high} | Low: {low}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <DollarSign className="w-4 h-4 text-blue-500" /> Close: {close}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="flex items-center gap-2">
                                            <BarChart3 className="w-4 h-4 text-purple-500" /> Volume: {volume}
                                        </p>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No market data available.</p>
                )}
            </div>
        </AppLayout>
    );
    
}
