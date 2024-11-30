import express from "express";
import * as fs from "node:fs";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";

const file  = fs.readFileSync('src/api/routs/swagger/swagger.yml', 'utf8')
const swaggerDocument = YAML.parse(file)

const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;