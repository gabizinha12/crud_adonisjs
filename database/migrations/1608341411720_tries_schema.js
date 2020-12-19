"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TriesSchema extends Schema {
  up() {
    this.create("tries", (table) => {
      table.string("name", 120);
      table.string("email", 160);
      table.integer("id");
      table
        .enum("area", [
          "sou_medico",
          "sou_odontologista",
          "sou_nutricionista",
          "sou_fisioterapeuta",
          "sou_psicologo",
          "sou_fonoaudiologo",
          "sou_optometrista",
          "sou_profissional_de_educacao_fisica",
          "sou_administrador_e_nao_sou_profissional_da_saude",
        ])
        .defaultTo("sou_medico")
        .notNullable();
    });
  }

  down() {
    this.drop("tries");
  }
}

module.exports = TriesSchema;
