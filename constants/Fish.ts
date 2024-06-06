import { ImageSourcePropType } from "react-native";

export type Fish = {
  id: string;
  name: string;
  wikipedia: string;
  source?: ImageSourcePropType;
  enabled: boolean;
};

export const Fishes: Array<Fish> = [
  {
    id: "mackerel",
    name: "Mackerel",
    wikipedia: "Mackerel",
    source: require("@/assets/images/fish/mackerel.jpg"),
    enabled: true,
  },
  {
    id: "plaice",
    name: "Plaice",
    wikipedia: "Plaice",
    source: require("@/assets/images/fish/plaice.jpg"),
    enabled: true,
  },
  {
    id: "garfish",
    name: "Garfish",
    wikipedia: "Garfish",
    source: require("@/assets/images/fish/garfish.jpg"),
    enabled: true,
  },
  {
    id: "sprat",
    name: "Sprat",
    wikipedia: "Sprat",
    source: require("@/assets/images/fish/sprat.jpg"),
    enabled: true,
  },
  {
    id: "sandeels",
    name: "Sandeel",
    wikipedia: "Sandeel",
    source: require("@/assets/images/fish/sand-eel.jpg"),
    enabled: true,
  },
  {
    id: "pollock",
    name: "Pollock",
    wikipedia: "Pollock",
    source: require("@/assets/images/fish/pollock.jpg"),
    enabled: true,
  },
  {
    id: "wrasse",
    name: "Wrasse",
    wikipedia: "Wrasse",
    source: require("@/assets/images/fish/wrasse.jpg"),
    enabled: true,
  },
  {
    id: "silver-eels",
    name: "Silver Eels",
    wikipedia: "Eel",
    source: require("@/assets/images/fish/silver-eel.jpg"),
    enabled: true,
  },
  {
    id: "bass",
    name: "Bass",
    wikipedia: "Bass (fish)",
    source: require("@/assets/images/fish/bass.jpg"),
    enabled: true,
  },
  {
    id: "gurnard",
    name: "Gurnard",
    wikipedia: "Gurnard",
    source: require("@/assets/images/fish/gurnard.jpg"),
    enabled: true,
  },
  {
    id: "mullet",
    name: "Mullet",
    wikipedia: "Mullet (fish)",
    source: require("@/assets/images/fish/mullet.jpg"),
    enabled: true,
  },
  {
    id: "weever-fish",
    name: "Weever Fish",
    wikipedia: "Weever",
    source: require("@/assets/images/fish/weever-fish.jpg"),
    enabled: true,
  },
  {
    id: "conger-eel",
    name: "Conger Eel",
    wikipedia: "Conger",
    source: require("@/assets/images/fish/conger-eel.jpg"),
    enabled: true,
  },
  {
    id: "smooth-hound",
    name: "Smooth-Hound",
    wikipedia: "Smooth-hound",
    source: require("@/assets/images/fish/smooth-hound.jpg"),
    enabled: true,
  },
  {
    id: "tope",
    name: "Tope",
    wikipedia: "Tope",
    source: require("@/assets/images/fish/tope.jpg"),
    enabled: true,
  },
  {
    id: "cod",
    name: "Cod",
    wikipedia: "Cod",
    source: require("@/assets/images/fish/cod.jpg"),
    enabled: true,
  },
  {
    id: "whiting",
    name: "Whiting",
    wikipedia: "Whiting",
    source: require("@/assets/images/fish/whiting.jpg"),
    enabled: true,
  },
  {
    id: "turbot",
    name: "Turbot",
    wikipedia: "Turbot",
    source: require("@/assets/images/fish/turbot.jpg"),
    enabled: true,
  },
  {
    id: "bream",
    name: "Bream",
    wikipedia: "Bream",
    source: require("@/assets/images/fish/bream.jpg"),
    enabled: true,
  },
  {
    id: "triggerfish",
    name: "Triggerfish",
    wikipedia: "Triggerfish",
    source: require("@/assets/images/fish/triggerfish.jpg"),
    enabled: true,
  },
  {
    id: "thornback-ray",
    name: "Thornback Ray",
    wikipedia: "Thornback ray",
    source: require("@/assets/images/fish/thornback-ray.jpg"),
    enabled: true,
  },
  {
    id: "dab",
    name: "Dab",
    wikipedia: "Dab (fish)",
    source: require("@/assets/images/fish/dab.jpg"),
    enabled: true,
  },
  {
    id: "flounder",
    name: "Flounder",
    wikipedia: "Flounder",
    source: require("@/assets/images/fish/flounder.jpg"),
    enabled: true,
  },
  {
    id: "blonde-ray",
    name: "Blonde Ray",
    wikipedia: "Blonde ray",
    source: require("@/assets/images/fish/blonde-ray.jpg"),
    enabled: true,
  },
  {
    id: "spotted-ray",
    name: "Spotted Ray",
    wikipedia: "Spotted ray",
    source: require("@/assets/images/fish/spotted-ray.jpg"),
    enabled: true,
  },
];
