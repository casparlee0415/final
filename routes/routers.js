import express from 'express';
import bodyParser  from 'body-parser';

import { homepage,brandpage,scooterpage}  from '../controllers/web_controller.js';

const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router.get('/',homepage);
router.get('/index',homepage);
router.post('/brand',brandpage);
router.post('/scooter',scooterpage);

export default router;