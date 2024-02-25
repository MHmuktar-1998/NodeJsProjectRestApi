const express = require('express');
const { getAllData, homeRouter, errorRouter, createData, updateData, deletData } = require('../controllers/users.controller');
const router = express.Router();



router.get('/users', getAllData);
router.get('/', homeRouter);
router.post('/users', createData);
router.put('/users/:id', updateData);
router.delete('/users/:id', deletData);





router.use(errorRouter);

module.exports = router;