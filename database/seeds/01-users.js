exports.seed = function (knex) {
  return knex('users').insert([
    { id: 1, username: "Test1", password: "test1234", department: "Accounting" },
    { id: 2, username: "Test2", password: "test1234", department: "Sales" },
    { id: 3, username: "Test3", password: "test1234", department: "Finance" },
    { id: 4, username: "Test4", password: "test1234", department: "Accounting" },
    { id: 5, username: "Test5", password: "test1234", department: "Marketing" },
    { id: 6, username: "Test6", password: "test1234", department: "Marketing" }
  ])
};
