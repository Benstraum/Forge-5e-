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
router.get('/classes', (req, res) => {
    const queryText = `
    SELECT class.*, array_agg(DISTINCT CONCAT(features.feature,': ', features.description)) feature, array_agg(DISTINCT skills.skill_name) skills, array_agg(DISTINCT class_starting_equipment) starter_gear
    FROM class 
    JOIN class_features
    ON class_features.class_id = class.id
    JOIN features
    ON features.id = class_features.feature_id
    JOIN class_skills
    ON class_skills.class_id = class.id
    JOIN skills
    ON skills.id = class_skills.skills_id
    JOIN class_starting_equipment
    ON class_starting_equipment.id = class.id
GROUP BY class.id;`
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