import { Sequelize } from "sequelize";

// get the necessary environment variables
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

// build the connection url
const databaseURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

// create the instance (an instance is an object, made by a class) of sequelize
export const sequelize = new Sequelize(databaseURL, {
  define: {
    underscored: true, // column names in the DB will be in snake case
  },
  logging: false, // if false -> telling sequelize to not display the request in the console
  
});

try{
  await sequelize.authenticate();
  console.log("📚 Sequelize connected");
} catch (error){
  console.log("❌ Sequelize can't connect to database");
  console.log(error);
}