import createIconSet from "@expo/vector-icons/build/createIconSet";
import font from "@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf";
//import glyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";

const Ionicons = createIconSet(
  {
    "ios-arrow-forward": 62417,
    "md-home": 62220,
    "md-journal": 61837,
    "md-person": 62277,
  },
  "ionicons",
  font
);

export { Ionicons };

export default function () {}
