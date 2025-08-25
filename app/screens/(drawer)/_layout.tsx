import { DrawerContent } from "@/components/drawer_content";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function InitialLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          headerShown: false,
          popToTopOnBlur: true,
          drawerStyle: { backgroundColor: "#f8fafc", width: 280 },
          drawerActiveTintColor: "#3b82f6",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        {/* Main Tabs inside drawer */}
        <Drawer.Screen
          name="(main_tabs)"
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="student_module"
          options={{ title: "Student" }}
        />
        <Drawer.Screen
          name="attendance_page"

          options={{ title: "Attendance", }}
        />

        <Drawer.Screen
          name="grades_module"

          options={{ title: "Grades", }}
        />

          <Drawer.Screen
          name="schedule_module"

          options={{ title: "Schedule", }}
        />
               <Drawer.Screen
          name="feedback_module"

          options={{ title: "Feedback", }}
        />
                <Drawer.Screen
          name="fees_module"

          options={{ title: "Fees", }}
        />
                    <Drawer.Screen
          name="announcement_module"

          options={{ title: "Announcement", }}
        />
                       <Drawer.Screen
          name="assignment_module"

          options={{ title: "Assignment", }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}