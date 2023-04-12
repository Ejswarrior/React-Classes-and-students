import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client'


const classRouter = express.Router()
const prisma = new PrismaClient();


classRouter.get('/', async (req:Request, res: Response, next) => {
    try{
        const getClasses = await prisma.classes.findMany({
            include: {students: true}
        })
        res.json(getClasses)
    }
    catch(error) {
        return next(error)
    }
})

classRouter.get('/:id', async (req: Request, res: Response, next) => {
    const id = req.params.id;
    try {
        const getClass = await prisma.classes.findUnique({
            where: {
                id: id
            },
            include: {students: true}
        });
        res.json(getClass)
    }
    catch(error) {
        return next(error)
    }
})

classRouter.get('/student/:id', async (req: Request, res: Response, next) => {
    const id = req.params.id;

    try {
        const getStudent = await prisma.student.findUnique({
            where: {
                id: id
            },
        });
        res.json(getStudent)
    }
    catch(error) {
        return next(error)
    }
})

classRouter.post('/', async (req: Request, res: Response, next) => {
    const {title} = req.body;
    try {
        const classes = await prisma.classes.create({
            data: {
                title: title,
            }
        })
        res.json(classes)
    }
    catch(error) {
        return next(Error)
    }
})

classRouter.put('/:id/add-student', async (req: Request, res: Response, next) => {
    const {name, email} = req.body;
    const id = req.params.id;

    try {
        const findClasses = await prisma.classes.update({
            where: {
                id: id
            },
            data: {
                students: {
                    create: {
                        name: name,
                        email: email,
                    }
                }
            }
        })
        res.redirect('/classes');
    }
    catch(error) {
        return next(error)
    }
})

classRouter.put('/:id/update', async (req: Request, res: Response, next) => {
    const {title} = req.body;
    const id = req.params.id

    try {
        const updatedClasses = await prisma.classes.update({
            where: {
                id: id,
            },
            data: {
                title: title,
            }
        })
        res.redirect('/classes')
    }
    catch(error) {
        return next(error)
    }
})

classRouter.put('/student/:id', async (req: Request, res: Response, next) => {
    const {name, email} = req.body;
    const id = req.params.id;

    try {
        const classes = await prisma.student.update({
            where: {
                id: id
            },
            data: {
                    name: name,
                    email: email,
                }
        })
        res.json(classes)
    }
    catch(error) {
        return next(error)
    }
})

classRouter.delete('/delete', async (req: Request, res: Response, next) => {
    const { id } = req.body;
    try {
        const deletedClass = await prisma.classes.delete({
            where: {
                id: id
            },
        })
        res.json (deletedClass)
    }
    catch(error) {
        return next(error)
    }
})

classRouter.delete('/student/delete', async (req: Request, res: Response, next) => {
    const { id } = req.body;

    try {
        const deletedClass = await prisma.student.delete({
            where: {
                id: id
            },
        })

        res.json(deletedClass)
    }
    catch(error) {
        return next(Error)
    }
})

export default classRouter