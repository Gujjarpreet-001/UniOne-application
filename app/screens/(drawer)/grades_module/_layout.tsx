// app/screens/management/_layout.tsx
import { Stack } from "expo-router";

export default function GradesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="grades_page" // 
    >
      
      <Stack.Screen name="grades_page" 
        options={{
          headerBackVisible: false, // hides default back
          gestureEnabled: false,   // disable iOS swipe back
        }}
      />
      <Stack.Screen name="grades_overview" />
    </Stack>
  );
}
