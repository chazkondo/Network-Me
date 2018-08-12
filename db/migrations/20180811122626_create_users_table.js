
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username', 16).unique().notNullable();
    table.string('password', 60).notNullable(); 
    table.string('email').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};