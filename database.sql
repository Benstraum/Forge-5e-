CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "skill_name" VARCHAR(50),
  "stat" VARCHAR(3),
  "description" VARCHAR(1000)
);


INSERT INTO skills(skill_name, stat, description)
VALUES('Acrobatics','dex','Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when youre trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ships deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.'),
('Animal Handling','wis','When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animals intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.'),
('Arcana','int','Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.'),
('Athletics','str','Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.'),
('Deception','cha','Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someones suspicions with false assurances, or maintain a straight face while telling a blatant lie.'),
('History','int','Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.'),
('Insight','wis','Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someones next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.'),
('Intimidation','cha','When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.'),
('Investigation','int','When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.'),
('Medicine','wis','A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.'),
('Nature','wis','Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.'),
('Perception','wis','Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.'),
('Performance','cha','Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.'),
('Persuasion','cha','When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.'),
('Religion','int','Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.'),
('Sleight of Hand','dex', 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another persons pocket.'),
('Stealth','dex','Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.'),
('Survival','wis','The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.');

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
INSERT INTO "races" ("name","size","alignment","languages","stat_bonuses","features","lore","image_male","image_female","image_androgynous")
VALUES--half orc
('Half-Orc','Medium','Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.','You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.','Strength +2, Constitution +1','Darkvision
Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray,

Menacing
You gain proficiency in the Intimidation skill,

Relentless Endurance
When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest,

Savage Attacks
When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.','Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.

Scarred and Strong
Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 5 and 7 feet tall and usually weigh between 180 and 250 pounds.

Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame.','https://gamepedia.cursecdn.com/pathfinderkingmaker_gamepedia_en/thumb/4/45/Regongar.png/300px-Regongar.png?version=15c6b54c273d55b19f7e54440334003a',null,null),
--tiefling 
('Tiefling','Medium','Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.','You can speak, read, and write Common and Infernal.','Charisma +2, Intelligence +1','Darkvision
Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.

Hellish Resistance
You have resistance to fire damage.

Infernal Legacy
You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.','To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.

Infernal Bloodline
Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.',null,'https://i.pinimg.com/564x/2c/57/a4/2c57a4e10671e0f0d40bae53cc739051.jpg',null),
--Goliath
('Goliath','Medium','Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self- sufficiency and personal accountability, pushes them toward neutrality.','You can speak, read, and write Common and Giant.','Strength +2, Constitution +1','Natural Athlete
You have proficiency in the Athletics skill.

Stone’s Endurance
You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.

Powerful Build
You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.

Mountain Born
You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master’s Guide.','At the highest mountain peaks — far above the slopes where trees grow and where the air is thin and the frigid winds howl — dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with them. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying.

Driven Competitors
Every day brings a new challenge to a goliath. Food, water, and shelter are rare in the uppermost mountain reaches. A single mistake can bring doom to an entire tribe, while an individual’s heroic effort can ensure the entire group’s survival.

Goliaths thus place a premium on self-sufficiency and individual skill. They have a compulsion to keep score, counting their deeds and tallying their accomplishments to compare to others. Goliaths love to win, but they see defeat as a prod to improve their skills.

This dedication to competition has a dark side. Goliaths are ferocious competitors, but above all else they are driven to outdo their past efforts. If a goliath slays a dragon, he or she might seek out a larger, more powerful wyrm to battle. Few goliath adventurers reach old age, as most die attempting to surpass their past accomplishments.','https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/620/420/618/636286749289682134.png',null,null),
--Water Genasi
('Water Genasi', 'Medium','Independent and self-reliant, genasi tend toward a neutral alignment.','You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.','Constitution +2, Wisdom +1','Acid Resistance
You have resistance to acid damage.

Amphibious
You can breathe air and water.

Swim
You have a swimming speed of 30 feet.

Call to the Wave
You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.','Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.

The Elemental Planes are often inhospitable to natives of the Material Plane: crushing earth, searing flames, boundless skies, and endless seas make visiting these places dangerous for even a short time. The powerful genies, however, don’t face such troubles when venturing into the mortal world. They adapt well to the mingled elements of the Material Plane, and they sometimes visit—whether of their own volition or compelled by magic. Some genies can adopt mortal guise and travel incognito.

During these visits, a mortal might catch a genie’s eye. Friendship forms, romance blooms, and sometimes children result. These children are genasi: individuals with ties to two worlds, yet belonging to neither. Some genasi are born of mortal–genie unions, others have two genasi as parents, and a rare few have a genie further up their family tree, manifesting an elemental heritage that’s lain dormant for generations.

Occasionally, genasi result from exposure to a surge of elemental power, through phenomena such as an eruption from the Inner Planes or a planar convergence. Elemental energy saturates any creatures in the area and might alter their nature enough that their offspring with other mortals are born as genasi.',null,'https://i.redd.it/woynve86wcc41.jpg', null)
;




CREATE TABLE "character" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "portrait" VARCHAR(1000),
  "name" VARCHAR(300),
  "bio" VARCHAR(2000),
  "race" VARCHAR(100),
  "class" VARCHAR(100),
  "hit_dice" INTEGER,
  "total_health" INTEGER,
  "temp_health" INTEGER,
  "equipment" VARCHAR(2000),
  "features_race" VARCHAR(3000),
  "features_class" VARCHAR(3000),
  "skills" VARCHAR(500),
  "saves" VARCHAR(100),
  "str" INTEGER,
  "dex" INTEGER,
  "con" INTEGER,
  "int" INTEGER,
  "wis" INTEGER,
  "cha" INTEGER
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
INSERT INTO "full_caster"("spells_known","cantrips","lvl_1","lvl_2","lvl_3","lvl_4","lvl_5","lvl_6","lvl_7","lvl_8","lvl_9")
VALUES (2,3,2,0,0,0,0,0,0,0,0)
;

CREATE TABLE "half_caster" (
  "id" SERIAL PRIMARY KEY,
  "spells_known" INTEGER,
  "lvl_1" INTEGER,
  "lvl_2" INTEGER,
  "lvl_3" INTEGER,
  "lvl_4" INTEGER,
  "lvl_5" INTEGER
);

INSERT INTO "half_caster"("spells_known","lvl_1","lvl_2","lvl_3","lvl_4","lvl_5")
VALUES(0,0,0,0,0,0)
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

INSERT INTO "class"("class_name","lore","hit_dice","armor_types","weapon_types","tools","saving_throw_1","saving_throw_2","full_caster_id","half_caster_id","image_male","image_female")
VALUES
--Fighter
('Fighter','A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage.

A dwarf in chain mail interposes his shield between the ogre’s club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses.

A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd’s delight—and his own tactical advantage. His opponent’s sword flares with blue light an instant before she sends lightning flashing forth to smite him.

All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.',10,'All Armor & Shields','Simple & Martial Weapons','none','Strength','Constitution',null,null,'https://i.pinimg.com/originals/77/98/6d/77986da0d5291cfd6e7157c320c6cb99.jpg','https://www.flutesloot.com/wp-content/uploads/2019/02/commission___pathfinder___nanami_by_yuikami_da_d94acpq-1-724x1024.jpg'),
--Ranger
('Ranger','Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.

After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon’s thick scales.

Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he’s been tracking and sends the hawk to distract the creature while he readies his bow.

Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.',10,' Light/Medium Armor & Shields','Simple & Martial Weapons','None','Strength','Dexterity',null, null, null, 'https://i.pinimg.com/originals/dc/03/ae/dc03aeaac683b4186d86f9484cd14370.png')
;


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
  "id",
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


