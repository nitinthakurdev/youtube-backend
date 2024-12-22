import {Elysia} from "elysia";


export const UserRoute = new Elysia().state('users-version',1)
.get('create',()=>"user create running")