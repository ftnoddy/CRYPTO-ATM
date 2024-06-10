import express from 'express';
const router = express.Router();
import upload from '../upload/multerConfig.js';

import { registerUser, sendOtpMail, authUser,logoutUser,submitKycVerification , createBuyOrder, getBuyOrders} from '../controller/userController.js';

router.post('/', registerUser);
router.post('/login', authUser);
router.post('/send-otp-mail', sendOtpMail);
router.post('/buy-crypto', createBuyOrder);
router.get('/get-crypto/:email', getBuyOrders);
router.post('/logout', logoutUser);
router.post('/kyc', upload.single('idProofImage'), submitKycVerification);


export default router;
