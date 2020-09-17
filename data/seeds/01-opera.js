
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operas')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('operas').insert([
        {name: 'Aida'},
        {name: 'Les Troyens'},
        {name: 'Samson et Dalila'}
      ]);
    });
};
