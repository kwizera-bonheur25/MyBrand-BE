import mongoose from "mongoose";

mongoose.connection.on('open', () => console.log("Database connected"))

mongoose.connection.on('close', () => {
    console.info('Database closed');
  });

export const dbConnect = async () => {
    const dbConnection = process.env.dbConnection;
    if(!dbConnection){
        throw new Error('Database connection string is not provided')
    }
    await mongoose.connect(dbConnection)
}

export const testDbConnection = async () => {
    const dbConnectionString = process.env.testDbConnection;
    if(!dbConnectionString){
        throw new Error('Database connection string is not provided')
    }
    await mongoose.connect(dbConnectionString);
}

export const dbDisconnect = async () => await mongoose.disconnect()