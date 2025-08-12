import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChartBar as BarChart3, Users, TrendingUp, Calendar, MessageSquare, Settings, Plus, Bell, Search } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Good morning!</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Search size={20} color="#6b7280" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <LinearGradient
          colors={['#2563eb', '#7c3aed']}
          style={styles.statCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <BarChart3 size={24} color="#ffffff" />
          <Text style={styles.statValue}>$24,500</Text>
          <Text style={styles.statLabel}>Monthly Revenue</Text>
          <Text style={styles.statChange}>+12% from last month</Text>
        </LinearGradient>

        <View style={styles.miniStatsContainer}>
          <View style={styles.miniStatCard}>
            <Users size={20} color="#2563eb" />
            <Text style={styles.miniStatValue}>1,234</Text>
            <Text style={styles.miniStatLabel}>Active Users</Text>
          </View>
          <View style={styles.miniStatCard}>
            <TrendingUp size={20} color="#10b981" />
            <Text style={styles.miniStatValue}>89%</Text>
            <Text style={styles.miniStatLabel}>Growth Rate</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <Plus size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>New Project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Users size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>Team Meeting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Calendar size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <MessageSquare size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>Messages</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityContainer}>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Users size={16} color="#2563eb" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Team meeting completed</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <TrendingUp size={16} color="#10b981" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Monthly goals achieved</Text>
              <Text style={styles.activityTime}>1 day ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <MessageSquare size={16} color="#f59e0b" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>New message from Sarah</Text>
              <Text style={styles.activityTime}>2 days ago</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Projects Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Projects</Text>
        <View style={styles.projectsContainer}>
          <View style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>Website Redesign</Text>
              <Text style={styles.projectProgress}>75%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
            <Text style={styles.projectDeadline}>Due: Dec 15, 2024</Text>
          </View>
          
          <View style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>Mobile App Launch</Text>
              <Text style={styles.projectProgress}>45%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '45%' }]} />
            </View>
            <Text style={styles.projectDeadline}>Due: Jan 30, 2025</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 12,
  },
  statsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 16,
  },
  statCard: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 16,
    color: '#e5e7eb',
    marginBottom: 8,
  },
  statChange: {
    fontSize: 14,
    color: '#d1fae5',
    fontWeight: '500',
  },
  miniStatsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  miniStatCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  miniStatValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 8,
    marginBottom: 4,
  },
  miniStatLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginTop: 8,
    textAlign: 'center',
  },
  activityContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  activityIcon: {
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  projectsContainer: {
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  projectProgress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 3,
  },
  projectDeadline: {
    fontSize: 14,
    color: '#6b7280',
  },
});