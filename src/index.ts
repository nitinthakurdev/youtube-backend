import { Elysia } from "elysia";
import { start } from "@/server";

const initServer = ():void => {
const app:Elysia = new Elysia();
start(app)
}

initServer()
