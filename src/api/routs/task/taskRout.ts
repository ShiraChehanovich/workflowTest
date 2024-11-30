import express from "express";
import {TaskService} from "./taskService";
import {ErrorType, ResponseType} from "../../../utils/enums";
import {TaskType} from "../../../utils/types";

const router = express.Router();

router.get('/', async (_, res) => {
    const tasks = await TaskService.getAll();
    res.status(200).json(tasks);
})

router.get('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    const task = await TaskService.getById(id);
    res.status(200).json(task);
})

router.delete('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    try {
        await TaskService.delete(id);
        res.status(200).json({message: ResponseType.taskDeleted});
    } catch (error: any) {
        if (error.message === ErrorType.notFound) {
            res.status(404).json({message: ResponseType.taskNotFound});
        }
        res.status(500).json({message: error.message});
    }
})

router.put('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    const task: TaskType = req.body;
    task.id = id;
    try {
        const updatedTask = await TaskService.update(task);
        res.status(200).json(updatedTask);
    } catch (error: any) {
        if (error.message === ErrorType.notFound) {
            res.status(404).json({message: ResponseType.taskNotFound});
        }
        res.status(500).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    const body: TaskType = req.body;
    const task = await TaskService.create(body);
    res.status(201).json(task);
})

export default router;