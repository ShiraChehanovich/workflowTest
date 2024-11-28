import express from "express";
import Task from "../../../db/taskDB";

const router = express.Router();

router.get('/all', async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    res.status(200).json(task);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
        await task.destroy();
        res.status(200).json({message: "Task deleted successfully"});
    } else {
        res.status(404).json({message: "Task not found"});
    }

})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
        await task.update({
            ...req.body,
            updatedAt: Date.now(),
        });
        res.status(200).json(task);
    } else {
        console.log("hey there")
        res.status(404).json({message: "Task not found"});
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    const task = await Task.create(body)
    res.status(201).json(task);
})

export default router;