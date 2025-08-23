// App.tsx
import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CircularProgress from "react-native-circular-progress-indicator";
import AppHeader from "@/components/common_header";
import { router } from "expo-router";

export default function GradesPage() {
  const subjects = [
    {
      name: "Rahul",
      percent: 25,
      total: 100,
      grade: "F",
      subjects: "Math",
      checkedOn: "5 Nov, 2023",
      color: "#FF4D6D", // red
    },
    {
      name: "Rahul",
      percent: 25,
      total: 50,
            grade: "B",

        subjects: "Math",
      checkedOn: "5 Nov, 2023",
      color: "#F5A623", // yellow
    },
    {
      name: "Shivam",
      percent: 75,
      total: 100,
            grade: "A",

      subjects: "Math",
      checkedOn: "5 Nov, 2023",
      color: "#4A90E2", // blue
    },
  ];

  return (
    <SafeAreaView  style={styles.container}>
        <AppHeader />
      <ScrollView contentContainerStyle={styles.scroll}>
        {subjects.map((subject, index) => {
          const percent = Math.round((subject.percent / subject.total) * 100);

          return (
            <TouchableOpacity onPress={()=>{
              router.push('/screens/(drawer)/grades_module/grades_overview')
            }} key={index} style={styles.card}>
              {/* Left Section */}
              <View style={styles.cardLeft}>
                <Text style={styles.subjectName}>{subject.name}</Text>

                <Text style={styles.text}>
                  Grade:{" "}
                  <Text style={styles.bold}>
                    {subject.grade}
                  </Text>
                </Text>

            

                   <Text style={[styles.text, { marginTop: 4 }]}>
                  Subject:{" "}
                  <Text style={styles.bold}>
                    {subject.subjects}
                  </Text>
                </Text>

                    <Text style={[styles.text, { marginTop: 4}]}>
                 Checked on: {subject.checkedOn}
                </Text>
                
              </View>

              {/* Right Section - Progress */}
              <CircularProgress
                value={percent}
                radius={28}
                activeStrokeWidth={6}
                inActiveStrokeWidth={6}
                activeStrokeColor={subject.color}
                inActiveStrokeColor="#E0E0E0"
                progressValueColor={subject.color}
                valueSuffix="%"
                titleStyle={{ fontSize: 12 }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  scroll: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
  },
  cardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  bold: {
    fontWeight: "600",
    marginBottom: 4,
  },
});
