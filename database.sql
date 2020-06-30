CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "character" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "name" VARCHAR(300),
  "race" VARCHAR(100),
  "class" VARCHAR(100),
  "equipment" VARCHAR(2000),
  "feature_1" VARCHAR(1000),
  "feature_2" VARCHAR(1000),
  "skill_1" VARCHAR(100),
  "skill_2" VARCHAR(100),
  "skill_3" VARCHAR(100),
  "str" INTEGER,
  "dex" INTEGER,
  "con" INTEGER,
  "int" INTEGER,
  "wis" INTEGER,
  "cha" INTEGER
);

CREATE TABLE "races" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(300),
  "size" VARCHAR(50),
  "alignment" VARCHAR(300),
  "languages" VARCHAR(300),
  "stat_bonuses" VARCHAR(100),
  "features" VARCHAR(5000),
  "lore" VARCHAR(3000),
  "image_male" VARCHAR(1000),
  "image_female" VARCHAR(1000),
  "image_androgynous" VARCHAR(1000)
);

CREATE TABLE "class" (
  "id" SERIAL PRIMARY KEY,
  "class_name" VARCHAR(300),
  "lore" VARCHAR(5000),
  "hit_dice" INTEGER,
  "armor_types" VARCHAR(200),
  "weapon_types" VARCHAR(200),
  "tools" VARCHAR(200),
  "saving_throw_1" VARCHAR(100),
  "saving_throw_2" VARCHAR(100),
  "full_caster_id" INT REFERENCES full_caster DEFAULT null,
  "half_caster_id" INT REFERENCES half_caster DEFAULT null,
  "image_male" VARCHAR(300),
  "image_female" VARCHAR(300)
);


CREATE TABLE "full_caster" (
  "id" SERIAL PRIMARY KEY,
  "spells_known" INTEGER,
  "cantrips" INTEGER,
  "lvl_1" INTEGER,
  "lvl_2" INTEGER,
  "lvl_3" INTEGER,
  "lvl_4" INTEGER,
  "lvl_5" INTEGER,
  "lvl_6" INTEGER,
  "lvl_7" INTEGER,
  "lvl_8" INTEGER,
  "lvl_9" INTEGER
);

CREATE TABLE "half_caster" (
  "id" SERIAL PRIMARY KEY,
  "class_id" INTEGER,
  "spells_known" INTEGER,
  "lvl_1" INTEGER,
  "lvl_2" INTEGER,
  "lvl_3" INTEGER,
  "lvl_4" INTEGER,
  "lvl_5" INTEGER
);



CREATE TABLE "items" (
  "id" SERIAL PRIMARY KEY,
  "item" VARCHAR(100),
  "type" VARCHAR(100),
  "description" VARCHAR(1000),
  "armor_class" VARCHAR(100),
  "damage" VARCHAR(100),
  "images" VARCHAR(300)
);



CREATE TABLE "class_starting_equipment" (
  "id" INT REFERENCES "class",
  "class_name" VARCHAR(100),
  "choice_1a" VARCHAR(200),
  "choice_1b" VARCHAR(200),
  "choice_2a" VARCHAR(200),
  "choice_2b" VARCHAR(200),
  "choice_3a" VARCHAR(200),
  "choice_3b" VARCHAR(200),
  "choice_4a" VARCHAR(200),
  "choice_4b" VARCHAR(200)
);

INSERT INTO "class_starting_equipment"(
  "id"
  "class_name",
  "choice_1a",
  "choice_1b",
  "choice_2a",
  "choice_2b",
  "choice_3a",
  "choice_3b",
  "choice_4a",
  "choice_4b"
)
VALUES('1','Fighter','chain mail','leather armor, longbow, and 20 arrows','a martial weapon and a shield','two martial weapons','a light crossbow and 20 bolts','two handaxes','a dungeoneer’s pack','an explorer’s pack'),
('2','Ranger','scale mail','leather armor','two shortswords','two simple melee weapons','a dungeoneer’s pack','an explorer’s pack','A longbow and a quiver of 20 arrows','A longbow and a quiver of 20 arrows')
;

CREATE TABLE "features" (
  "id" SERIAL PRIMARY KEY,
  "feature" VARCHAR(100),
  "description" VARCHAR(2000)
);



INSERT INTO "features"("feature", "description")
VALUES('Fighting Style','You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.

Archery
You gain a +2 bonus to attack rolls you make with ranged weapons.

Defense
While you are wearing armor, you gain a +1 bonus to AC.

Dueling
When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.

Great Weapon Fighting
When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.

Protection
When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.

Two-Weapon Fighting
When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.'),
('Second Wind','You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.'),
('Favored Enemy','Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.

You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.

When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.

You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.'),
('Natural Explorer','You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

While traveling for an hour or more in your favored terrain, you gain the following benefits:

Difficult terrain doesn’t slow your group’s travel.
Your group can’t become lost except by magical means.
Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
If you are traveling alone, you can move stealthily at a normal pace.
When you forage, you find twice as much food as you normally would.
While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
You choose additional favored terrain types at 6th and 10th level.');

CREATE TABLE "class_features"(
"class_id" INT REFERENCES "class",
"feature_id" INT REFERENCES "features"
);



INSERT INTO "class_features"("class_id", "feature_id")
VALUES(1,1),(1,2),(2,3),(2,4);

CREATE TABLE "class_skills"(
"class_id"  INT REFERENCES "class",
"skills_id" INT REFERENCES "skills"
);
INSERT INTO "class_skills"("class_id", "skills_id")
VALUES(1, 1), (1, 2),(1, 4),(1, 6),(1, 7),(1, 8),(1, 12),(1, 18),(2,2),(2,4),(2,7),(2,9),(2,10),(2,12),(2,17),(2,18);


CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "skill_name" VARCHAR(50),
  "description" VARCHAR(1000)
);


INSERT INTO skills(skill_name, description)
VALUES('Acrobatics','Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when youre trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ships deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.'),
('Animal Handling','When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animals intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.'),
('Arcana','Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.'),
('Athletics','Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.'),
('Deception','Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someones suspicions with false assurances, or maintain a straight face while telling a blatant lie.'),
('History','Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.'),
('Insight','Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someones next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.'),
('Intimidation','When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.'),
('Investigation','When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.'),
('Medicine','A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.'),
('Nature','Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.'),
('Perception','Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.'),
('Performance','Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.'),
('Persuasion','When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.'),
('Religion','Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.'),
('Sleight of Hand', 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another persons pocket.'),
('Stealth','Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.'),
('Survival','The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.');

