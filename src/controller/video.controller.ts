import { FFmpegUploader } from "@/utils/FFmpegUploader";
import { LocalImageUploader } from "@/utils/LocalImageUploader";

export const createVideo= async ({body, headers, set }: {body:{file:File}, headers: any; set: any }): Promise<any> => {
  const {file}  = body;
  const filePath = await LocalImageUploader(file) as string
  const ffmpeg  =  FFmpegUploader(filePath) 
  return ffmpeg
};
