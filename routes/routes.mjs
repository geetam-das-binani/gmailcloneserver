import express from 'express';
import { saveSentEmail,getEmails ,
    saveDrafts,moveEmailsToTrash,getEmailDetails,
    toggleStarredEmail} from '../controllers/mailController.mjs';
const router = express.Router();


router.route("/save")
.post(saveSentEmail);

router.route("/get/:type")
.get(getEmails)

router.route("/save-draft")
.post(saveDrafts)

router.route("/move-to-trash/:type?")
.post(moveEmailsToTrash)

router.route("/get-email/:id")
.get(getEmailDetails)


router.route("/toggle-star").post(toggleStarredEmail)

export default router