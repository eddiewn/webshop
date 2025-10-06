const products = () => [
  // Viego
  { id: 1, name: "Worlds 2024 Viego", rpPrice: "1350 RP", rarity: "Epic", champ: "Viego", image: "viego/Worlds_2024_Viego.jpg" },
  { id: 2, name: "Soul Fighter Viego", rpPrice: "1820 RP", rarity: "Legendary", champ: "Viego", image: "viego/Soul_Fighter_Viego.jpg" },
  { id: 3, name: "King Viego", rpPrice: "1350 RP", rarity: "Epic", champ: "Viego", image: "viego/King_Viego.jpg" },
  { id: 4, name: "EDG Viego", rpPrice: "1350 RP", rarity: "Epic", champ: "Viego", image: "viego/EDG_Viego.jpg" },
  { id: 5, name: "Dissonance of Pentakill Viego", rpPrice: "1350 RP", rarity: "Epic", champ: "Viego", image: "viego/Dissonance_of_Pentakill_Viego.jpg" },
  { id: 6, name: "Lunar Beast Viego", rpPrice: "1350 RP", rarity: "Epic", champ: "Viego", image: "viego/Lunar_Beast_Viego.jpg" },
  { id: 7, name: "Original Viego", rpPrice: "Free", rarity: "Base", champ: "Viego", image: "viego/Original_Viego.jpg" },

  // Kha'Zix
  { id: 8, name: "Original Kha'Zix", rpPrice: "Free", rarity: "Base", champ: "Kha'Zix", image: "khazix/Original_KhaZix.jpg" },
  { id: 9, name: "Mecha Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Mecha_KhaZix.jpg" },
  { id: 10, name: "Guardian of the Sands Kha'Zix", rpPrice: "975 RP", rarity: "Legacy", champ: "Kha'Zix", image: "khazix/Guardian_of_the_Sands_KhaZix.jpg" },
  { id: 11, name: "Death Blossom Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Death_Blossom_KhaZix.jpg" },
  { id: 12, name: "Dark Star Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Dark_Star_KhaZix.jpg" },
  { id: 13, name: "Championship Kha'Zix", rpPrice: "1350 RP", rarity: "Legacy", champ: "Kha'Zix", image: "khazix/Championship_KhaZix.jpg" },
  { id: 14, name: "Odyssey Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Odyssey_KhaZix.jpg" },
  { id: 15, name: "Lunar Guardian Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Lunar_Guardian_KhaZix.jpg" },
  { id: 16, name: "Crystalis Indomitus Kha'Zix", rpPrice: "1350 RP", rarity: "Epic", champ: "Kha'Zix", image: "khazix/Crystalis_Indomitus_KhaZix.jpg" },
  { id: 17, name: "Prestige Odyssey Kha'Zix", rpPrice: "2000 Event Tokens", rarity: "Mythic", champ: "Kha'Zix", image: "khazix/Prestige_Odyssey_KhaZix.jpg" },

  // Sion
  { id: 18, name: "Original Sion", rpPrice: "Free", rarity: "Base", champ: "Sion", image: "sion/Original_Sion.jpg" },
  { id: 19, name: "Hextech Sion", rpPrice: "520 RP", rarity: "Legacy", champ: "Sion", image: "sion/Hextech_Sion.jpg" },
  { id: 20, name: "Barbarian Sion", rpPrice: "750 RP", rarity: "Legacy", champ: "Sion", image: "sion/Barbarian_Sion.jpg" },
  { id: 21, name: "Lumberjack Sion", rpPrice: "520 RP", rarity: "Legacy", champ: "Sion", image: "sion/Lumberjack_Sion.jpg" },
  { id: 22, name: "Warmonger Sion", rpPrice: "975 RP", rarity: "Legacy", champ: "Sion", image: "sion/Warmonger_Sion.jpg" },
  { id: 23, name: "Mecha Zero Sion", rpPrice: "1820 RP", rarity: "Legendary", champ: "Sion", image: "sion/Mecha_Zero_Sion.jpg" },
  { id: 24, name: "Worldbreaker Sion", rpPrice: "1350 RP", rarity: "Epic", champ: "Sion", image: "sion/Worldbreaker_Sion.jpg" },
  { id: 25, name: "Blackfrost Sion", rpPrice: "1350 RP", rarity: "Epic", champ: "Sion", image: "sion/Blackfrost_Sion.jpg" },
  { id: 26, name: "Cosmic Paladin Sion", rpPrice: "1350 RP", rarity: "Epic", champ: "Sion", image: "sion/Cosmic_Paladin_Sion.jpg" },
  { id: 27, name: "High Noon Sion", rpPrice: "1350 RP", rarity: "Epic", champ: "Sion", image: "sion/High_Noon_Sion.jpg" },

  // Jarvan IV
  { id: 28, name: "Original Jarvan IV", rpPrice: "Free / Champion Price", rarity: "Base", champ: "Jarvan IV", image: "jarvan_iv/Original_Jarvan_IV.jpg" },
  { id: 29, name: "Commando Jarvan IV", rpPrice: "520 RP", rarity: "Rare", champ: "Jarvan IV", image: "jarvan_iv/Commando_Jarvan_IV.jpg" },
  { id: 30, name: "Dragonslayer Jarvan IV", rpPrice: "750 RP", rarity: "Rare", champ: "Jarvan IV", image: "jarvan_iv/Dragonslayer_Jarvan_IV.jpg" },
  { id: 31, name: "Darkforge Jarvan IV", rpPrice: "975 RP", rarity: "Legacy", champ: "Jarvan IV", image: "jarvan_iv/Darkforge_Jarvan_IV.jpg" },
  { id: 32, name: "Fnatic Jarvan IV", rpPrice: "750 RP", rarity: "Legacy", champ: "Jarvan IV", image: "jarvan_iv/Fnatic_Jarvan_IV.jpg" },
  { id: 33, name: "Warring Kingdoms Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Warring_Kingdoms_Jarvan_IV.jpg" },
  { id: 34, name: "SSG Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/SSG_Jarvan_IV.jpg" },
  { id: 35, name: "Dark Star Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Dark_Star_Jarvan_IV.jpg" },
  { id: 36, name: "Pool Party Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Pool_Party_Jarvan_IV.jpg" },
  { id: 37, name: "Lunar Beast Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Lunar_Beast_Jarvan_IV.jpg" },
  { id: 38, name: "Worlds 2021 Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Worlds_2021_Jarvan_IV.jpg" },
  { id: 39, name: "Nightbringer Jarvan IV", rpPrice: "1350 RP", rarity: "Epic", champ: "Jarvan IV", image: "jarvan_iv/Nightbringer_Jarvan_IV.jpg" },
  { id: 40, name: "Hextech Jarvan IV", rpPrice: "Mythic / Special (Hextech)", rarity: "Mythic", champ: "Jarvan IV", image: "jarvan_iv/Hextech_Jarvan_IV.jpg" },
  { id: 41, name: "Prestige Visions of the Fallen Jarvan IV", rpPrice: "Special Reward", rarity: "Mythic / Limited", champ: "Jarvan IV", image: "jarvan_iv/Prestige_Visions_of_the_Fallen_Jarvan_IV.jpg" },
  { id: 42, name: "Mythmaker Jarvan IV", rpPrice: "Special Reward", rarity: "Mythic / Limited", champ: "Jarvan IV", image: "jarvan_iv/Mythmaker_Jarvan_IV.jpg" },
  { id: 43, name: "Victorious Jarvan IV", rpPrice: "Special Reward", rarity: "Mythic / Limited", champ: "Jarvan IV", image: "jarvan_iv/Victorious_Jarvan_IV.jpg" },
];

export default products;