import express from "express"
import { employerGetAllApplication, jobseekerGetAllApplication, jobSeekerDeleteApplication, postApplication} from '../controllers/applicationController.js'
import { isAuthorized } from '../middlewares/auth.js'

const router = express.Router();

router.get('/jobseeker/getall', isAuthorized, jobseekerGetAllApplication);
router.get('/employer/getall', isAuthorized, employerGetAllApplication);
router.post('/postapplication', isAuthorized, postApplication);
router.delete('/delete/:id', isAuthorized, jobSeekerDeleteApplication);

export default router;