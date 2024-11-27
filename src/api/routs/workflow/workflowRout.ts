import express from "express";
import Workflow from "../../../db/workflowDB";

const router = express.Router();

router.get('/all', async (_, res) => {
    const workflows = await Workflow.findAll();
    res.status(200).json(workflows);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const workflow = await Workflow.findByPk(id);
    res.status(200).json(workflow);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const workflow = await Workflow.findByPk(id);
    if (workflow) {
        await workflow.destroy();
        res.status(200).json({message: "Workflow deleted successfully"});
    } else {
        res.status(404).json({message: "Workflow not found"});
    }

})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const workflow = await Workflow.findByPk(id);
    if (workflow) {
        await workflow.update({
            ...req.body,
            updatedAt: Date.now(),
        });
        res.status(200).json(workflow);
    } else {
        console.log("hey there")
        res.status(404).json({message: "Workflow not found"});
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    const workflow = await Workflow.create(body)
    res.status(201).json(workflow);
})

export default router;