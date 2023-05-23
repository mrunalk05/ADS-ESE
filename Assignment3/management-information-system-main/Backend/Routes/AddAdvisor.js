const Express = require('../ServiceHost').Express;
const DatabaseRepository = require('../MySqlDb/MySqlDBrepository');
const advisor = require('../Models/Advisor')
const sequelize = require('../ServiceHost').sequelize;

const router = Express.Router();

const Sequelize = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        const getQuery = 'select *  from Advisor';

        var QueryRes = await DatabaseRepository.query(getQuery, {
            replacement: [], type: Sequelize.QueryTypes.SELECT
        });
        var ans = []; //
        for (var i = 0; i < QueryRes.length; i++) {
            const getQueryS = 'select *  from students where id = ' + QueryRes[i].s_id;
            const getQueryI = 'select *  from Instructor where id = ' +  + QueryRes[i].i_id;
            var QueryResS = await DatabaseRepository.query(getQueryS, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            var QueryResI = await DatabaseRepository.query(getQueryI, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            console.log(QueryResS,QueryResI);
            var tmp = {
                s_name: QueryResS[0].name,
                i_name: QueryResI[0].inst_name,
            }
            ans.push(tmp);
        }


        res.status(200).send(ans);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        var AddAddressResponse = await DatabaseRepository.insertOne(advisor, req.body, null, transaction);
        console.log(AddAddressResponse)
        res.status(200).send(AddAddressResponse);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;

