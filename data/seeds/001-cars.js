
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
            id: 1,
            vin: '126548dfghtghfdw2',
            make:'Ford',
            model:'fusion',
            mileage:50000,
            transmission:'auto',
            titleStatus:'clean'
        },
        {
            id: 2,
            vin: '45678910111113141',
            make:'Ford',
            model:'Dart',
            mileage:10000,
            transmission:'manual',
            titleStatus:'stolen'
        },
        {
            id: 3,
            vin: '126248dfghtghfdw2',
            make:'Toyota',
            model:'Something',
            mileage:0,
            transmission:'auto',
            titleStatus:'clean'
        }
      ]);
    });
};
