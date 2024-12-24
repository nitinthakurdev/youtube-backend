import { config } from "@/config/env.config";
import { CreateUser } from "@/controller/auth.controller";
import {jwt} from "@elysiajs/jwt";
import {Elysia} from "elysia";
import { v4 as uuidv4 } from 'uuid';


export const UserRoute = new Elysia().state('users-version',1)
.use(jwt({
    name: "jwt",
    secret: `${config.JWT_SECRET}`
}))
.post('/create',CreateUser)

    