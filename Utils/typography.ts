// typography.js
import { RFValue } from "react-native-responsive-fontsize";

export const Typography = {
  h1: {
    fontSize: RFValue(24),
    fontWeight: "700",
  },
  h2: {
    fontSize: RFValue(20),
    fontWeight: "600",
  },
  h3: {
    fontSize: RFValue(18),
    fontWeight: "600",
  },
  body: {
    fontSize: RFValue(14),
    fontWeight: "400",
  },
  caption: {
    fontSize: RFValue(11),
    fontWeight: "400",
    color: "#666",
  },
};
