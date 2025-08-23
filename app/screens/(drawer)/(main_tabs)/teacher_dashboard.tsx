import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, Calendar, BookOpen, MessageCircle, CalendarCheck, TrendingUp, DollarSign, CircleAlert as AlertCircle, FileText, IndianRupee, File, Megaphone } from 'lucide-react-native';
import AppHeader from '@/components/common_header';
import TeacherMetalCard from '@/components/teacher_card_new';

const MetricCard = ({ icon, title, value, subtitle, color = '#f59e0b', trend }: any) => {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricHeader}>
        <View style={[styles.metricIcon, { backgroundColor: `${color}20` }]}>
          {icon}
        </View>
        {trend && (
          <View style={styles.trendContainer}>
            <TrendingUp size={12} color="#10b981" />
          </View>
        )}
      </View>
      <Text style={styles.metricTitle}>{title}</Text>
      <Text style={[styles.metricValue, { color }]}>{value}</Text>
      <Text style={styles.metricSubtitle}>{subtitle}</Text>
    </View>
  );
};

const QuickAccessButton = ({ icon, title, gradient }: any) => {
  return (
    <TouchableOpacity style={styles.quickAccessButton}>
      <LinearGradient
        colors={gradient}
        style={styles.quickAccessGradient}
      >
        {icon}
        <Text style={styles.quickAccessText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
         {/* Header */}
      <AppHeader />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Faculty Card */}
        <TeacherMetalCard />

        {/* Performance Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teaching Performance Overview</Text>
          
          <View style={styles.metricsGrid}>
            <MetricCard
              icon={<Users size={20} color="#6366f1" />}
              title="Total Students"
              value="15"
              subtitle="Enrolled"
              color="#6366f1"
              trend={true}
            />
            <MetricCard
              icon={<Calendar size={20} color="#10b981" />}
              title="Attendance Rate"
              value="67%"
              subtitle="This Month"
              color="#10b981"
              trend={true}
            />
            <MetricCard
              icon={<BookOpen size={20} color="#8b5cf6" />}
              title="Class Average"
              value="88%"
              subtitle="Overall"
              color="#8b5cf6"
              trend={true}
            />
            <MetricCard
              icon={<MessageCircle size={20} color="#f97316" />}
              title="Feedback Given"
              value="327"
              subtitle="Total Reviews"
              color="#f97316"
              trend={true}
            />
            <MetricCard
              icon={<DollarSign size={20} color="#10b981" />}
              title="Total Fees"
              value="$0"
              subtitle="Collected"
              color="#10b981"
              trend={true}
            />
            <MetricCard
              icon={<AlertCircle size={20} color="#ef4444" />}
              title="Pending Fees"
              value="$0"
              subtitle="Outstanding"
              color="#ef4444"
              trend={false}
            />
            <MetricCard
              icon={<FileText size={20} color="#8b5cf6" />}
              title="Assignments Graded"
              value="142"
              subtitle="This Month"
              color="#8b5cf6"
              trend={true}
            />
            <MetricCard
              icon={<Calendar size={20} color="#06b6d4" />}
              title="Active Classes"
              value="6"
              subtitle="Teaching"
              color="#06b6d4"
              trend={true}
            />
          </View>
        </View>

        {/* Quick Access Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access Features</Text>
          <Text style={styles.sectionSubtitle}>Navigate to different sections of your teaching dashboard</Text>
          
          <View style={styles.quickAccessGrid}>
            <QuickAccessButton
              icon={<Users size={24} color="white" />}
              title="Students"
              gradient={['#6366f1', '#4f46e5']}
            />
            <QuickAccessButton
              icon={<Calendar size={24} color="white" />}
              title="Attendance"
              gradient={['#10b981', '#059669']}
            />
            <QuickAccessButton
              icon={<BookOpen size={24} color="white" />}
              title="Grades"
              gradient={['#8b5cf6', '#7c3aed']}
            />
            <QuickAccessButton
              icon={<MessageCircle size={24} color="white" />}
              title="Feedback"
              gradient={['#f97316', '#ea580c']}
            />
            <QuickAccessButton
              icon={<CalendarCheck size={24} color="white" />}
              title="Schedule"
              gradient={['#ec4899', '#db2777']}
            />
             <QuickAccessButton
              icon={<IndianRupee size={24} color="white" />}
              title="Fees"
              gradient={['#eab308', '#ea580c']}
            />
              <QuickAccessButton
              icon={<File size={24} color="white" />}
              title="Assignments"
              gradient={['#14b8a6', '#0891b2']}
            />
                <QuickAccessButton
              icon={<MessageCircle size={24} color="white" />}
              title="Messages"
              gradient={['#6366f1', '#2563eb']}
            />
                <QuickAccessButton
              icon={<Megaphone size={24} color="white" />}
              title="Announcements"
              gradient={['#f43f5e', '#db2777']}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '700',
   // marginBottom: 8,
    //textAlign: 'center',
    marginVertical: 16,
  },
  sectionSubtitle: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  metricCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendContainer: {
    backgroundColor: '#10b98120',
    borderRadius: 6,
    padding: 4,
  },
  metricTitle: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
  },
  metricSubtitle: {
    color: '#9ca3af',
    fontSize: 11,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickAccessButton: {
    width: '48%',
    aspectRatio: 1.2,
    borderRadius: 16,
    overflow: 'hidden',
  },
  quickAccessGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  quickAccessText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
});