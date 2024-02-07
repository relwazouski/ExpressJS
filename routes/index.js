const express = require ('express');
const router = express.Router();

const { getAll, create } = require('../controllers/index');

router.get('/', (reg, res) => {
    res.send('Hello World!');
});

router.get('/getall', getAll);
router.post('/create', create);

module.exports = router;