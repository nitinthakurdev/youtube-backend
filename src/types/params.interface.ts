import { IRegisterBody } from "@/types/interface"
import { StatusMap } from "elysia"

export interface ICommonParameter{
    set:{status?: number | keyof StatusMap},
    cookie?:any,
    jwt?:any
}

export interface IRegisterParameter extends ICommonParameter{
    body:IRegisterBody
}
