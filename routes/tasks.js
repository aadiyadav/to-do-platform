const express = require('express')
const taskController = require('../controller/tasks')
const router = express.Router()

router.post('/', taskController.fetch)
.post('/add', taskController.add)
.delete('/', taskController.delete)
.put('/', taskController.updateStatus);

exports.router = router