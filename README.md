## Requirement

- Node.js
- PHP 8
- Composer
- MySql
- Web Server

## Installation

- Clone this project
- Navigate to the project
- Install dependencies `npm install` and `composer install`
- Rename ".env.example" file to ".env"
- Generate key `php artisan key:generate`
- Migrate database `php artisan migrate`
- Run project `php artisan serve` and `npm run dev`  

## Flow

#### Borrower

register -> login -> add loan -> show list and loan status

#### Lender

login -> display total data -> update loan status -> create offer 
