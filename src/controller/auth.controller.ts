import { createUsers, findByEmail } from "@/services/auth.service";
import { IRegisterBody } from "@/types/interface";

const CreateUser = async({body,set}:{body:IRegisterBody,set:any}) => {
    const findUser:IRegisterBody = await findByEmail(body.email as string);
    if(findUser){
        set.status = 403;
        return {message:"user alredy exist"}
    };

    const result = await createUsers(body);
    return {message:"user created successful",data:result}
    
}

export {CreateUser}