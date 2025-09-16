<?php

namespace App\Filament\Resources\LoanApplications\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class LoanApplicationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->disabled(),
                TextInput::make('amount')
                    ->disabled(),
                TextInput::make('tenor')
                    ->disabled(),
                TextInput::make('purpose')
                    ->disabled(),
                Select::make('status')
                    ->options(['pending' => 'Pending', 'approve' => 'Approve', 'reject' => 'Reject'])
                    ->required(),
            ]);
    }
}
