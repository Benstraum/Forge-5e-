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
    WHERE "user".id = $1
    ORDER BY character.id ASC;`
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
router.get('/fullCaster', (req, res) => {
    const queryText = `
    SELECT * FROM half_caster 
    WHERE id =1`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
router.get('/halfCaster', (req, res) => {
    const queryText = `
    SELECT * FROM full_caster 
    WHERE id =1`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
router.get('/spells', (req, res) => {
    const queryText = `
    SELECT dnd5_spells.*, array_agg(DISTINCT dnd5_classes.class_name) FROM dnd5_spells
    JOIN dnd5_class_spells
    ON dnd5_class_spells.spell_id = dnd5_spells.spell_id
    JOIN dnd5_classes
    ON dnd5_classes.class_id= dnd5_class_spells.class_id
    GROUP BY dnd5_spells.spell_id
    ORDER BY spell_level ASC;`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
//the spells routers still need sagas
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
router.get('/allSkills', (req, res) => {
    const queryText = `
    SELECT skills.skill_name, skills.description, skills.stat
    FROM skills`
    pool.query(queryText)
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
    let values =
        [req.user.id,
        req.body.portrait,
        req.body.name,
        req.body.bio,
        req.body.race.name,
        req.body.class.class_name,
        req.body.class.hit_dice,
        req.body.health,
        req.body.equipment,
        req.body.race.features,
        req.body.class.feature,
        req.body.skills,
        req.body.saves,
        req.body.class.half_caster_id,
        req.body.class.full_caster_id,
        req.body.stats.str,
        req.body.stats.dex,
        req.body.stats.con,
        req.body.stats.int,
        req.body.stats.wis,
        req.body.stats.cha]
    const queryText = `
    INSERT INTO character(user_id, portrait, name, bio, race, class, hit_dice,total_health, equipment, features_race, features_class, skills, saves, is_half_caster, is_full_caster, str, dex, con, int, wis, cha)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
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
            console.log('error in character put', error)
            res.sendStatus(500)
        })
});

router.put('/sheet', (req, res) => {
    console.log(req.body)
    values = [req.body.str, req.body.dex, req.body.con, req.body.int, req.body.wis, req.body.cha, req.body.id]
    const queryText = `
    UPDATE character
    SET "str"=$1,
    "dex"=$2,
    "con"=$3,
    "int"=$4,
    "wis"=$5,
    "cha"=$6
    WHERE id=$7
    ;
    `
    pool.query(queryText, [req.body.str, req.body.dex, req.body.con, req.body.int, req.body.wis, req.body.cha, req.body.id])
        .then(result => res.sendStatus(200))
        .catch(error => {
            console.log('error in ability put', error)
            res.sendStatus(500)
        })
})



router.get('/allSpells', (req, res) => {
    const queryText = `
    SELECT dnd5_spells.*, array_agg(DISTINCT dnd5_classes.class_name) AS classes FROM dnd5_spells
    join dnd5_class_spells
    ON dnd5_class_spells.spell_id = dnd5_spells.spell_id
    join dnd5_classes
    ON dnd5_classes.class_id= dnd5_class_spells.class_id
    GROUP BY dnd5_spells.spell_id
    ORDER BY spell_level ASC;`
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});
module.exports = router;

