import fs from "fs/promises";
import path from "path";
import {v4 as uuidv4} from 'uuid';

export const LocalImageUploader = async (file: File): Promise<string | null> => {
  try {
    
    const uploadDirectory = path.resolve(__dirname, "../../public/temp");

    const exist = await fs.exists(uploadDirectory)
    if(!exist){
        await fs.mkdir(uploadDirectory, { recursive: true });
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filePath = path.join(uploadDirectory, uuidv4() + path.extname(file.name));

    await fs.writeFile(filePath, buffer);

    console.log(`File uploaded successfully: ${filePath}`);
    return filePath
  } catch (error) {
    console.error("Error uploading the file:", error);
    return null
  }
};
