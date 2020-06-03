import Knex from 'knex';
//Importar o Knex com K maiúsculo por conta do Typescript

export async function up(knex: Knex){
  //CRIAR A TABELA
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('item_id').notNullable().references('id').inTable('items');
  })
}

export async function down(knex: Knex){
  //VOLTAR ATRÁS
  return knex.schema.dropTable('point_items')
}