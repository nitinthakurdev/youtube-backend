import Bun from 'bun';
class Config {
    public MONGODB_URI: string ;
    public JWT_SECRET: string ;
    constructor(){
        this.MONGODB_URI = process.env.MONGODB_URI || '' ;
        this.JWT_SECRET = process.env.JWT_SECRET || '' ;
    }
}

export const config:Config = new Config();