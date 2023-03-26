import { SMTPClient } from 'emailjs';

export default async function handler(req , res) {
    

    const {messageBody} = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });
    
    try {
        const message = await client.sendAsync({
            text: "Teste",
            from: 'mrfalcaomarcio@gmail.com',
            to: 'mrfalcaomarcio@gmail.com',
            subject: 'testing emailjs',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({message:'Send Mail'})
}