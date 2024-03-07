import express from 'express';
import { saveSentEmail,getEmails ,saveDrafts} from '../controllers/mailController.mjs';
const router = express.Router();


router.route("/save")
.post(saveSentEmail);

router.route("/get/:type")
.get(getEmails)

router.route("/save-draft")
.post(saveDrafts)
export default router