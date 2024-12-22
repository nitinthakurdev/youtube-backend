import { Elysia } from "elysia";
import { UserRoute } from "@/routes/user.routes";

const SERVER_PORT: number = 3000;

export const start = (app: Elysia):void => {
    DbConnections();
    middlewareHandler(app);
    routesHandler(app);
    startServer(app);
}

function middlewareHandler(app: Elysia): void {

}

 async function DbConnections():Promise<void> {

}

function routesHandler(app: Elysia): void {
    app.get("/", () => "hii")
        .group('/api/v1', (app) =>
            app.group('/user', (app) => app.use(UserRoute))
        );
};



function startServer(app: Elysia): void {
    app.listen(SERVER_PORT);
    console.log(`server is up and running on port : ${SERVER_PORT}`);
};