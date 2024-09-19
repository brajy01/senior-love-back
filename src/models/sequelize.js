import { Sequelize } from "sequelize";

// get the necessary environment variables
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

// build the connection url
const databaseURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

// create the instance (an instance is an object, made by a class) of sequelize
export const sequelize = new Sequelize(databaseURL, {
  define: {
    underscored: true, // les noms des colonnes dans le DB seront en snake case
  },
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

try {
  await sequelize.authenticate();
  console.log("📚 Sequelize connected");
} catch (error) {
  console.log("❌ Sequelize can't connect to database");
  console.log(error);
}
