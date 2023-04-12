import express, {NextFunction, Request, Response, response} from 'express';
import {PrismaClient} from '@prisma/client'


const studentRouter = express.Router()
const prisma = new PrismaClient();

studentRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getStudents = await prisma.student.findMany();
        res.json(getStudents)
    }
    catch(error) {
        return next(error)
    }
})
export default studentRouter