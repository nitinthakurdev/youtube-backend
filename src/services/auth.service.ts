import { userModel } from "@/models/user.model";
import {IRegisterBody } from "@/types/interface";

export const createUsers = async(data:IRegisterBody):Promise<IRegisterBody>=>{
    const result = await userModel.create(data);
    const createdUser:IRegisterBody = {
        full_name:result.full_name,
        email:result.email,
        profile:result.profile
    }
    return createdUser
}

export const findByEmail = async(email:string):Promise<IRegisterBody>=>{
    const findUser = await userModel.findOne({email}).select('-password');
    return findUser as unknown as IRegisterBody;
}