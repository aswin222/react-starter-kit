<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PlansAndSubscriptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seeding Plans
        DB::table('plans')->insert([
            [
                'name' => 'Basic Plan',
                'description' => 'A basic plan with limited features',
                'amount' => 100.00,
                'current_amount' => 80.00,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Standard Plan',
                'description' => 'A standard plan with more features',
                'amount' => 200.00,
                'current_amount' => 150.00,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Premium Plan',
                'description' => 'A premium plan with all features',
                'amount' => 300.00,
                'current_amount' => 250.00,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Enterprise Plan',
                'description' => 'An enterprise-level plan with maximum benefits',
                'amount' => 500.00,
                'current_amount' => 400.00,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);

        // Seeding a Subscription for user_id 1
        DB::table('subscriptions')->insert([
            'user_id' => 1,
            'type' => 'monthly',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
