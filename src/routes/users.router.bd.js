const { Router } = require('express');
const { getUsers, insertUser, updateUser, deleteUser, deleteLast2days } = require('../controller/users.controller.bd');
const { saveDocs } = require('../utils/multer');
const { adminPermission } = require('../middlewares/permissions');

const userRouter = Router();

userRouter.get('/', adminPermission, getUsers);
userRouter.post('/', insertUser);
userRouter.put('/', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.delete('/deletelast', adminPermission, deleteLast2days);
module.exports = userRouter;