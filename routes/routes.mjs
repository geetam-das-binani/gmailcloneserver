import express from 'express';
import { saveSentEmail,getEmails ,saveDrafts,moveEmailsToTrash} from '../controllers/mailController.mjs';
const router = express.Router();


router.route("/save")
.post(saveSentEmail);

router.route("/get/:type")
.get(getEmails)

router.route("/save-draft")
.post(saveDrafts)

router.route("/move-to-trash/:type")
.post(moveEmailsToTrash)
export default router