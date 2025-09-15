<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Offer extends Model
{
    protected $fillable = [
        'loan_id',
        'amount',
        'tenor'
    ];

    public function loan(): BelongsTo
    {
        return $this->belongsTo(LoanApplication::class, 'loan_id');
    }
}
