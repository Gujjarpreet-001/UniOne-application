import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
  Zap,
  Shield,
  Globe,
  Users,
  ArrowRight,
  ArrowLeft,
  Check,
  Star,
  TrendingUp,
  Sparkles,
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

import type { ColorValue } from 'react-native';

interface OnboardingScreen {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlights: string[];
  gradient: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const onboardingScreens: OnboardingScreen[] = [
  {
    id: 1,
    title: 'Welcome to Unione',
    subtitle: 'The all-in-one platform that transforms how teams collaborate and achieve extraordinary results together.',
    icon: <Sparkles size={64} color="#ffffff" />,
    highlights: [
      'Unite your entire business',
      'Streamline team collaboration',
      'Achieve extraordinary results',
      'Transform your workflow'
    ],
    gradient: ['#2563eb', '#7c3aed']
  },
  {
    id: 2,
    title: 'Lightning Fast Performance',
    subtitle: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.',
    icon: <Zap size={64} color="#ffffff" />,
    highlights: [
      'Optimized infrastructure',
      'Real-time synchronization',
      'Instant loading times',
      'Seamless user experience'
    ],
    gradient: ['#f59e0b', '#ef4444']
  },
  {
    id: 3,
    title: 'Enterprise Security',
    subtitle: 'Bank-grade security with end-to-end encryption, compliance standards, and advanced protection.',
    icon: <Shield size={64} color="#ffffff" />,
    highlights: [
      'End-to-end encryption',
      'Compliance standards',
      'Advanced threat protection',
      'Secure data storage'
    ],
    gradient: ['#10b981', '#059669']
  },
  {
    id: 4,
    title: 'Global Scale',
    subtitle: 'Reliable service across 150+ countries with 99.9% uptime and worldwide infrastructure.',
    icon: <Globe size={64} color="#ffffff" />,
    highlights: [
      '150+ countries supported',
      '99.9% uptime guarantee',
      'Global infrastructure',
      '24/7 monitoring'
    ],
    gradient: ['#8b5cf6', '#a855f7']
  },
  {
    id: 5,
    title: 'Team Collaboration',
    subtitle: 'Seamless collaboration tools that bring your team together and boost productivity by up to 40%.',
    icon: <Users size={64} color="#ffffff" />,
    highlights: [
      'Real-time collaboration',
      'Team communication tools',
      '40% productivity increase',
      'Seamless integrations'
    ],
    gradient: ['#06b6d4', '#0891b2']
  },
  {
    id: 6,
    title: 'Ready to Get Started?',
    subtitle: 'Join 50,000+ users and industry leaders who trust Unione to accelerate their business growth.',
    icon: <Star size={64} color="#ffffff" />,
    highlights: [
      '50,000+ active users',
      'Industry leader trust',
      'Proven results',
      'Award-winning platform'
    ],
    gradient: ['#ec4899', '#be185d']
  }
];

export default function OnboardingScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const animateTransition = (callback: () => void) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      callback();
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const nextScreen = () => {
    if (currentScreen < onboardingScreens.length - 1) {
      animateTransition(() => setCurrentScreen(currentScreen + 1));
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      animateTransition(() => setCurrentScreen(currentScreen - 1));
    }
  };

  const skipToEnd = () => {
    animateTransition(() => setCurrentScreen(onboardingScreens.length - 1));
  };

  const handleGetStarted = () => {
    router.replace('/screens/(main_tabs)');
  };

  const screen = onboardingScreens[currentScreen];
  const isLastScreen = currentScreen === onboardingScreens.length - 1;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={screen.gradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        
        {/* Skip Button */}
        {!isLastScreen && (
          <TouchableOpacity style={styles.skipButton} onPress={skipToEnd}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}

        {/* Progress Indicators */}
        <View style={styles.progressContainer}>
          {onboardingScreens.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index === currentScreen && styles.progressDotActive
              ]}
            />
          ))}
        </View>

        {/* Main Content */}
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}>
          
          {/* Icon */}
          <View style={styles.iconContainer}>
            {screen.icon}
          </View>

          {/* Title */}
          <Text style={styles.title}>{screen.title}</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>{screen.subtitle}</Text>

          {/* Highlights */}
          <View style={styles.highlightsContainer}>
            {screen.highlights.map((highlight, index) => (
              <Animated.View
                key={index}
                style={[
                  styles.highlightItem,
                  {
                    opacity: fadeAnim,
                    transform: [
                      {
                        translateX: slideAnim.interpolate({
                          inputRange: [0, 50],
                          outputRange: [0, -20],
                        }),
                      },
                    ],
                  },
                ]}>
                <Check size={20} color="#ffffff" />
                <Text style={styles.highlightText}>{highlight}</Text>
              </Animated.View>
            ))}
          </View>

          {/* Special content for last screen */}
          {isLastScreen && (
            <View style={styles.finalScreenContent}>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>50K+</Text>
                  <Text style={styles.statLabel}>Users</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>99.9%</Text>
                  <Text style={styles.statLabel}>Uptime</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>150+</Text>
                  <Text style={styles.statLabel}>Countries</Text>
                </View>
              </View>
              
             
            </View>
          )}
        </Animated.View>

        {/* Navigation */}
        <View style={styles.navigation}>
          {/* Back Button */}
          {currentScreen > 0 && (
            <TouchableOpacity style={styles.navButton} onPress={prevScreen}>
              <ArrowLeft size={20} color="#ffffff" />
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
          )}

          {/* Spacer */}
          <View style={styles.navSpacer} />

          {/* Next/Get Started Button */}
          <TouchableOpacity
            style={[styles.navButton, styles.primaryNavButton]}
            onPress={isLastScreen ? handleGetStarted : nextScreen}>
            <Text style={[styles.navButtonText, styles.primaryNavButtonText]}>
              {isLastScreen ? 'Get Started' : 'Next'}
            </Text>
            {isLastScreen ? (
              <TrendingUp size={20} color="#2563eb" />
            ) : (
              <ArrowRight size={20} color="#2563eb" />
            )}
          </TouchableOpacity>
        </View>

    
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  skipButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.8,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressDotActive: {
    backgroundColor: '#ffffff',
    width: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 32,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  highlightsContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
  },
  highlightText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    flex: 1,
  },
  finalScreenContent: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#e5e7eb',
    fontWeight: '500',
  },
  testimonialContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 2,
  },
  testimonialText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    color: '#e5e7eb',
    fontWeight: '500',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    gap: 16,
  },
  navSpacer: {
    flex: 1,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  primaryNavButton: {
    backgroundColor: '#ffffff',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  primaryNavButtonText: {
    color: '#2563eb',
  },
  bottomNote: {
    fontSize: 14,
    color: '#e5e7eb',
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.8,
  },
});