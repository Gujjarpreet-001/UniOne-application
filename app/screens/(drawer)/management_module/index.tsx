import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Users, GraduationCap, DollarSign, CreditCard, CircleAlert as AlertCircle, BookOpen, Bus, Clock } from 'lucide-react-native';
import { ChartBar as BarChart } from 'lucide-react-native';
import { ManagementCard } from '@/components/management_card';
import { MetricCard } from '@/components/metric_card';
import { QuickActionCard } from '@/components/quick_action_card';
import { Header } from 'react-native/Libraries/NewAppScreen';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const metricData = [
    {
      title: 'Total Students',
      value: '1,247',
      subtitle: '',
      icon: Users,
      color: '#3B82F6',
      changePercent: '+5.2%',
      isPositive: true,
    },
    {
      title: 'Total Teachers',
      value: '89',
      subtitle: 'Total teaching',
      icon: GraduationCap,
      color: '#10B981',
      changePercent: '+3.7%',
      isPositive: true,
    },
    {
      title: 'Monthly Revenue',
      value: '$3,272,500',
      subtitle: '',
      icon: DollarSign,
      color: '#8B5CF6',
      changePercent: '+8.2%',
      isPositive: true,
    },
    {
      title: 'Fees Collected',
      value: '$2,847,500',
      subtitle: 'This month',
      icon: CreditCard,
      color: '#06B6D4',
      changePercent: '+12.1%',
      isPositive: true,
    },
    {
      title: 'Pending Fees',
      value: '$425,000',
      subtitle: 'Outstanding',
      icon: AlertCircle,
      color: '#EF4444',
      changePercent: '-3.2%',
      isPositive: false,
    },
    {
      title: 'Library Books',
      value: '15,420',
      subtitle: 'Total Collection',
      icon: BookOpen,
      color: '#8B5CF6',
      changePercent: '',
      isPositive: true,
    },
    {
      title: 'Bus Count',
      value: '156',
      subtitle: 'All employees',
      icon: Bus,
      color: '#F59E0B',
      changePercent: '',
      isPositive: true,
    },
    {
      title: 'Pending Admissions',
      value: '23',
      subtitle: 'Applications',
      icon: Clock,
      color: '#F59E0B',
      changePercent: '',
      isPositive: true,
    },
  ];

  const managementTools = [
    {
      title: 'Students',
      subtitle: 'Student\n management',
      icon: Users,
      color: '#3B82F6',
    },
    {
      title: 'Teachers',
      subtitle: 'Teacher\n management',
      icon: GraduationCap,
      color: '#10B981',
    },
    {
      title: 'Fees',
      subtitle: 'Payment\n management',
      icon: DollarSign,
      color: '#F97316',
    },
    {
      title: 'Announcements',
      subtitle: 'School\n communications',
      icon: AlertCircle,
      color: '#EC4899',
    },
    {
      title: 'Library',
      subtitle: 'Book\n management',
      icon: BookOpen,
      color: '#14B8A6',
    },
    {
      title: 'Timetable',
      subtitle: 'Schedule management',
      icon: Clock,
      color: '#10B981',
    },
    {
      title: 'Reports',
      subtitle: 'Analytics & reports',
      icon: BarChart,
      color: '#6B7280',
    },
  ];

  const quickActions = [
    { title: 'Add Student', icon: Users, color: '#3B82F6' },
    { title: 'Add Teacher', icon: GraduationCap, color: '#10B981' },
    { title: 'Announcements', icon: AlertCircle, color: '#EC4899' },
    { title: 'Generate Report', icon: BarChart, color: '#6B7280' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        
        {/* School Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>School Overview</Text>
          <View style={styles.grid}>
            {metricData.map((metric, index) => (
              <View key={index} style={styles.gridItem}>
                <MetricCard {...metric} />
              </View>
            ))}
          </View>
        </View>

        {/* Management Tools Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Management Tools</Text>
          <View style={styles.grid}>
            {managementTools.map((tool, index) => (
              <View key={index} style={styles.gridItem}>
                <ManagementCard {...tool} />
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions Section */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.grid}>
            {quickActions.map((action, index) => (
              <View key={index} style={styles.gridItem}>
                <QuickActionCard {...action} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 12,
  },
});