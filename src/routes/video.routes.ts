import { createVideo } from "@/controller/video.controller";
import Elysia, { t } from "elysia";
import {createBody} from '@/validation/authValidation'

export const VideoRoute = new Elysia().state('videos',1)
.post('/create',createVideo,{body:createBody})

