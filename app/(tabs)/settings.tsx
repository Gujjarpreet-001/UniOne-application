import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Bell, Globe, Shield, CircleHelp as HelpCircle, LogOut, ChevronRight, Moon, Smartphone } from 'lucide-react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Manage your preferences and account</Text>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingsCard}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Bell size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Push Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#e5e7eb', true: '#93c5fd' }}
              thumbColor={notificationsEnabled ? '#2563eb' : '#f3f4f6'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Moon size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Dark Mode</Text>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#e5e7eb', true: '#93c5fd' }}
              thumbColor={darkModeEnabled ? '#2563eb' : '#f3f4f6'}
            />
          </View>
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Globe size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Language & Region</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Shield size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Privacy & Security</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Smartphone size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Connected Devices</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <HelpCircle size={20} color="#6b7280" />
              <Text style={styles.settingLabel}>Help Center</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Contact Support</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#dc2626" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
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
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  settingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    color: '#dc2626',
    fontWeight: '600',
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
  },
});