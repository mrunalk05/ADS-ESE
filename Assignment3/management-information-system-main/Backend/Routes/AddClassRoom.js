const Express = require('../ServiceHost').Express;
const DatabaseRepository = require('../MySqlDb/MySqlDBrepository');
const classroom = require('../Models/classroom')
const sequelize = require('../ServiceHost').sequelize;
const Sequelize = require('sequelize');
const router = Express.Router();

router.post('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        var AddAddressResponse = await DatabaseRepository.insertOne(classroom, req.body, null, transaction);
        console.log(AddAddressResponse)
        res.status(200).send(AddAddressResponse);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        const getUserAddressQuery = 'select *  from classroom';

        var addressItems = await DatabaseRepository.query(getUserAddressQuery, {
            replacement: [], type: Sequelize.QueryTypes.SELECT
        });
        
        
        res.status(200).send(addressItems);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;