import { createTransport } from "nodemailer";

const emailAdmin = "alday559@gmail.com"
const passAdmin = "picihiwrjkijvatm"

const transporterEmail = createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:emailAdmin,
        pass:passAdmin
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
})

export {transporterEmail, emailAdmin}