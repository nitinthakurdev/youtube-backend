import { CreateUser } from "@/controller/auth.controller";
import {Elysia} from "elysia";


export const UserRoute = new Elysia().state('users-version',1)
.post('/create',CreateUser)