<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class AuthController extends Controller
{
  public function login()
  {
    return Inertia::render('Auth/Login');
  }

  public function loginStore(Request $request)
  {
    $validate = $request->validate([
      'email' => 'required|string|lowercase|email|max:255',
      'password' => 'required|min:8',
    ]);

    if (Auth::attempt($validate)) {
      $request->session()->regenerate();

      if (Auth::user()->role !== 'borrower') {
        return back()->withErrors([
          'email' => 'Incorrect email or password.',
        ])->onlyInput('email');
      }
      return redirect()->intended('/home');
    }

    return back()->withErrors([
      'email' => 'Incorrect email or password.',
    ])->onlyInput('email');
  }

  public function register()
  {
    return Inertia::render('Auth/Register');
  }

  public function registerStore(Request $request)
  {
    $validate = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
      'password' => 'required|min:8',
      'role' => 'required|string|max:255'
    ]);
    User::create($validate);

    return redirect()->route('login')->with('success', 'Data Added');
  }

  public function logout()
  {
    Auth::logout();
    session()->flush();
    
    return redirect(route('login'));
  }
}
