/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("hotel_listing", {
        id: {
            type: "uuid",
            notNull: true,
            primaryKey: true,
            default: pgm.func("uuid_generate_v4()"),
            comment: "The unique id of the wallet",
        },
        user_id: {
            type: "uuid",
            notNull: true,
            references: '"users"',
            onDelete: "cascade",
        },
        price: {
            type: "numeric(15,4)",
            notNull: true,
        },
        rating: {
            type: "numeric(15,4)",
            notNull: true,
        },
        num_of_baths: {
            type: "numeric(15,4)",
            notNull: true,
        },
        num_of_beds: {
            type: "numeric(15,4)",
            notNull: true,
        },
        description: {
            type: "varchar(250)",
            notNull: true,
        },
        image: {
            type: "varchar(250)",
            notNull: true,
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = pgm => {
    pgm.dropTable("hotel_listing");
};
