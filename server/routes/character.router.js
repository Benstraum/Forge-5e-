const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM character
    JOIN "user"
    ON "user".id = character.user_id
    WHERE "user".id = $1;`
    pool.query(queryText, [req.user.id])
        .then(result => res.send(result.rows))
        .catch(error => console.log('error in character get', error))
});
router.get('/races', (req, res) => {
    const queryText = `
    SELECT * FROM races`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => console.log('error in character get', error))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;