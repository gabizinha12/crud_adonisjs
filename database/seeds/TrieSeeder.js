"use strict";

/*
|--------------------------------------------------------------------------
| TrieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class TrieSeeder {
  async run() {
    const trie = await Database.table("tries");
    console.log(trie);
  }
}

module.exports = TrieSeeder;
