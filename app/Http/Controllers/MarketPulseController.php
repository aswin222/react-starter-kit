<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class MarketPulseController extends Controller
{
    public function index()
    {
        // Define your API key and endpoint
        $apiKey = '64c7bf8d87a308d8ed0a0eddb8a25ae7';
        $endpoint = 'https://api.marketstack.com/v2/eod/latest';
        $symbols = 'AAPL,MSFT,GOOGL,AMZN,TSLA,FB,NFLX,NVDA,AMD,INTC,IBM,ORCL,CSCO,ADBE,PYPL,BA,V,MA,DIS,JNJ,
        PFE,MRNA,BABA,TWTR,SQ,UBER,LULU,NKE,TSM,SPCE';

        $date = now()->toDateString();

        // Make the API request
        $response = Http::get($endpoint, [
            'access_key' => $apiKey,
            'date_from' => $date,
            'date_to' => $date,
             'symbols' => $symbols, // Optional: specify symbols
            // 'limit' => 100, // Optional: specify the number of records
        ]);

        // Check if the request was successful
        if ($response->successful()) {
            $stockData = $response->json();

            Log::info('MarketStack API request Success', [
                'status' => $response->status(),
                'stockData' => $stockData,
          
            ]);
        
        } else {
            Log::error('MarketStack API request failed', [
                'status' => $response->status(),
                'body' => $response->body(),
                'headers' => $response->headers(),
            ]);
        
            $stockData = null;
        }

        // Pass the data to the Inertia.js view
        return Inertia::render('market-pulse', [
            'stockData' => $stockData,
        ]);
    }
}
