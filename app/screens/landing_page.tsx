import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Zap,
  Shield,
  Globe,
  Users,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  ClipboardCheck,
  BarChart3,
  Calendar,
  MessageCircle,
  CreditCard,
  BookOpen,
  CircleCheck,
  CircleCheckIcon,
  CircleCheckBig,
} from 'lucide-react-native';
import GradientButton from '../components/gradient_button';
import GradientText from '../components/gradient_text';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const { width, height } = Dimensions.get('window');

export default function LandingPage() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#2563eb', '#7c3aed']}
        style={styles.hero}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Animated.View
          style={[
            styles.heroContent,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}>
          <Text style={styles.heroTitle}>
            Empowering Education{'\n'}
            <Text style={styles.heroTitleAccent}>Through Digital Innovation</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            My UniOne bridges the gap between schools, teachers, and parents with comprehensive digital solutions for modern education management.
          </Text>
          <GradientButton title={'Get Started Today '} onPress={function (): void {
            console.log('Button Pressed');
          }} icon={<ArrowRight color={'white'} />} />
        </Animated.View>
      </LinearGradient>

      {/* Features Section */}
      <View style={styles.section}>
        <GradientText style={styles.sectionTitle} text="Comprehensive School Management" />
        <Text style={styles.sectionSubtitle}>
          Our platform provides all the tools needed to streamline school operations and enhance communication between all stakeholders.
        </Text>

        <View style={styles.featuresGrid}>
          <FeatureCard
            iconColor='#2564eb40'
            icon={<ClipboardCheck size={32} color="#2563eb" />}
            title="Attendance Management"
            featureText='Digital attendance tracking'
            description="Effortlessly track and manage student attendance with real-time updates and automated notifications to parents."
          />
          <FeatureCard
            iconColor="#16a34a40"
            icon={<BarChart3 size={32} color="#16a34a" />}
            title="Grade Management"
            featureText='Digital gradebook'
            description="Comprehensive grading system with detailed analytics and progress tracking for better student assessment."
          />
          <FeatureCard
            iconColor="#9333ea40"
            icon={<Calendar size={32} color="#9333ea" />}
            title="Schedule Management"
            featureText='Interactive calendar'
            description="Create and manage class schedules, assignments, and important events with automated reminders."
          />
          <FeatureCard
            iconColor='#ea580c40'
            icon={<MessageCircle size={32} color="#ea580c" />}
            title="Feedback System"
            featureText='Real-time messaging'
            description="Streamlined communication between teachers and parents with detailed feedback and progress reports."
          />
          <FeatureCard
            iconColor="#dc262640"
            icon={<CreditCard size={32} color="#dc2626" />}
            title="Fee Management"
            featureText='Payment Structure'
            description="Complete fee management system with Payment Structure, receipts, and automated reminders."
          />
          <FeatureCard
            iconColor="#4f46e540"
            icon={<Shield size={32} color="#4f46e5" />}
            title="Communication System"
            featureText='Real-time Messaging'
            description="Seamless messaging between teachers and parents"
          />
          <FeatureCard
            icon={<BookOpen size={32} color="#2563eb" />}
            title="Assignment Section"
            featureText='Assignment Creation'
            description="Create, track, and grade assignments efficiently."
          />
          <FeatureCard
            iconColor='#ca8a0440'
            icon={<Star size={32} color="#ca8a04" />}
            title="Announcement Management"
            featureText='School-wide Alerts'
            description="Broadcast important updates and news"
          />
          <FeatureCard
            icon={<Shield size={32} color="#2563eb" />}
            title="Secure Access"
            featureText='Multi-factor authentication'
            description="Role-based access control ensuring data privacy and security for all users in the system."
          />
        </View>
      </View>

      {/* Stats Section */}
      <LinearGradient colors={["#3182ce", "#9333ea"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} >
        <View style={styles.statsSection}>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100+</Text>
              <Text style={styles.statLabel}>Schools Connected</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5k+</Text>
              <Text style={styles.statLabel}>Active Students</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1k+</Text>
              <Text style={styles.statLabel}>Teachers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>99.9%</Text>
              <Text style={styles.statLabel}>Uptime</Text>
            </View>
          </View>
        </View>
      </LinearGradient>



   

      
    

  

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>My Unione</Text>
        <Text style={styles.footerDescription}>
          Connecting parents, students, and teachers for better educational outcomes through innovative digital solutions.
        </Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
          <Text style={styles.footerLink}>Terms of Service</Text>
          <Text style={styles.footerLink}>Contact</Text>
        </View>
        <Text style={styles.footerCopyright}>
          © 2025 Unione. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

function FeatureCard({ icon, title, description, iconColor, featureText }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  featureText?: string;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={[styles.featureIconContainer, { backgroundColor: iconColor || '#eff6ff' }]}>
        {icon}
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
      <View style={styles.featureKey}>
        <CircleCheckBig size={20} color="#10b981" />
        <Text style={styles.featureKeyText}>{featureText}</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    minHeight: height * 0.7,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 600,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  heroTitleAccent: {
    color: '#ffffff',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
  },
  ctaButton: {
    backgroundColor: "linear-gradient(90deg, #2563eb, #4f46e5)", // Not directly supported in RN
    paddingHorizontal: 24, // px-6 (6 * 4)
    paddingVertical: 12,    // py-3 (3 * 4)
    borderRadius: 12,       // rounded-lg
    fontSize: 16,           // text-base
    fontWeight: "600",      // font-semibold
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  ctaButtonText: {
    color: "#fff",
    fontSize: 16, // same as text-base
    fontWeight: "600",
  },
  ctaIcon: {
    marginLeft: 4,
  },
  heroNote: {
    fontSize: 14,
    color: '#d1d5db',
    textAlign: 'center',
  },
  statsSection: {
    //  backgroundColor: '#f8fafc',
    paddingVertical: 0,
    paddingHorizontal: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  statItem: {
    alignItems: 'center',
    width: "48%", // Two items per row with some gap
    aspectRatio: 1, // Keep square shape
    margin: "1%",
    borderRadius: 10,
    justifyContent: "center",

  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    paddingVertical: 64,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 0,
  },
  sectionSubtitle: {
    fontSize: 20,
    color: Colors.textGray600,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 26,
  },
  featuresGrid: {
    flexDirection: 'column',
    //  flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: (width - 48),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  featureIconContainer: {
    backgroundColor: '#eff6ff',
    borderRadius: 120,
    padding: 12,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    fontWeight: '500',
  },
  featureKey: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',

  },
  featureKeyText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  benefitsSection: {
    backgroundColor: '#f8fafc',
  },
  benefitsList: {
    gap: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  benefitText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
    fontWeight: '500',
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'center',
  },
  testimonialText: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 24,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '600',
  },
  pricingContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  pricingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: (width - 72) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    position: 'relative',
  },
  pricingCardFeatured: {
    borderColor: '#2563eb',
    borderWidth: 2,
    transform: [{ scale: 1.05 }],
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    left: 24,
    right: 24,
    backgroundColor: '#2563eb',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  popularBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  pricingPlan: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    marginTop: 16,
  },
  pricingPrice: {
    fontSize: 36,
    fontWeight: '800',
    color: '#2563eb',
    marginBottom: 24,
  },
  pricingPeriod: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '400',
  },
  pricingFeatures: {
    marginBottom: 24,
    gap: 8,
  },
  pricingFeature: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  pricingButton: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  pricingButtonFeatured: {
    backgroundColor: '#2563eb',
  },
  pricingButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563eb',
  },
  pricingButtonTextFeatured: {
    color: '#ffffff',
  },
  ctaSection: {
    paddingVertical: 64,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaSubtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
  },
  footer: {
    backgroundColor: '#1f2937',
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
  footerDescription: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 32,
    marginBottom: 24,
  },
  footerLink: {
    fontSize: 14,
    color: '#d1d5db',
    fontWeight: '500',
  },
  footerCopyright: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});