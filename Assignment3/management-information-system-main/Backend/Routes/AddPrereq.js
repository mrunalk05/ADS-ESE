const Express = require('../ServiceHost').Express;
const DatabaseRepository = require('../MySqlDb/MySqlDBrepository');
const Prereq = require('../Models/Prereq')
const sequelize = require('../ServiceHost').sequelize;

const router = Express.Router();

const Sequelize = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        const getQuery = 'select *  from Prereq';

        var QueryRes = await DatabaseRepository.query(getQuery, {
            replacement: [], type: Sequelize.QueryTypes.SELECT
        });
        
        var ans = []; //
        for (var i = 0; i < QueryRes.length; i++) {
            const getQueryS = 'select *  from Course where course_id = ' + QueryRes[i].course_id;
            const getQueryI = 'select *  from Course where course_id = ' +  + QueryRes[i].prereq_id;
            var QueryResS = await DatabaseRepository.query(getQueryS, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            var QueryResI = await DatabaseRepository.query(getQueryI, {
                replacement: [], type: Sequelize.QueryTypes.SELECT
            });
            console.log(QueryResS,QueryResI);
            var tmp = {
                course: QueryResS[0].title,
                prereq: QueryResI[0].title,
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
        var AddAddressResponse = await DatabaseRepository.insertOne(Prereq,req.body,null,transaction);
        console.log(AddAddressResponse)
        res.status(200).send(AddAddressResponse);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;