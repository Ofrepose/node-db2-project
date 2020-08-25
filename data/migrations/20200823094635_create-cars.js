
exports.up = function(knex,promise) {
  return knex.schema.createTable('cars',tbl =>{
      tbl.increments();
      tbl.text('vin',17).unique().notNullable();
      tbl.text('make',128).notNullable();
      tbl.text('model',128).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.text('transmission',128).nullable();
      tbl.text('titleStatus',128).nullable();

  })
};

exports.down = function(knex,promise) {
  return knex.schema.dropTableIfExists('cars');
};
