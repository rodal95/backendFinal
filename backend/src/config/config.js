import dotenv from "dotenv"
import ParsedArgs from "minimist"

dotenv.config()

const objArgs = ParsedArgs(process.argv.slice(2),{
    alias:{
        p:'port',
        m:'mode',
        e:'env'
    },
    default:{
        port:8080,
        mode:'FORK',
        env:'DEV'
    }
})

export const options = {
    server:{
        PORT:process.env.PORT || 8080,
        MODE:objArgs.mode,
        NODE_ENV:objArgs.env,
        dbType:process.env.DATABASE_TYPE || 'MONGO'

    },
    mongoDB:{
        mongoURL:process.env.MONGO_URL
    }
}