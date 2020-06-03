import Knex from 'knex';
//Importar o Knex com K maiúsculo por conta do Typescript

export async function up(knex: Knex){
  //CRIAR A TABELA
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  })
}

export async function down(knex: Knex){
  //VOLTAR ATRÁS
  return knex.schema.dropTable('items')
}