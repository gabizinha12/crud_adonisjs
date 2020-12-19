"use strict";
const Trie = use("App/Models/Trie");

class TrieController {
  async register({ request, response }) {
    const trie = new Trie();
    trie.name = request.input("name");
    trie.email = request.input("email");
    trie.area = request.input("area");

    await trie.save();
    return response.redirect("back");
  }
  async index({ view }) {
    const trie = await Trie.all();
    return view.render("index", { trie: trie.toJSON() });
  }
  async edit({ params, view }) {
    const trie = await Trie.find(params.id);
    return view.render("index", {
      trie: trie.toJSON(),
    });
  }

  async update({ params, request, response, session }) {
    const trie = await Trie.find(params.id);
    trie.name = request.input("name");
    trie.email = request.input("email");
    trie.area = request.input("area");
    await trie.save();
    session.flash({ successmessage: "Trie has been updated" });
    return response.redirect("/");
  }

  async destroy({ params, response, session }) {
    const trie = await Trie.find(params.id);
    await trie.delete();
    session.flash({ successmessage: "Trie has been deleted" });
    return response.redirect("/");
  }
}

module.exports = TrieController;
