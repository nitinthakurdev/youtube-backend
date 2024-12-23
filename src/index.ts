import { Elysia } from "elysia";
import { start } from "@/server";

const initServer = ():void => {
const app:Elysia = new Elysia({serve:{maxRequestBodySize:1024 * 1024 * 1024 * 50 }});
start(app)
}

initServer()
