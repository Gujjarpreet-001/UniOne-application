import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  User,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle,
  Inbox,
  Star,
  Tag,
  Users,
  Send,
  FileText,
  Calendar,
  BookOpen,
  Calendar1,
  IndianRupee,
  File,
  Megaphone,
  MessagesSquare,
  BookDashed,
} from 'lucide-react-native';
import { usePathname, useRouter } from 'expo-router';

export function DrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);

  const menuItems = [
        { label: 'Dashboard', icon : BookDashed, route: '/screens/(main_tabs)/parent_dashboard' },
    { label: 'Attendance', icon: Calendar, route: 'screens/auth/otp_page', },
    { label: 'Grades', icon: BookOpen, route: '/screens/(main_tabs)' },
    { label: 'Schedule', icon: Calendar1, route: '/screens/(main_tabs)' },
    { label: 'Fees', icon: IndianRupee, route: '/screens/(main_tabs)' },
    { divider: true },
    { label: 'Assignments', icon: File, route: '/(main_tabs)' },
    { label: 'Announcement', icon: Megaphone, route: '/(main_tabs)' },
     { label: 'Feedback', icon: MessagesSquare, route: '/(main_tabs)' },

  ];

  const user = {
    name: 'Rajeev Ranjan',
    email: 'rajeev@example.com',
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      {/* Header  */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.avatar}>
          <User color="#fff" size={26} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </TouchableOpacity>

    

      {/* Menu */}
      <ScrollView style={styles.menuSection}>
        {menuItems.map((item, index) =>
          item.divider ? (
            <View key={index} style={styles.divider} />
          ) : (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, ( pathname === item.route) && styles.activeItem]}
              onPress={() => {
                console.log(`Navigating to ${item.route} ${pathname}`);
                router.navigate(item.route as any);

              }}
            >
              <item.icon
                color={ '#374151'}
                size={20}
                style={{ marginRight: 20 }}
              />
              <Text
                style={[
                  styles.menuLabel,
                   { color: '#374151', fontWeight: '400' },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Footer  */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.menuItem}>
          <Settings color="#374151" size={20} style={{ marginRight: 20 }} />
          <Text style={styles.menuLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <HelpCircle color="#374151" size={20} style={{ marginRight: 20 }} />
          <Text style={styles.menuLabel}>Help & Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <LogOut color="#374151" size={20} style={{ marginRight: 20 }} />
          <Text style={styles.menuLabel}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  userEmail: {
    fontSize: 13,
    color: '#6b7280',
  },
  accountDropdown: {
    backgroundColor: '#f9fafb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  smallAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  accountName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  accountEmail: {
    fontSize: 12,
    color: '#6b7280',
  },
  manageBtn: {
    paddingVertical: 6,
  },
  manageText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2563eb',
  },
  menuSection: {
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  activeItem: {
    backgroundColor: '#fce8e6',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  menuLabel: {
    fontSize: 15,
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 6,
    marginLeft: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 8,
  },
});
