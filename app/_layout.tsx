import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
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
import AuthProvider, { useAuth } from './context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContent } from './components/drawer_content';

SplashScreen.preventAutoHideAsync();
export default function InitialLayout() {
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


    <>
      <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
       <Stack.Screen name="screens/(drawer)" options={{ headerShown: false }} />

        {/* Auth flow screens (outside drawer/tabs) */}
        <Stack.Screen name="screens/auth/login1" options={{ title: "Login" }} />
        <Stack.Screen name="screens/auth/otp_page" options={{ title: "OTP Verification" }} />
      </Stack>
    
      <StatusBar style="auto" />
   </>
  );
}


export function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}