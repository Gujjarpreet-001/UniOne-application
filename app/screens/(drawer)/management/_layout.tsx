// app/screens/management/_layout.tsx
import { Stack } from "expo-router";

export default function ManagementLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index" // 👈 make index the default entry point
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="student_list" 
        options={{
          headerBackVisible: false, // hides default back
          gestureEnabled: false,   // disable iOS swipe back
        }}
      />
      <Stack.Screen name="add_student" />
    </Stack>
  );
}
