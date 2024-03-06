import express from 'express';
import { saveSentEmail } from '../controllers/mailController.mjs';
const router = express.Router();


router.route("/save")
.post(saveSentEmail);
export default router