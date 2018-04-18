
exports.up = function (knex, Promise) {
    return knex.schema.table('reviews', function(reviews) {
        reviews.dropColumn('album');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('reviews', function(reviews) {
        reviews.string('album').notNull();
    });
};