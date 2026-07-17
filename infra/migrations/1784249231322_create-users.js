/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id_usuario: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
    },

    nome: {
      type: "varchar(100)",
      notNull: true,
    },

    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    senha: {
      type: "varchar(255)",
      notNull: true,
    },

    criado_em: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("now()"),
    },

    alterado_em: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("now()"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};