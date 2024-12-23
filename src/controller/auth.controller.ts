import { createUsers, findByEmail } from "@/services/auth.service";
import { IRegisterParameter } from "@/types/params.interface";
import { IRegisterBody } from "@/types/interface";
import { cookieOptions } from "@/utils/utils";

const CreateUser = async({body,set,jwt,cookie}:IRegisterParameter) => {
    const findUser:IRegisterBody = await findByEmail(body.email as string);
    if(findUser){
        set.status = 403;
        return {message:"user alredy exist"}
    };

    const result = await createUsers(body);
    const token = await jwt.sign({email:result.email})
    cookie.auth.set({
        value:token,
        ...cookieOptions
    })
    set.status = 201
    return {message:"user created successful",data:result,token} 
}

export {CreateUser}