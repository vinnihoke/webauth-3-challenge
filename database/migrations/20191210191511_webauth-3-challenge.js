
exports.up = function(knex) {
  return knex.schema
  	.createTable('users', column => {
		  column.increments();
		  column.string('username', 128).notNullable().unique()
		  column.string('passowrd', 128).notNullable()
	  })
	  .createTable('departments', column => {
			column.increments();
			column.string('department', 30).notNullable().unique()
			column.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete("CASCADE").onUpdate("CASCADE")
	  })
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('departments')
		.dropTableIfExists('users')
};