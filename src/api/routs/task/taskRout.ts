import express from "express";

const router = express.Router();
router.get('/', (req, res) => {
    res.json("hello world!");
    res.status(200);
})

export default router;