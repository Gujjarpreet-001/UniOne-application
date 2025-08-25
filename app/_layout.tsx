import React, { useEffect,ReactNode } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import AuthProvider from './context/AuthContext';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

SplashScreen.preventAutoHideAsync();
const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  colors: {
    ...MD3LightTheme.colors,
    primary: "#3B82F6",
    secondary: "#03dac6",
    background: "#f6f6f6",
    surface: "#ffffff",
    text: "#000000",
  },
}
export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
         <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="screens/(drawer)" options={{ headerShown: false }} />

          {/* Auth flow screens (outside drawer/tabs) */}
          <Stack.Screen name="screens/auth/login1" options={{ title: "Login" }} />
          <Stack.Screen name="screens/auth/otp_page" options={{ title: "OTP Verification" }} />
        </Stack>

        <StatusBar style="auto" />
      </PaperProvider>
    </AuthProvider>
  );
}
