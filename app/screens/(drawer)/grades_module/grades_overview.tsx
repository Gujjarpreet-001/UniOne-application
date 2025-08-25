// App.tsx
import AppHeader from "@/components/common_header";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { LineChart, BarChart, ProgressChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

export default function GradesOverview() {
  // Sample subject data
  const subjects = [
    { name: "Geography", score: 0.1 },
    { name: "Computer Science", score: 0.6 },
    { name: "English", score: 0.95 },
    { name: "Science", score: 0.88 },
    { name: "Mathematics", score: 0.92 },
  ];

  // Line chart data (example for English)
  const lineData = {
    labels: ["Jan 15", "Jan 16", "Jan 17"],
    datasets: [
      {
        data: [88, 92, 95],
        color: () => "#4CAF50", // green
        strokeWidth: 2,
      },
    ],
  };

  // Bar chart data (all subjects)
  const barData = {
    labels: subjects.map((s) => s.name),
    datasets: [
      {
        data: subjects.map((s) => s.score * 100),
      },
    ],
  };

  // Donut chart data (overview)
  const progressData = {
    labels: subjects.map((s) => s.name),
    data: subjects.map((s) => s.score),
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <AppHeader showDrawer={false} showLeading={true} leadingComponent={
         <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <ChevronLeft size={24} color="#fff" />
            </TouchableOpacity>
      }/>  
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>📊 Academic Performance</Text>

      {/* Donut / Radial Progress */}
      <Text style={styles.subtitle}>Overview</Text>
      <ProgressChart
        data={progressData}
        width={screenWidth - 20}
        height={220}
        strokeWidth={8}
        radius={32}
    
        chartConfig={chartConfig}
        hideLegend={false}
        style={styles.chart}
      />

      {/* Line Chart */}
      <Text style={styles.subtitle}>English Trend</Text>
      <LineChart
        data={lineData}
        width={screenWidth - 20}
        height={220}

        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      {/* Bar Chart */}
      <Text style={styles.subtitle}>Subject Comparison</Text>
      <BarChart
              data={barData}
              width={screenWidth - 20}
              height={260}
              fromZero
              showValuesOnTopOfBars

              chartConfig={chartConfig}
              style={styles.chart} yAxisLabel={""} yAxisSuffix={""}      />
    </ScrollView>
    </SafeAreaView>
  );
}

// Chart styling
const chartConfig = {
  backgroundGradientFrom: "#f5f7fa",
  backgroundGradientTo: "#f5f7fa",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
  labelColor: () => "#333",
  style: {
    borderRadius: 12,
  },
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "#4CAF50",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingTop: 0,
  },
     backButton: {
     
       
        padding: 4,
        backgroundColor: "#007BFF",
        borderRadius: 10,
    },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
});
