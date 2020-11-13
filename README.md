# vue-laravel-MPA testing template

## Required
+ Node.js
+ NPM
+ Composer
+ WAMP / LAMP / LEMP / etc server

### Installation
```
git clone https://github.com/zzharuk/vuelara-template-mpa.git
```
```
cd vuelara-template-mpa
```
```
npm i
```
```
composer install
```
```
cp .env.example .env
```
```
php artisan key:generate
```
- Create an empty database for our application
- In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created
```
php artisan migrate
```
### PHP server
```
php artisan serve
```
### Fron-end VUE watch
```
npm run watch
```

** How to Setup a Laravel Project You Cloned from Github: [link](https://devmarketer.io/learn/setup-laravel-project-cloned-github-com/)