const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `
    SELECT character.* FROM character
    JOIN "user"
    ON "user".id = character.user_id
    WHERE "user".id = $1;`
    pool.query(queryText, [req.user.id])
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
router.get('/races', (req, res) => {
    const queryText = `
    SELECT * FROM races`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
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
        .catch(error => {
            console.log('error in character get', error)
    res.sendStatus(500)
})

});
router.get('/equipment:id', (req, res) => {
    console.log(req.body)
    const queryText = `
    SELECT  class_starting_equipment.choice_1a, class_starting_equipment.choice_1b, class_starting_equipment.choice_2a, class_starting_equipment.choice_2b, class_starting_equipment.choice_3a, class_starting_equipment.choice_3b, class_starting_equipment.choice_4a, class_starting_equipment.choice_4b
    FROM class_starting_equipment
    JOIN class
    ON class.id = class_starting_equipment.id
    WHERE class.id =$1;`
    pool.query(queryText, [req.params.id])
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
router.get('/skill/:id', (req, res) => {
    const queryText = `
    SELECT skills.description
    FROM skills
    WHERE skills.skill_name = $1;`
    pool.query(queryText, [req.params.id])
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
/**
 * POST route template
 */
router.post('/create', (req, res) => {
    console.log('post req body', req.body)
    let values =
        [req.user.id,
        req.body.name,
        req.body.race.name,
        req.body.class.class_name,
        req.body.class.hit_dice,
        // req.body.health,
        req.body.equipment,
        req.body.race.features,
        req.body.class.feature,
        req.body.skills,
        req.body.stats.str,
        req.body.stats.dex,
        req.body.stats.con,
        req.body.stats.int,
        req.body.stats.wis,
        req.body.stats.cha]
    const queryText = `
    INSERT INTO character(user_id, name, race, class, hit_dice, equipment, features_race, features_class, skills, str, dex, con, int, wis, cha)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    ;`
    pool.query(queryText, values)
        .then(result => res.sendStatus(200))
        .catch(error => {
            console.log('error in character post', error)
            res.sendStatus(500)
        })
});
router.delete('/:id', (req, res) => {
    const queryText = `
   DELETE FROM character 
   WHERE id =$1
   ; `
    pool.query(queryText, [req.params.id])
        .then(result => res.sendStatus(200))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
router.put('/:id', (req, res) => {
    console.log(req.body)
    const queryText = `
    UPDATE character 
    SET "name" = $2
    WHERE id = $1
   ; `
    pool.query(queryText, [req.params.id, req.body.name])
        .then(result => res.sendStatus(200))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});

module.exports = router;

