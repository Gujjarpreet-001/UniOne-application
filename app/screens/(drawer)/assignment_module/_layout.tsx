// app/screens/management/_layout.tsx
import { Stack } from "expo-router";

export default function AssignmentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index" // 👈 make index the default entry point
    >
      <Stack.Screen name="index" />
       <Stack.Screen name="add_assignment" />
    </Stack>
  );
}
