import { Context, Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { UserRoute } from "@/routes/user.routes";
import { config } from "@/config/env.config";
import { CreateConnection } from "@/config/mongodb.config";
import { VideoRoute } from "@/routes/video.routes";

const SERVER_PORT: number = 3000;

export const start = (app: Elysia): void => {
    DbConnections();
    middlewareHandler(app);
    routesHandler(app);
    startServer(app);
}

function middlewareHandler(app: Elysia): void {
    app.use(swagger())
        .use(cors())

}

async function DbConnections(): Promise<void> {
    await CreateConnection(config.MONGODB_URI)
}

function routesHandler(app: Elysia): void {
    app.get("/", () => "server is halthy and ok 👍")
        .group('/api/v1', (app) =>
            app.group('/user', (app) => app.use(UserRoute))
                .group("/video", (app) => app.use(VideoRoute))
        );
};



function startServer(app: Elysia): void {
    app.listen(SERVER_PORT);
    console.log(`server is up and running on port : ${SERVER_PORT}`);
};