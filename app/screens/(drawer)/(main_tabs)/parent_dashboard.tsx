import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { GraduationCap, User, Mail, Phone, MapPin, CircleCheck as CheckCircle, Calendar, MessageCircle, ChartBar as BarChart3, FileText, Megaphone, DollarSign, Clock, Star, Award, TrendingUp } from 'lucide-react-native';
import AppHeader from '@/app/components/common_header';
import { Typography } from '@/Utils/typography';
import StudentCard from '@/app/components/student_card';

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
export default function ParentDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <AppHeader />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <StudentCard />

        {/* Student Info Card */}
        {/* <View style={styles.studentCard}>
          <View style={styles.studentCardHeader}>
            <View style={styles.leftHeader}>
              <Text style={styles.schoolName}>School Name</Text>
              <Text style={styles.studentId}>Student ID 00001</Text>
            </View>
            <View style={styles.rightHeader}>
              <Text style={styles.academicYear}>Academic Year</Text>
              <Text style={styles.year}>2024-25</Text>
            </View>
          </View>

          <View style={styles.studentInfo}>
            <View style={styles.profileIcon}>
              <User size={32} color="#F59E0B" strokeWidth={2} />
            </View>
            <View style={styles.studentDetails}>
              <Text style={styles.studentName}>Emma Smith</Text>
              <Text style={styles.grade}>10th Grade</Text>
            </View>
          </View>

          <View style={styles.contactInfo}>
            <View style={styles.contactRow}>
              <Mail size={18} color="#9CA3AF" strokeWidth={2} />
              <Text style={styles.contactText}>emma.smith@school.com</Text>
            </View>
            <View style={styles.contactRow}>
              <Phone size={18} color="#9CA3AF" strokeWidth={2} />
              <Text style={styles.contactText}>(+91) 93765 43210</Text>
            </View>
            <View style={styles.contactRow}>
              <MapPin size={18} color="#9CA3AF" strokeWidth={2} />
              <Text style={styles.contactText}>Greater Noida, India</Text>
            </View>
          </View>

          <View style={styles.statusBadges}>
            <View style={[styles.badge, styles.activeBadge]}>
              <Text style={styles.activeBadgeText}>Active</Text>
            </View>
            <View style={[styles.badge, styles.validBadge]}>
              <Text style={styles.validBadgeText}>Valid 2024-25</Text>
            </View>
            <View style={[styles.badge, styles.verifiedBadge]}>
              <Text style={styles.verifiedBadgeText}>Verified</Text>
            </View>
          </View>
        </View> */}

        {/* Academic Performance Overview */}
        <View style={styles.performanceSection}>
          <Text style={styles.sectionTitle}>Academic Performance Overview</Text>

          <View style={styles.performanceGrid}>

            <MetricCard
              icon={<CheckCircle size={20} color="#10B981" />}
              title="Attendance Rate"
              value="64%"
              subtitle="This Month"
              color="#10B981"
              trend={true}
            />



            <MetricCard
              icon={<GraduationCap size={20} color="#3B82F6" />}
              title="Grade Average"
              value="88%"
              subtitle="Overall"
              color="#3B82F6"
              trend={true}
            />



            <MetricCard
              icon={<MessageCircle size={20} color="#F59E0B" />}
              title="Teacher Feedback"
              value="335"
              subtitle="Total Reviews"
              color="#F59E0B"
              trend={true}
            />



            <MetricCard
              icon={<Calendar size={20} color="#8B5CF6" />}
              title="Study Streak"
              value="12"
              subtitle="Days"
              color="#8B5CF6"
              trend={true}
            />



            <MetricCard
              icon={<BarChart3 size={20} color="#A855F7" />}
              title="Assignments Completed"
              value="24"
              subtitle="This Month"
              color="#A855F7"
              trend={true}
            />



            <MetricCard
              icon={<Clock size={20} color="#0EA5E9" />}
              title="Study Hours"
              value="42"
              subtitle="This Week"
              color="#0EA5E9"
              trend={true}
            />



            <MetricCard
              icon={<Award size={20} color="#EAB308" />}
              title="Achievements"
              value="8"
              subtitle="Earned"
              color="#EAB308"
              trend={true}
            />



            <MetricCard
              icon={<Star size={20} color="#EC4899" />}
              title="Class Rank"
              value="3rd"
              subtitle="Out of 45"
              color="#EC4899"
              trend={true}
            />
          </View>
        </View>

        {/* Quick Access Features */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Quick Access Features</Text>

          <View style={styles.quickAccessGrid}>
            <TouchableOpacity style={[styles.quickAccessButton, styles.attendanceButton]}>
              <Calendar size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Attendance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.gradesButton]}>
              <GraduationCap size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Grades</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.feedbackButton]}>
              <MessageCircle size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.scheduleButton]}>
              <Clock size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.feesButton]}>
              <DollarSign size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Fees</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.assignmentsButton]}>
              <FileText size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Assignments</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickAccessButton, styles.announcementsButton]}>
              <Megaphone size={28} color="white" strokeWidth={2} />
              <Text style={styles.quickAccessText}>Announcements</Text>
            </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  performanceSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginVertical: 16,
  },
  performanceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  performanceCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,

  },
  performanceIcon: {
    marginRight: 8,
    marginTop: 2,
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  performanceContent: {
    flex: 1,
  },
  performanceLabel: {
    fontSize: Typography.caption.fontSize,
    color: '#6B7280',
    marginBottom: 4,
  },
  performanceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
  },
  performanceSubtext: {
    fontSize: Typography.caption.fontSize,
    color: '#9CA3AF',
  },
  quickAccessSection: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  quickAccessButton: {
    width: '48%',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  attendanceButton: {
    backgroundColor: '#10B981',
  },
  gradesButton: {
    backgroundColor: '#3B82F6',
  },
  feedbackButton: {
    backgroundColor: '#EF4444',
  },
  scheduleButton: {
    backgroundColor: '#A855F7',
  },
  feesButton: {
    backgroundColor: '#F59E0B',
  },
  assignmentsButton: {
    backgroundColor: '#06B6D4',
  },
  announcementsButton: {
    backgroundColor: '#EC4899',
  },
  quickAccessText: {
    fontSize: Typography.caption.fontSize,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
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
    shadowRadius: 3.84,
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
});