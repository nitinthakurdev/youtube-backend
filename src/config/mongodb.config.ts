import mongoose from "mongoose"


export const CreateConnection = async(URI:string):Promise<void> => {
    let isConnected:boolean = false;
    while(!isConnected){

        try {
            const connect = await mongoose.connect(URI,{dbName:'FunTube'});
            console.log("mongodb database connected successful");
            console.log(`host : ${connect.connection.host}`);
            isConnected = true
        } catch (error) {
            console.log("database not connected yet",error)
            console.log(" reTrying database connection...")
        };
    }
}