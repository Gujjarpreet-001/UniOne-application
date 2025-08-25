import AppHeader from "@/components/common_header";
import { useFocusEffect } from "expo-router";
import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { List, Checkbox, Menu, Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaView } from "react-native-safe-area-context";

interface Student {
  id: string;
  name: string;
  grade: string;
  rollNo: string;
}

const initialStudents: Student[] = [
  { id: "1", name: "Akash Gupta", grade: "Grade 8", rollNo: "01" },
  { id: "2", name: "Brijesh Gupta", grade: "Grade 8", rollNo: "02" },
  { id: "3", name: "Cajeton D’souza", grade: "Grade 8", rollNo: "03" },
  { id: "4", name: "Danish Shaikh", grade: "Grade 8", rollNo: "04" },
  { id: "5", name: "Daniel Walter", grade: "Grade 8", rollNo: "05" },
  { id: "6", name: "Faisal Khan", grade: "Grade 8", rollNo: "06" },
  { id: "7", name: "Ishwar Palekar", grade: "Grade 8", rollNo: "07" },
];

export default function AttendanceScreen() {
  const [attendance, setAttendance] = React.useState<{ [key: string]: string }>(
    {}
  );
  const [selected, setSelected] = React.useState<{ [key: string]: boolean }>(
    {}
  );
  const [filter, setFilter] = React.useState<string>("all");
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [menuVisible, setMenuVisible] = React.useState<string | null>(null);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);


  // Handle attendance state when screen is focused/change to different screen
    useFocusEffect(
    React.useCallback(() => {
      // Reset when screen is focused
      setAttendance({});
      setFilter("all");
      setDate(undefined);

      return () => {
        // optional cleanup if needed
      };
    }, [])
  );

  const setStatus = (id: string, status: string) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
    setMenuVisible(null);
  };

  const toggleSelect = (id: string, value: boolean) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  const filteredStudents = initialStudents.filter((student) => {
    if (filter === "all") return true;
    return attendance[student.id] === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return { backgroundColor: "#10B981", textColor: "#fff" }; // green
      case "absent":
        return { backgroundColor: "#EF4444", textColor: "#fff" }; // red
      case "late":
        return { backgroundColor: "#8B4513", textColor: "#fff" }; // brown
      default:
        return { backgroundColor: "#E5E7EB", textColor: "#374151" }; // gray
    }
  };

  const renderStudent = ({ item }: { item: Student }) => {
    const status = attendance[item.id] || "Mark";
    const { backgroundColor, textColor } = getStatusColor(status);

    return (
      <List.Item
        title={item.name}
        description={item.grade}
        right={() => (
          <Menu
            visible={menuVisible === item.id}
            onDismiss={() => setMenuVisible(null)}
            anchor={
              <Button
                mode="contained"
                onPress={() => setMenuVisible(item.id)}
                style={[styles.statusBtn, { backgroundColor }]}
                labelStyle={{ color: textColor }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            }
          >
            <Menu.Item
              onPress={() => setStatus(item.id, "present")}
              title="Present"
            />
            <Menu.Item
              onPress={() => setStatus(item.id, "absent")}
              title="Absent"
            />
            <Menu.Item onPress={() => setStatus(item.id, "late")} title="Late" />
          </Menu>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <AppHeader />
      {/* Filter Bar */}
      <View style={styles.filterBar}>
        {/* Date Picker Button */}
        <Button
          mode="outlined"
          onPress={() => setDatePickerVisible(true)}
          style={styles.dateBtn}
        >
          {date ? date.toDateString() : "Select Date"}
        </Button>

        {/* Filter Menu */}
        <Menu
          visible={menuVisible === "filter"}
          onDismiss={() => setMenuVisible(null)}
          anchor={
            <Button
              mode="outlined"
              onPress={() => setMenuVisible("filter")}
              style={{ marginLeft: 10 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          }
        >
          <Menu.Item onPress={() => setFilter("all")} title="All" />
          <Menu.Item onPress={() => setFilter("present")} title="Present" />
          <Menu.Item onPress={() => setFilter("absent")} title="Absent" />
          <Menu.Item onPress={() => setFilter("late")} title="Late" />
        </Menu>
      </View>

      {/* Date Picker Modal */}
      <DatePickerModal
        locale="en"
        mode="single"
        visible={datePickerVisible}
        date={date}
        onDismiss={() => setDatePickerVisible(false)}
        onConfirm={(params) => {
          setDate(params.date);
          setDatePickerVisible(false);
        }}
      />

      {/* Student List */}
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
      />

      {/* Submit */}
      <Button
        mode="contained"
        contentStyle={{ paddingVertical: 4 }}
        style={styles.submitBtn}
        onPress={() => console.log("Submit Attendance:", { date, attendance })}
      >
        Confirm & Submit Attendance
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  dateBtn: { flex: 1, marginRight: 10 },
  statusBtn: {
    minWidth: 100,
    justifyContent: "center",
    borderRadius: 8,
  },
  submitBtn: {
    margin: 16,
    paddingVertical: 0,
    borderRadius: 8,
    backgroundColor: "#3B82F6",
  },
});
