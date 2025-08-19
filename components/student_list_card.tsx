import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { User, Mail, Phone, ChevronRight, UserCheck, Trash2 } from 'lucide-react-native';

export interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
  email: string;
  parentContact: string;
  role?: string;
  avatar?: string;
}

interface StudentCardProps {
  student: Student;
  onDelete: () => void;
}

export default function StudentCard({ student, onDelete }: StudentCardProps) {
  const getRoleBadgeColor = (role?: string) => {
    switch (role) {
      case 'Student Leader':
      case 'Class Monitor':
      case 'Prefect':
        return '#3B82F6';
      case 'Sports Captain':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  const getRoleIcon = (role?: string) => {
    switch (role) {
      case 'Student Leader':
      case 'Class Monitor':
      case 'Prefect':
        return <UserCheck size={12} color="#FFFFFF" />;
      default:
        return <User size={12} color="#FFFFFF" />;
    }
  };

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        {/* Avatar and Main Info */}
        <View style={styles.headerSection}>
          <View style={styles.avatarContainer}>
            {student.avatar ? (
              <Image source={{ uri: student.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <User size={24} color="#9CA3AF" />
              </View>
            )}
          </View>

          <View style={styles.mainInfo}>
            <Text style={styles.studentName}>{student.name}</Text>
            <View style={styles.gradeSection}>
              <Text style={styles.gradeText}>{student.grade} - </Text>
              <Text style={styles.sectionText}>{student.section}</Text>


            </View>

            {/* Role Badge */}
            <View style={styles.badgeContainer}>
              <View style={[styles.roleBadge, { backgroundColor: getRoleBadgeColor(student.role) }]}>
                {getRoleIcon(student.role)}
                <Text style={styles.roleBadgeText}>{student.role || 'Regular Student'}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Trash2 size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>

        {/* Contact Information */}
        <View style={styles.contactSection}>
          <View style={styles.contactItem}>
            <Mail size={14} color="#6B7280" />
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>{student.email}</Text>
          </View>

          <View style={styles.contactItem}>
            <Phone size={14} color="#6B7280" />
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>{student.parentContact}</Text>
          </View>
        </View>

        {/* Action Button */}
        {/* <TouchableOpacity style={styles.detailsButton}>
          <User size={16} color="#3B82F6" />
          <Text style={styles.detailsButtonText}>Go to Student Details</Text>
          <ChevronRight size={16} color="#3B82F6" />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardContent: {
    padding: 20,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  gradeSection: {
    flexDirection: 'row',
  },
  gradeText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  roleBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactSection: {
    marginBottom: 16,
    gap: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    minWidth: 60,
  },
  contactValue: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
    flex: 1,
  },
});