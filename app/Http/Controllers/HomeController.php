<?php

namespace App\Http\Controllers;

use App\Models\LoanApplication;
use App\Models\Offer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    $userId = Auth::id();
    $loans = LoanApplication::where('user_id', $userId)->get();
    $offers = Offer::whereHas('loan', function ($query) use ($userId) {
      $query->where('user_id', $userId);
    })->with('loan')->get();
    return Inertia::render('Home', ['loans' => $loans, 'offers' => $offers]);
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

  public function updateStatus(Request $request, LoanApplication $loan)
  {
    $request->validate([
      'status' => 'required|in:pending,approve,reject',
    ]);
    $loan->status = $request->status;
    $loan->save();

    return redirect()->back()->with('success', 'Loan status updated!');
  }
}
