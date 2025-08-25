import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppHeader from "@/components/common_header";
import { SafeAreaView } from "react-native-safe-area-context";

const reviews = [
  {
    id: "1",
    name: "Jamal Abdul",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    subtitle: "3 days ago",
    subject: "Mathematics",
    teacher: "Mr. Johnson",
    rating: 5.0,
    review:
      "This app is a game-changer! Easy to use, tons of options, and amazing deals. My go-to for all travel plans. Highly recommended!",
  },
  {
    id: "2",
    name: "Kamila Kabelo",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    subtitle: "8 Months ago",
    subject: "Science",
    teacher: "Mrs. Smith",
    rating: 4.9,
    review:
      "Impressive app! It simplifies hotel bookings with its user-friendly interface and great prices. Never disappoints. A must-have for frequent travelers.",
  },
  {
    id: "3",
    name: "Shena Kerren",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    subtitle: "3 Months ago",
    subject: "English",
    teacher: "Ms. Davis",
    rating: 4.8,
    review:
      "Love this app! It's my travel companion for finding the best hotels. Smooth transactions, accurate listings, and excellent customer service. Highly satisfied!",
  },
];

export default function ReviewsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <AppHeader />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>1,092 Reviews</Text>
      </View>

      {/* Reviews List */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        style={styles.reviewList}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Top Row */}
            <View style={styles.row}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.rating}>
                <AntDesign name="star" size={16} color="#f5a623" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>

            {/* Subject + Teacher */}
            <Text style={styles.subjectTeacher}>
              Subject: <Text style={styles.subject}>{item.subject}</Text> 
            </Text>

            {/* Review */}
            <Text style={styles.review}>{item.review}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  reviewList: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  subjectTeacher: {
    fontSize: 13,
    color: "#444",
    marginBottom: 6,
  },
  subject: {
    fontWeight: "600",
    color: "#1e40af",
  },
  teacher: {
    fontWeight: "600",
    color: "#047857",
  },
  review: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});
