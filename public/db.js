const path = require('path');
const Knex = require("knex")

var knex = Knex({
    client: "sqlite3",
    connection: {
        filename: path.join(__dirname, 'database.sqlite')
    }
});


knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('age')
})
    .then(() => {
        console.log('TABLE CREATED')
    }).catch(err => {
        console.log('TABLE ALREADY CREATED', err)
    })
knex('users').insert({ name: 'Ermias Gashu', age: 22 }).then((vals) => {
    let result = knex.select("*").from("users")
    result.then((rows) => {
        console.log('SELECTED ', rows)
    })
})


