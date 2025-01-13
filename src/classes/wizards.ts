export const wizardClasses = [
  {
    name: 'Chronomancer',
    aka: 'Timerider',
    symbols: 'hourglasses, wheels',
    description:
      'Chronomancers use magic to manipulate time itself. As the youngest branch of magic, it is less developed and less understood than any of the others, and thus potentially the most dangerous. Chronomancers tend to gamblers and risk-takers - those who prefer a quick path to power.',
    aligned: ['Elementalist', 'Necromancer', 'Soothsayer'],
    neutral: ['Illusionist', 'Sigilist', 'Thaumaturge', 'Summoner', 'Witch'],
    opposed: ['Enchanter'],
  },
  {
    name: 'Elementalist',
    aka: 'Fire/Water/Earth/Air Mage',
    symbols: 'depictions of the four elements',
    description:
      'Elementalists are the most outwardly powerful type of wizard. Their magic is centered on controlling the four elements, usually in loud, explosive, and unsubtle ways.',
    aligned: ['Chronomancer', 'Enchanter', 'Summoner'],
    neutral: ['Necromancer', 'Sigilist', 'Soothsayer', 'Thaumaturge', 'Witch'],
    opposed: ['Illusionist'],
  },
  {
    name: 'Enchanter',
    aka: 'Transmuter, Imbuer',
    symbols: 'hands, tools',
    description:
      'Enchanters are hands-on wizards who work their magic by investing it in objects or people. Many Enchanters are also craftsmen, such as carpenters or sculptors, who apply magic to the items they create.',
    aligned: ['Elementalist', 'Sigilist', 'Witch'],
    neutral: [
      'Illusionist',
      'Necromancer',
      'Soothsayer',
      'Summoner',
      'Thaumaturge',
    ],
    opposed: ['Chronomancer'],
  },
  {
    name: 'Illusionist',
    aka: 'Prestidigitator, Trickster',
    symbols: 'mirrors, rainbows',
    description:
      "Sometimes derided for being mere stage magicians, an experienced Illusionist can be a dangerous foe. Illusionists use magic to fool the senses, cause confusion and fear, and convince people of things that aren't true.",
    aligned: ['Sigilist', 'Soothsayer', 'Thaumaturge'],
    neutral: ['Chronomancer', 'Enchanter', 'Necromancer', 'Summoner', 'Witch'],
    opposed: ['Elementalist'],
  },
  {
    name: 'Necromancer',
    aka: 'Death Mage',
    symbols: 'skulls, bones, scythes, sickles',
    description:
      'Necromancers study the magic associated with death, as well as the creation and control of undead creatures such as zombies and animated skeletons. While Necromancers are not necessarily evil, there are few that have delved deeply into this school of magic without giving in to its corrupting influence.',
    aligned: ['Chronomancer', 'Summoner', 'Witch'],
    neutral: [
      'Elementalist',
      'Enchanter',
      'Illusionist',
      'Sigilist',
      'Soothsayer',
    ],
    opposed: ['Thaumaturge'],
  },
  {
    name: 'Sigilist',
    aka: 'Rune Reader, Scribe',
    symbols: 'quills, runes',
    description:
      'Sigilists work magic through reading and writing. They are masters of languages, both living and dead, and can see the mystical patterns in writing of all types. Most famously, they are the writers of magic scrolls and books, storing energy within writing for later use.',
    aligned: ['Enchanter', 'Illusionist', 'Thaumaturge'],
    neutral: [
      'Chronomancer',
      'Elementalist',
      'Necromancer',
      'Soothsayer',
      'Witch',
    ],
    opposed: ['Summoner'],
  },
  {
    name: 'Soothsayer',
    aka: 'Seer, Diviner, Fortune Teller',
    symbols: 'five-pointed stars, crystal balls',
    description:
      'The subtle magic of a Soothsayer allows the wizard to exted their senses beyond their body, including through time itself. They can reach into the past to learn the secrets of history or gaze into the minds of other beings. There are very few yound Soothsayers as the patience and concentration required for their magic favours the old.',
    aligned: ['Chronomancer', 'Illusionist', 'Thaumaturge'],
    neutral: [
      'Elementalist',
      'Enchanter',
      'Necromancer',
      'Sigilist',
      'Summoner',
    ],
    opposed: ['Witch'],
  },
  {
    name: 'Summoner',
    aka: 'Diabolist, Conjurer, Demonologist',
    symbols: 'pentagrams, concentric circles',
    description:
      'Summoners work their magic by opening doorways to different planes of existence. This is usually to bring forth creatures from these other planes to use as servants, although this is not the limit of this school of magic. Demons are rarely happy about being summoned, and the life of a Summoner is a dangerous one.',
    aligned: ['Elementalist', 'Necromancer', 'Witch'],
    neutral: [
      'Chronomancer',
      'Enchanter',
      'Illusionist',
      'Thaumaturge',
      'Soothsayer',
    ],
    opposed: ['Sigilist'],
  },
  {
    name: 'Thaumaturge',
    aka: 'Invoker, Wonder Worker',
    symbols: 'Sun, triangles',
    description:
      'Thaumaturges draw their magic powers from positive energy. Most believe this energy comes from some form of deity. These wizards are healers and protectors, who often spend as much time on good works as they do on the study of magic. ',
    aligned: ['Illusionist', 'Sigilist', 'Soothsayer'],
    neutral: ['Chronomancer', 'Elementalist', 'Enchanter', 'Witch', 'Summoner'],
    opposed: ['Necromancer'],
  },
  {
    name: 'Witch',
    aka: 'Warlock, Hedge Wizard, Witch Doctor',
    symbols: "crescent moons, cat's eyes",
    description:
      'Witches draw on the subtle powers of nature for their magic and specialize in the brewing of potions, casting of curses, and seeking aid from plants and animals. Contrary to popular belief, most witches are not ugly old crones but can be found amongst all ages and genders.',
    aligned: ['Enchanter', 'Necromancer', 'Summoner'],
    neutral: [
      'Chronomancer',
      'Elementalist',
      'Illusionist',
      'Sigilist',
      'Thaumaturge',
    ],
    opposed: ['Soothsayer'],
  },
];
