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
          name="management"
          options={{ title: "Home" }}
        />
          <Drawer.Screen
          name="attendance_page"
          
          options={{ title: "Attendance", }}
        />
    
      </Drawer>
    </GestureHandlerRootView>
    );
}