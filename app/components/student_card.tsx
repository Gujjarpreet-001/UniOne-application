// StudentCard.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
const { width } = Dimensions.get("window");

export default function StudentCard() {
  const [flipped, setFlipped] = useState(false);
  const rotate = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotate.value}deg` }],
      backfaceVisibility: "hidden",
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotate.value + 180}deg` }],
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
    };
  });

  const handleFlip = () => {
    setFlipped(!flipped);
    rotate.value = withTiming(flipped ? 0 : 180, { duration: 600 });
  };

  return (
    <TouchableWithoutFeedback onPress={handleFlip}>
      <View style={styles.container}>
        {/* FRONT SIDE */}
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.schoolName}>School Name</Text>
              <Text style={styles.subText}>Student ID 00001</Text>
            </View>
            <Text style={styles.academicYear}>2024-25</Text>
          </View>

          {/* Profile with green active dot */}
          <View style={styles.profileSection}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
              <View style={styles.activeDot} />
            </View>
            <View>
              <Text style={styles.name}>Emma Smith</Text>
              <Text style={styles.grade}>10th Grade</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>✉️</Text>
            <Text style={styles.infoText}>emma.smith@school.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📞</Text>
            <Text style={styles.infoText}>+91 93765 43210</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoText}>Greater Noida, India</Text>
          </View>
        </Animated.View>

        {/* BACK SIDE */}
        <Animated.View style={[styles.card, backAnimatedStyle]}>
          <Text style={styles.backTitle}>Permanent Address</Text>
          <Text style={styles.backDetail}>Greater Noida, India</Text>
          <Text style={styles.backTitle}>Mobile No.</Text>
          <Text style={styles.backDetail}>+91 93765 43210</Text>
          <Text style={styles.backTitle}>Email</Text>
          <Text style={styles.backDetail}>emma.smith@school.com</Text>
          <Text style={styles.backTitle}>Emergency Contact</Text>
          <Text style={styles.backDetail}>+91 98765 43210</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 0,
    width: width - 30,
    height: 226,
    marginVertical: 10,
     shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000", // dark navy background
    borderRadius: 16,
    padding: 20,
    justifyContent: "flex-start",

  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  subText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
  academicYear: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FCD34D",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  avatarWrapper: {
    position: "relative",
    marginRight: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FBBF24",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    fontSize: 28,
  },
  activeDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#22C55E", // green
    borderWidth: 2,
    borderColor: "#1F2937", // border same as background
    position: "absolute",
    top: -2,
    right: -2,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FCD34D",
  },
  grade: {
    fontSize: 14,
    color: "#E5E7EB",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  infoIcon: {
    fontSize: 14,
    marginRight: 6,
    color: "#9CA3AF",
  },
  infoText: {
    fontSize: 13,
    color: "#E5E7EB",
  },
  backTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FCD34D",
    marginTop: 10,
  },
  backDetail: {
    fontSize: 13,
    color: "#E5E7EB",
    marginBottom: 4,
  },
});
