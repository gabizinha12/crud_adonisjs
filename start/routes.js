"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "TrieController.index");
Route.post("/registro", "TrieController.register");
Route.get("/usuarios/:id/atualizar", "TrieController.edit");
Route.post("/usuarios/:id", "TrieController.update").as("trie.update");
Route.get("usuarios/:id", "TrieController.destroy").as("trie.destroy");
