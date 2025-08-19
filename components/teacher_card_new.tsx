// TeacherCard.tsx
import { Award, Users } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function TeacherMetalCard() {
  const [flipped, setFlipped] = useState(false);
  const rotate = useSharedValue(0);
  const shimmerTranslate = useSharedValue(-width);

  // flip card
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

  // shimmer animation loop
  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(width, { duration: 2000 }),
      -1,
      false
    );
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value }],
  }));

  const renderShimmerOverlay = () => (
    <Animated.View style={[StyleSheet.absoluteFill, shimmerStyle]}>
      <LinearGradient
        colors={["transparent", "rgba(255,255,255,0.25)", "transparent"]}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 1, y: 0.7 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );

  return (
    <TouchableWithoutFeedback onPress={handleFlip}>
      <View style={styles.container}>
        {/* FRONT SIDE */}
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <LinearGradient
            colors={["#1f1f1f", "#0d0d0d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
          >
            {renderShimmerOverlay()}

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.schoolName}>School Name</Text>
                <Text style={styles.subText}>Faculty ID 00001</Text>
              </View>
              <Text style={styles.academicYear}>2024-25</Text>
            </View>

            {/* Profile with active dot */}
            <View style={styles.profileSection}>
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarIcon}>👤</Text>
                </View>
                <View style={styles.activeDot} />
              </View>
              <View>
                <Text style={styles.name}>Emma Smith</Text>
                <Text style={styles.grade}>Faculty Member</Text>
                <View style={styles.quickStats}>
                  <View style={styles.statItem}>
                    <Users color="#C0C0C0" size={16} />
                    <Text style={styles.statText}>15 Students</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Award color="#C0C0C0" size={16} />
                    <Text style={styles.statText}>Expert</Text>
                  </View>
                </View>
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
          </LinearGradient>
        </Animated.View>

        {/* BACK SIDE */}
        <Animated.View style={[styles.card, backAnimatedStyle]}>
          <LinearGradient
            colors={["#1f1f1f", "#0d0d0d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
          >
            {renderShimmerOverlay()}

            <Text style={styles.backTitle}>Department</Text>
            <Text style={styles.backDetail}>Computer Science</Text>
            <Text style={styles.backTitle}>Experience</Text>
            <Text style={styles.backDetail}>8 Years</Text>
            <Text style={styles.backTitle}>Subject</Text>
            <Text style={styles.backDetail}>Math, Science</Text>
            <Text style={styles.backTitle}>Emergency Contact</Text>
            <Text style={styles.backDetail}>+91 98765 43210</Text>
          </LinearGradient>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: width - 30,
    height: 226,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    overflow: "hidden",
    position: "absolute",
  },
  gradientBackground: {
    flex: 1,
    padding: 20,
    borderRadius: 18,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#C0C0C0",
  },
  subText: {
    fontSize: 12,
    color: "#A9A9A9",
    marginTop: 2,
  },
  academicYear: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C0C0C0",
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
    borderColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
  },
  avatarIcon: {
    fontSize: 28,
    color: "#C0C0C0",
  },
  activeDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#22C55E",
    borderWidth: 2,
    borderColor: "#0d0d0d",
    position: "absolute",
    top: -2,
    right: -2,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#C0C0C0",
  },
  grade: {
    fontSize: 12,
    color: "#A9A9A9",
  },
  quickStats: {
    flexDirection: "row",
    marginTop: 8,
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    color: "#C0C0C0",
    fontSize: 12,
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  infoIcon: {
    fontSize: 14,
    marginRight: 6,
    color: "#A9A9A9",
  },
  infoText: {
    fontSize: 13,
    color: "#C0C0C0",
  },
  backTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C0C0C0",
    marginTop: 10,
  },
  backDetail: {
    fontSize: 13,
    color: "#C0C0C0",
    marginBottom: 4,
  },
});
