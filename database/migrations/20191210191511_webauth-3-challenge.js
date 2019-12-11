
exports.up = function (knex) {
	return knex.schema
		.createTable('users', column => {
			column.increments();
			column.string('username', 128).notNullable().unique()
			column.string('password', 128).notNullable()
			column.string('department', 30).notNullable()
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('users')
};