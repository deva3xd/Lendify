<?php

namespace App\Http\Controllers;

use App\Models\LoanApplication;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    $loans = LoanApplication::all();
    return Inertia::render('Home', ['loans' => $loans]);
  }

  public function store(Request $request)
  {
    $validate = $request->validate([
      'amount' => 'required|integer|min:1000',
      'tenor' => 'required|integer|min:1',
      'purpose' => 'required|string|max:255'
    ]);

    LoanApplication::create([
      'user_id' => Auth::id(),
      'amount'  => $validate['amount'],
      'tenor'   => $validate['tenor'],
      'purpose' => $validate['purpose'],
      'status'  => 'pending',
    ]);

    return redirect()->route('home')->with('success', 'Data Added');
  }
}
