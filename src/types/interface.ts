import { ObjectId } from "mongoose";

export interface IRegisterBody {
    _id?:ObjectId;
    full_name?:string;
    email?:string;
    password?:string;
    profile?:string;
}

