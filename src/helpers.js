/* eslint-disable import/prefer-default-export */
export function generateId(prefix, min, max) {
    return `${prefix}${Date.now()}${Math.floor(Math.random() * (max - min + 1)) + min}`;
  }
  
  export function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function getListName() {
    const adjectives = [
      "accepting",
      "adventurous",
      "affable",
      "ambitious",
      "amiable",
      "amicable",
      "annoying",
      "bent",
      "blazing",
      "blocky",
      "bold",
      "boxy",
      "brave",
      "bright",
      "bright",
      "brilliant",
      "broad",
      "brutal",
      "brute",
      "burning",
      "callous",
      "calm",
      "careful",
      "cautious",
      "charitable",
      "cheerful",
      "chunky",
      "clean",
      "clever",
      "colorful",
      "compact",
      "courtly",
      "creative",
      "cruel",
      "curious",
      "daring",
      "dark",
      "devout",
      "drab",
      "dull",
      "eager",
      "elegant",
      "energetic",
      "excited",
      "faded",
      "fat",
      "ferocious",
      "flat",
      "flat",
      "forgiving",
      "free",
      "friendly",
      "full",
      "funny",
      "generous",
      "genteel",
      "gentle",
      "glossy",
      "glowing",
      "graceful",
      "grim",
      "grouchy",
      "happy",
      "heartless",
      "helpful",
      "honest",
      "humane",
      "humble",
      "impulsive",
      "independent",
      "indulgent",
      "intense",
      "inventive",
      "kind",
      "lazy",
      "lenient",
      "light",
      "loyal",
      "matte",
      "meek",
      "merciless",
      "merry",
      "messy",
      "mild",
      "muted",
      "narrow",
      "neat",
      "nervous",
      "obliging",
      "obnoxious",
      "odious",
      "pale",
      "pallid",
      "patient",
      "plain",
      "pleasant",
      "pointed",
      "polite",
      "proper",
      "proud",
      "quick",
      "quiet",
      "radiant",
      "refined",
      "relaxed",
      "religious",
      "respectful",
      "round",
      "rounded",
      "rude",
      "savage",
      "selfish",
      "sensitive",
      "serious",
      "shiny",
      "shrewd",
      "silly",
      "simple",
      "skinny",
      "sleek",
      "slim",
      "smart",
      "soft",
      "solid",
      "sophisticated",
      "stern",
      "straight",
      "strong",
      "stubborn",
      "sunny",
      "tender",
      "tense",
      "thick",
      "thin",
      "timid",
      "tough",
      "trusting",
      "urbane",
      "vain",
      "vibrant",
      "vicious",
      "violent",
      "vivid",
      "wan",
      "warm",
      "weathered",
      "wide",
      "wise",
      "witty",
      "worn",
    ];
  
    const nouns = [
      "aardvark",
      "abyssinian",
      "affenpinscher",
      "akbash",
      "akita",
      "albatross",
      "alligator",
      "alpaca",
      "angelfish",
      "ant",
      "anteater",
      "antelope",
      "ape",
      "armadillo",
      "ass",
      "avocet",
      "axolotl",
      "baboon",
      "badger",
      "balinese",
      "bandicoot",
      "barb",
      "barnacle",
      "barracuda",
      "bat",
      "beagle",
      "bear",
      "beaver",
      "bee",
      "beetle",
      "binturong",
      "bird",
      "birman",
      "bison",
      "bloodhound",
      "boar",
      "bobcat",
      "bombay",
      "bongo",
      "bonobo",
      "booby",
      "budgerigar",
      "buffalo",
      "bulldog",
      "bullfrog",
      "burmese",
      "butterfly",
      "caiman",
      "camel",
      "capybara",
      "caracal",
      "caribou",
      "cassowary",
      "cat",
      "caterpillar",
      "catfish",
      "cattle",
      "centipede",
      "chameleon",
      "chamois",
      "cheetah",
      "chicken",
      "chihuahua",
      "chimpanzee",
      "chinchilla",
      "chinook",
      "chipmunk",
      "chough",
      "cichlid",
      "clam",
      "coati",
      "cobra",
      "cockroach",
      "cod",
      "collie",
      "coral",
      "cormorant",
      "cougar",
      "cow",
      "coyote",
      "crab",
      "crane",
      "crocodile",
      "crow",
      "curlew",
      "cuscus",
      "cuttlefish",
      "dachshund",
      "dalmatian",
      "deer",
      "dhole",
      "dingo",
      "dinosaur",
      "discus",
      "dodo",
      "dog",
      "dogfish",
      "dolphin",
      "donkey",
      "dormouse",
      "dotterel",
      "dove",
      "dragonfly",
      "drever",
      "duck",
      "dugong",
      "dunker",
      "dunlin",
      "eagle",
      "earwig",
      "echidna",
      "eel",
      "eland",
      "elephant",
      "elephantseal",
      "elk",
      "emu",
      "falcon",
      "ferret",
      "finch",
      "fish",
      "flamingo",
      "flounder",
      "fly",
      "fossa",
      "fox",
      "frigatebird",
      "frog",
      "galago",
      "gar",
      "gaur",
      "gazelle",
      "gecko",
      "gerbil",
      "gharial",
      "giantpanda",
      "gibbon",
      "giraffe",
      "gnat",
      "gnu",
      "goat",
      "goldfinch",
      "goldfish",
      "goose",
      "gopher",
      "gorilla",
      "goshawk",
      "grasshopper",
      "greyhound",
      "grouse",
      "guanaco",
      "guineafowl",
      "guineapig",
      "gull",
      "guppy",
      "hamster",
      "hare",
      "harrier",
      "havanese",
      "hawk",
      "hedgehog",
      "heron",
      "herring",
      "himalayan",
      "hippopotamus",
      "hornet",
      "horse",
      "human",
      "hummingbird",
      "hyena",
      "ibis",
      "iguana",
      "impala",
      "indri",
      "insect",
      "jackal",
      "jaguar",
      "javanese",
      "jay",
      "jayblue",
      "jellyfish",
      "kakapo",
      "kangaroo",
      "kingfisher",
      "kiwi",
      "koala",
      "komododragon",
      "kouprey",
      "kudu",
      "labradoodle",
      "ladybird",
      "lapwing",
      "lark",
      "lemming",
      "lemur",
      "leopard",
      "liger",
      "lion",
      "lionfish",
      "lizard",
      "llama",
      "lobster",
      "locust",
      "loris",
      "louse",
      "lynx",
      "lyrebird",
      "macaw",
      "magpie",
      "mallard",
      "maltese",
      "manatee",
      "mandrill",
      "markhor",
      "marten",
      "mastiff",
      "mayfly",
      "meerkat",
      "millipede",
      "mink",
      "mole",
      "molly",
      "mongoose",
      "mongrel",
      "monkey",
      "moorhen",
      "moose",
      "mosquito",
      "moth",
      "mouse",
      "mule",
      "narwhal",
      "neanderthal",
      "newfoundland",
      "newt",
      "nightingale",
      "numbat",
      "ocelot",
      "octopus",
      "okapi",
      "olm",
      "opossum",
      "orangutan",
      "oryx",
      "ostrich",
      "otter",
      "owl",
      "ox",
      "oyster",
      "pademelon",
      "panther",
      "parrot",
      "partridge",
      "peacock",
      "peafowl",
      "pekingese",
      "pelican",
      "penguin",
      "persian",
      "pheasant",
      "pig",
      "pigeon",
      "pika",
      "pike",
      "piranha",
      "platypus",
      "pointer",
      "pony",
      "poodle",
      "porcupine",
      "porpoise",
      "possum",
      "prairiedog",
      "prawn",
      "puffin",
      "pug",
      "puma",
      "quail",
      "quelea",
      "quetzal",
      "quokka",
      "quoll",
      "rabbit",
      "raccoon",
      "ragdoll",
      "rail",
      "ram",
      "rat",
      "rattlesnake",
      "raven",
      "reddeer",
      "redpanda",
      "reindeer",
      "rhinoceros",
      "robin",
      "rook",
      "rottweiler",
      "ruff",
      "salamander",
      "salmon",
      "sanddollar",
      "sandpiper",
      "saola",
      "sardine",
      "scorpion",
      "sealion",
      "seaurchin",
      "seahorse",
      "seal",
      "serval",
      "shark",
      "sheep",
      "shrew",
      "shrimp",
      "siamese",
      "siberian",
      "skunk",
      "sloth",
      "snail",
      "snake",
      "snowshoe",
      "somali",
      "sparrow",
      "spider",
      "sponge",
      "squid",
      "squirrel",
      "starfish",
      "starling",
      "stingray",
      "stinkbug",
      "stoat",
      "stork",
      "swallow",
      "swan",
      "tang",
      "tapir",
      "tarsier",
      "termite",
      "tetra",
      "tiffany",
      "tiger",
      "toad",
      "tortoise",
      "toucan",
      "tropicbird",
      "trout",
      "tuatara",
      "turkey",
      "turtle",
      "uakari",
      "uguisu",
      "umbrellabird",
      "vicuña",
      "viper",
      "vulture",
      "wallaby",
      "walrus",
      "warthog",
      "wasp",
      "waterbuffalo",
      "weasel",
      "whale",
      "whippet",
      "wildebeest",
      "wolf",
      "wolverine",
      "wombat",
      "woodcock",
      "woodlouse",
      "woodpecker",
      "worm",
      "wrasse",
      "wren",
      "yak",
      "zebra",
      "zebu",
      "zonkey",
      "zorse",
    ];
  
    return `${random(adjectives)}-${random(adjectives)}-${random(nouns)}`;
  }