exports.seed = function(knex) {
	return knex('recipes').insert([
		{ id: 1, department: "Accounting", user_id: 2},
	]);
};