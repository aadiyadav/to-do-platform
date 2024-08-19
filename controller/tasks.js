const model =  require('../model/tasks')
const Task = model.Task

exports.fetch =  async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch(err) {
        res.status(500).send(err)
    }
};

exports.add = async (req, res) => {
    const data = new Task(req.body);
    data.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.json(err)
        })
}

exports.delete = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.body.id);
        if (!deletedTask) {
            return res.status(404).send('Task not found');
        }
        res.json(deletedTask);
    } catch (err) {
        res.status(500).send(err);
    }
};  

exports.updateStatus = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.body.id,
            { status: req.body.status },
            { new: true } // Return the updated document
        );
        if (!updatedTask) {
            return res.status(404).send('Task not found');
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(500).send(err);
    }
};