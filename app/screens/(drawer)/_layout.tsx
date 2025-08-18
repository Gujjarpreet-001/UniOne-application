import { DrawerContent } from "@/app/components/drawer_content";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function InitialLayout() {
    return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          headerShown: false,
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
      </Drawer>
    </GestureHandlerRootView>
    );
}