exports.up = function(knex, Promise) {
    return knex.schema.createTable("student", table => {
        table.increments("id");
        table.text("first_name");
        table.text("last_name");
        table.text("photo");
        table.text("hometown_lat");
        table.text("hometown_long");
        table.text("prev_occupation");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("student");
};
