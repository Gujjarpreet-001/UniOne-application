import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Mail, Phone, MapPin, CreditCard as Edit3, Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#2563eb', '#7c3aed']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerContent}>
          <View style={styles.avatarContainer}>
            <User size={48} color="#ffffff" />
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userTitle}>Product Manager</Text>
          <TouchableOpacity style={styles.editButton}>
            <Edit3 size={16} color="#2563eb" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Profile Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Mail size={20} color="#6b7280" />
            <Text style={styles.infoText}>john.doe@unione.com</Text>
          </View>
          <View style={styles.infoItem}>
            <Phone size={20} color="#6b7280" />
            <Text style={styles.infoText}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.infoItem}>
            <MapPin size={20} color="#6b7280" />
            <Text style={styles.infoText}>San Francisco, CA</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <Settings size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>Account Settings</Text>
            <Text style={styles.actionDescription}>Manage your account preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <User size={24} color="#2563eb" />
            <Text style={styles.actionTitle}>Team Management</Text>
            <Text style={styles.actionDescription}>Invite and manage team members</Text>
          </TouchableOpacity>
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 20,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  userTitle: {
    fontSize: 16,
    color: '#e5e7eb',
    marginBottom: 24,
  },
  editButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  actionsGrid: {
    gap: 16,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 12,
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});