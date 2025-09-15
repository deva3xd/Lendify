<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\User;
use App\Models\LoanApplication;
use App\Models\Offer;

class DashboardStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Borrowers', User::where('role', 'borrower')->count()),
            Stat::make('Total Loans', LoanApplication::count()),
            Stat::make('Total Offers', Offer::count()),
        ];
    }
}
