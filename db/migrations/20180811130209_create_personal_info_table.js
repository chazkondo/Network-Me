
exports.up = function(knex, Promise) {
  return knex.schema.createTable('personal_info', table =>{
    table.increments();
    table.string('first_name', 16).notNullable();
    table.string('last_name', 16).notNullable();
    table.string('location', 60)
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('personal_info');
};
