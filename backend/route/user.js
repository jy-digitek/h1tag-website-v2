const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const adminAuth=require('../middleware/auth')


router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.login);
router.route('/logout').get(userController.logout);
router.route('/roleupdate/:id').put(adminAuth.adminAuth,userController.updateRole);




module.exports=router;