type Option = {
  value: string;
  label: string;
  aligned: string[];
  neutral: string[];
  opposing: string[];
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
};

export const questions = [
  {
    id: 1,
    question: 'How do you feel about baubles?',
    options: [
      {
        value: '1',
        label: 'Literally cannot get enough of them',
        aligned: ['Enchanter', 'Sigilist', 'Witch'],
        neutral: [
          'Elementalist',
          'Necromancer',
          'Summoner',
          'Illusionist',
          'Soothsayer',
        ],
        opposing: ['Witch', 'Chronomancer', 'Thaumaturge'],
      },
      {
        value: '2',
        label: 'I feel not one way or another',
        aligned: ['Soothsayer', 'Thaumaturge'],
        neutral: ['Illusionist', 'Summoner'],
        opposing: ['Enchanter', 'Sigilist'],
      },
      {
        value: '3',
        label:
          'Bah! Material trivialities pull the proverbial wool over our eyes in the face of universal truth!',
        aligned: ['Necromancer', 'Summoner', 'Illusionist'],
        neutral: ['Elementalist', 'Soothsayer', 'Witch'],
        opposing: ['Enchanter'],
      },
      {
        value: '4',
        label: 'Can they be redistributed to aide the wretched?',
        aligned: ['Thaumaturge', 'Witch', 'Soothsayer'],
        neutral: ['Elementalist', 'Chronomancer', 'Summoner', 'Illusionist'],
        opposing: [],
      },
    ],
  },
  {
    id: 2,
    question:
      "After clearing a demon's den, you happen upon a strange tome inscribed with a yet to be deciphered rune. How do you proceed?",
    options: [
      {
        value: '1',
        label:
          'Turn it over to the appropriate council; such artifacts are not to be trifled with',
        aligned: ['Thaumaturge', 'Elementalist'],
        neutral: ['Witch', 'Soothsayer', 'Illusionist', 'Summoner'],
        opposing: ['Chronomancer', 'Necromancer'],
      },
      {
        value: '2',
        label:
          'Carry it back to my library... there must be a translation or mention of it somewhere in there...',
        aligned: ['Sigilist', 'Chronomancer'],
        neutral: [
          'Witch',
          'Soothsayer',
          'Illusionist',
          'Summoner',
          'Necromancer',
          'Elementalist',
        ],
        opposing: ['Thaumaturge'],
      },
      {
        value: '3',
        label:
          'Endeavor to use it! I can feel the power of other planes of existence coursing through it, waiting to be harnessed...',
        aligned: ['Summoner', 'Necromancer'],
        neutral: ['Chronomancer', 'Elementalist', 'Illusionist'],
        opposing: ['Thaumaturge', 'Witch', 'Soothsayer'],
      },
      {
        value: '4',
        label:
          'Understand its power and thus transfigure it into a weapon for my warband',
        aligned: ['Enchanter'],
        neutral: ['Elementalist', 'Chronomancer', 'Summoner', 'Illusionist'],
        opposing: ['Thaumaturge'],
      },
    ],
  },
  {
    id: 3,
    question: 'Choose the one that best describes your relationship to nature.',
    options: [
      {
        value: '1',
        label:
          'It is the instrument through which my true power can be expressed!',
        aligned: ['Elementalist', 'Summoner', 'Chronomancer'],
        neutral: [
          'Illusionist',
          'Thaumaturge',
          'Soothsayer',
          'Enchanter',
          'Sigilist',
        ],
        opposing: ['Witch'],
      },
      {
        value: '2',
        label:
          'We are borne of it and fated to become one with it once again. Nothing can be gained from going against its will',
        aligned: ['Witch', 'Soothsayer'],
        neutral: [
          'Thaumaturge',
          'Illusionist',
          'Elementalist',
          'Necromancer',
          'Enchanter',
          'Sigilist',
        ],
        opposing: ['Chronomancer', 'Summoner'],
      },
      {
        value: '3',
        label: 'Just another system of rules to bend and break as I please',
        aligned: ['Chronomancer', 'Illusionist', 'Necromancer'],
        neutral: ['Elementalist', 'Summoner', 'Enchanter', 'Sigilist'],
        opposing: ['Witch', 'Soothsayer', 'Thaumaturge'],
      },
      {
        value: '4',
        label: "I hate it when it's cold out",
        aligned: ['Sigilist'],
        neutral: [
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Thaumaturge',
          'Enchanter',
          'Witch',
          'Soothsayer',
        ],
        opposing: ['Elementalist', 'Necromancer'],
      },
    ],
  },
  {
    id: 4,
    question: 'Finish the statement: Knowledge is...',
    options: [
      {
        value: '1',
        label: '... best stored, indexed, sorted, and understood',
        aligned: ['Sigilist'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Thaumaturge',
          'Soothsayer',
          'Enchanter',
          'Necromancer',
        ],
        opposing: ['Witch'],
      },
      {
        value: '2',
        label: '... built brick by brick, over long decades of honing craft',
        aligned: ['Enchanter', 'Elementalist'],
        neutral: [
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Thaumaturge',
          'Soothsayer',
          'Sigilist',
          'Necromancer',
          'Witch',
        ],
        opposing: [],
      },
      {
        value: '3',
        label: '... worthless if misused',
        aligned: ['Thaumaturge', 'Witch', 'Soothsayer'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Enchanter',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label:
          '... found by looking forward and back, through eons and universes beyond our comprehension',
        aligned: ['Chronomancer', 'Illusionist', 'Summoner', 'Soothsayer'],
        neutral: ['Elementalist', 'Enchanter', 'Sigilist', 'Necromancer'],
        opposing: ['Witch', 'Thaumaturge'],
      },
      {
        value: '5',
        label: '... mine, all mine!',
        aligned: ['Elementalist', 'Necromancer'],
        neutral: [
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
        ],
        opposing: ['Witch', 'Thaumaturge', 'Soothsayer'],
      },
    ],
  },
  {
    id: 5,
    question: 'With which vestments do you adorn yourself?',
    options: [
      {
        value: '1',
        label: 'Black. All black',
        aligned: ['Necromancer', 'Chronomancer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Sigilist',
          'Witch',
          'Enchanter',
          'Soothsayer',
        ],
        opposing: ['Illusionist', 'Thaumaturge'],
      },
      {
        value: '2',
        label: 'Fine furs and cloths cut from the finest tailors shops',
        aligned: ['Enchanter', 'Sigilist', 'Elementalist', 'Chronomancer'],
        neutral: ['Necromancer', 'Summoner', 'Illusionist', 'Thaumaturge'],
        opposing: ['Soothsayer', 'Witch'],
      },
      {
        value: '3',
        label: 'Sensible work boots and gloves',
        aligned: ['Enchanter'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Thaumaturge',
          'Sigilist',
          'Necromancer',
          'Witch',
          'Soothsayer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label: 'Bright and bold robes emblazoned with glittering patterns!',
        aligned: ['Illusionist', 'Elementalist', 'Summoner'],
        neutral: [
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Soothsayer',
          'Thaumaturge',
        ],
        opposing: ['Necromancer', 'Witch'],
      },
      {
        value: '5',
        label: 'Mud. Moss. Leaves when I am feeling modest',
        aligned: ['Witch', 'Soothsayer'],
        neutral: ['Necromancer'],
        opposing: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
        ],
      },
    ],
  },
  {
    id: 6,
    question: 'And for your hat?',
    options: [
      {
        value: '1',
        label: 'The taller and pointier the better',
        aligned: ['Elementalist', 'Illusionist', 'Summoner'],
        neutral: [
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Necromancer',
          'Witch',
          'Soothsayer',
          'Thaumaturge',
        ],
        opposing: [],
      },
      {
        value: '2',
        label: 'Well I do hate the cold, so something to cover my ears',
        aligned: ['Sigilist'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Thaumaturge',
          'Enchanter',
          'Necromancer',
          'Witch',
          'Soothsayer',
        ],
        opposing: [],
      },
      {
        value: '3',
        label: 'A hood to obscure my visage',
        aligned: ['Necromancer', 'Soothsayer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Thaumaturge',
          'Enchanter',
          'Sigilist',
          'Witch',
        ],
        opposing: ['Illusionist', 'Chronomancer'],
      },
      {
        value: '4',
        label: 'A nest of sticks',
        aligned: ['Witch'],
        neutral: ['Necromancer', 'Soothsayer'],
        opposing: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
        ],
      },
      {
        value: '5',
        label: 'Loud! Demanding attention!',
        aligned: ['Illusionist', 'Chronomancer', 'Elementalist'],
        neutral: [
          'Summoner',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Soothsayer',
          'Thaumaturge',
        ],
        opposing: ['Necromancer'],
      },
    ],
  },
  {
    id: 7,
    question: 'Choose your preferred familiar.',
    options: [
      {
        value: '1',
        label: 'Black cat',
        aligned: ['Witch'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Necromancer',
          'Soothsayer',
        ],
        opposing: ['Thaumaturge'],
      },
      {
        value: '2',
        label: 'Bat',
        aligned: ['Necromancer', 'Witch'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Illusionist',
          'Summoner',
          'Soothsayer',
          'Enchanter',
        ],
        opposing: ['Sigilist', 'Thaumaturge'],
      },
      {
        value: '3',
        label: 'Owl',
        aligned: ['Elementalist', 'Chronomancer'],
        neutral: [
          'Illusionist',
          'Summoner',
          'Enchanter',
          'Sigilist',
          'Necromancer',
          'Witch',
          'Soothsayer',
          'Thaumaturge',
        ],
        opposing: [],
      },
      {
        value: '4',
        label: 'Trusty hound',
        aligned: ['Enchanter', 'Soothsayer', 'Thaumaturge'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Witch',
        ],
        opposing: ['Necromancer'],
      },
      {
        value: '5',
        label: 'Horned and hooved imp',
        aligned: ['Summoner', 'Illusionist', 'Necromancer'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Soothsayer',
        ],
        opposing: ['Thaumaturge'],
      },
      {
        value: '6',
        label: 'Dusty old book and a lit hearth',
        aligned: ['Sigilist'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Summoner',
          'Illusionist',
          'Necromancer',
          'Witch',
          'Soothsayer',
          'Thaumaturge',
        ],
        opposing: ['Enchanter'],
      },
    ],
  },
  {
    id: 8,
    question:
      "Consider the following hypothetical: You are an apprentice. One night, toiling away on a transcription, you witness your rival apprentice secret away your charge's prized orb. What do you do next?",
    options: [
      {
        value: '1',
        label:
          'Conspire with him to overtake the doddering old man with the help of the artifact, then disposing of the useful fool. I will therefore take my rightful place as the most powerful wizard in the realm!',
        aligned: ['Necromancer', 'Elementalist', 'Illusionist', 'Chronomancer'],
        neutral: ['Summoner', 'Sigilist', 'Witch'],
        opposing: ['Soothsayer', 'Enchanter', 'Thaumaturge'],
      },
      {
        value: '2',
        label:
          "Find my master, he will finally know of this cur's conniving ways!",
        aligned: ['Thaumaturge', 'Elementalist', 'Summoner'],
        neutral: ['Illusionist', 'Soothsayer', 'Enchanter', 'Sigilist'],
        opposing: ['Necromancer', 'Witch', 'Chronomancer'],
      },
      {
        value: '3',
        label:
          'Nothing; I have seen many ways this ends, none of them good for my dearest enemy',
        aligned: ['Chronomancer', 'Soothsayer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label:
          'Confront him directly - he will see the err of his choice, given a chance',
        aligned: ['Thaumaturge', 'Enchanter'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Witch',
          'Soothsayer',
          'Chronomancer',
        ],
        opposing: ['Necromancer'],
      },
      {
        value: '5',
        label: 'Finish the transcription as I was instructed!',
        aligned: ['Sigilist'],
        neutral: ['Thaumaturge'],
        opposing: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Necromancer',
          'Witch',
          'Soothsayer',
          'Enchanter',
          'Chronomancer',
        ],
      },
    ],
  },
  {
    id: 9,
    question: 'When merry-making, what is your preferred folly?',
    options: [
      {
        value: '1',
        label:
          'Surrounded by companions, picking a diddy on my well-worn lute, a flagon of ale nearby',
        aligned: ['Enchanter', 'Soothsayer', 'Chronomancer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Witch',
          'Thaumaturge',
        ],
        opposing: ['Necromancer'],
      },
      {
        value: '2',
        label:
          'Singing a long-forgotten song, yearning for a far-off time and place',
        aligned: ['Soothsayer', 'Witch', 'Thaumaturge'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Enchanter',
          'Chronomancer',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '3',
        label:
          'Dipping into the purest pool of the forest, lost in sweet birdsong',
        aligned: ['Witch', 'Elementalist'],
        neutral: [
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
          'Chronomancer',
          'Soothsayer',
        ],
        opposing: ['Necromancer'],
      },
      {
        value: '4',
        label: "Dalliances with the townsfolk's maidens and/or bachelors",
        aligned: ['Chronomancer', 'Illusionist', 'Summoner'],
        neutral: ['Elementalist', 'Enchanter', 'Sigilist', 'Witch'],
        opposing: ['Thaumaturge', 'Necromancer', 'Soothsayer'],
      },
      {
        value: '5',
        label:
          'Shocking common folk with trivial displays of my power - beautiful lights, fleeting feelings of ecstasy, visions of other worlds, etc.',
        aligned: ['Illusionist', 'Elementalist', 'Summoner'],
        neutral: [
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Soothsayer',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '6',
        label: 'Conversing with the dead',
        aligned: ['Necromancer', 'Soothsayer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Enchanter',
          'Chronomancer',
        ],
        opposing: [],
      },
    ],
  },
  {
    id: 10,
    question:
      'If you were not magically inclined, how would you pass your wretched, mortal life?',
    options: [
      {
        value: '1',
        label: 'As a healer and trusted source of wisdom in my community',
        aligned: ['Soothsayer', 'Thaumaturge'],
        neutral: [
          'Sigilist',
          'Witch',
          'Necromancer',
          'Chronomancer',
          'Enchanter',
        ],
        opposing: ['Elementalist', 'Summoner', 'Illusionist'],
      },
      {
        value: '2',
        label: 'On the road, an itinerant wanderer seeking adventure',
        aligned: ['Chronomancer', 'Summoner', 'Illusionist'],
        neutral: [
          'Elementalist',
          'Necromancer',
          'Enchanter',
          'Witch',
          'Thaumaturge',
          'Soothsayer',
        ],
        opposing: ['Sigilist'],
      },
      {
        value: '3',
        label:
          'In the workshop - a master craftsman dedicated to their skill and quality of their product',
        aligned: ['Sigilist', 'Enchanter'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Necromancer',
          'Witch',
          'Thaumaturge',
          'Soothsayer',
          'Chronomancer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label: "As a master of the lord's hounds",
        aligned: ['Witch', 'Summoner'],
        neutral: [
          'Elementalist',
          'Chronomancer',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
          'Soothsayer',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '5',
        label: 'Pulling the lever on the gallows - as an executioner',
        aligned: ['Neceomancer'],
        neutral: [],
        opposing: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Soothsayer',
          'Chronomancer',
        ],
      },
    ],
  },
  {
    id: 11,
    question: 'Choose a rock.',
    options: [
      {
        value: '1',
        label: 'An emerald, as green as the northern seas',
        aligned: ['Elementalist', 'Summoner', 'Illusionist', 'Soothsayer'],
        neutral: [
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '2',
        label: 'Obsidian - smooth as glass, inscrutably dark',
        aligned: ['Necromancer', 'Chronomancer', 'Witch'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Enchanter',
          'Soothsayer',
        ],
        opposing: ['Thaumaturge'],
      },
      {
        value: '3',
        label: 'Sandstone. This too shall pass',
        aligned: ['Soothsayer', 'Chronomancer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label: 'A slab of marble, from a foreign quarry',
        aligned: ['Illusionist', 'Enchanter', 'Sigilist'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Chronomancer',
          'Witch',
          'Thaumaturge',
          'Necromancer',
          'Soothsayer',
        ],
        opposing: [],
      },
      {
        value: '5',
        label:
          "A riverstone worn perfectly round, begging to be skipped on the quiet surface of this tributary's confluence",
        aligned: ['Witch', 'Elementalist', 'Chronomancer'],
        neutral: [
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
          'Necromancer',
          'Soothsayer',
        ],
        opposing: [],
      },
    ],
  },
  {
    id: 12,
    question: 'What is your preferred style of facial hair?',
    options: [
      {
        value: '1',
        label: 'A dashing mustache and goatee',
        aligned: ['Elementalist', 'Summoner', 'Illusionist', 'Chronomancer'],
        neutral: [
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
          'Necromancer',
          'Soothsayer',
        ],
        opposing: ['Witch'],
      },
      {
        value: '2',
        label: 'One wispy long grey beard, seemingly older than its owner',
        aligned: ['Soothsayer', 'Thaumaturge'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Necromancer',
          'Chronomancer',
          'Witch',
        ],
        opposing: [],
      },
      {
        value: '3',
        label: 'Unkempt, thick, wild',
        aligned: ['Witch', 'Necromancer'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Chronomancer',
          'Enchanter',
          'Sigilist',
          'Thaumaturge',
          'Soothsayer',
        ],
        opposing: [],
      },
      {
        value: '4',
        label: 'Pencil stache',
        aligned: ['Necromancer'],
        neutral: [],
        opposing: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Enchanter',
          'Sigilist',
          'Witch',
          'Thaumaturge',
          'Soothsayer',
          'Chronomancer',
        ],
      },
      {
        value: '5',
        label: 'Muttonchops',
        aligned: ['Enchanter', 'Thaumaturge'],
        neutral: [
          'Elementalist',
          'Summoner',
          'Illusionist',
          'Sigilist',
          'Witch',
          'Chronomancer',
          'Soothsayer',
          'Necromancer',
        ],
        opposing: [],
      },
      {
        value: '6',
        label:
          'Self-aware amount of stubble - handsome, but unfortunately, you know it',
        aligned: ['Chronomancer', 'Summoner', 'Thaumaturge', 'Illusionist'],
        neutral: ['Elementalist', 'Enchanter', 'Sigilist', 'Necromancer'],
        opposing: ['Witch', 'Soothsayer'],
      },
    ],
  },
];
