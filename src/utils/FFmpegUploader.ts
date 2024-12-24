import path from "path";
import {v4 as uuidv4} from 'uuid';
import fs from "fs/promises";
import {exec} from "child_process";



 export const FFmpegUploader = async (filePath:string):Promise<any> => {
    const outputDir =  `../../public/output/${uuidv4()}`;
    const hlsPath = `${outputDir}/index.m3u8` ;
    const fileExist = await fs.exists(outputDir);
    if(!fileExist){
        await fs.mkdir(outputDir,{recursive:true})
    }

    const FFmpegCommand = `ffmpeg -i ${filePath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputDir}/sigment%03d.ts" -start_number 0 ${hlsPath}`;

 return  exec(FFmpegCommand,(error,stdout,stderr)=>{
        if(error){
            console.log(error)
        }
        console.log(`std error ${stderr}`)
        return stdout
    })
 }