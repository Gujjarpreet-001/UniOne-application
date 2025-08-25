import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  Megaphone,
  Search,
  Share2,
  Bookmark,
  ChevronUp,
  ChevronDown as ChevronDownCollapsed,
} from 'lucide-react-native';
import AppHeader from '@/components/common_header';
import ReadMoreText from '@/components/read_more_text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Announcement {
  id: string;
  title: string;
  emoji: string;
  priority: 'High' | 'Urgent' | 'Medium' | 'Low';
  category: 'Academic' | 'Events' | 'Transportation' | 'Cafeteria' | 'Holiday';
  author: string;
  date: string;
  description: string;
  fullContent: string;
  isRead: boolean;
  isExpanded?: boolean;
}

const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Annual Sports Day - February 15th',
    emoji: '🎉',
    priority: 'High',
    category: 'Events',
    author: 'Principal Johnson',
    date: '15/01/2025',
    description: 'We are excited to announce our Annual Sports Day! All students are encouraged to participate in various sporting activities. Parents are welcome to attend and cheer for their children.',
    fullContent: 'We are excited to announce our Annual Sports Day! All students are encouraged to participate in various sporting activities. Parents are welcome to attend and cheer for their children. Registration forms are available at the front office. Please ensure your child brings sports attire and water bottles. Event starts at 9:00 AM sharp.\n\nEvent Schedule:\n• Opening Ceremony: 9:00 AM\n• Track Events: 9:30 AM - 12:00 PM\n• Field Events: 1:00 PM - 3:00 PM\n• Prize Distribution: 3:30 PM\n\nRegistration deadline: February 10th',
    isRead: false,
  },
  {
    id: '2',
    title: 'Parent-Teacher Conference Scheduled',
    emoji: '📚',
    priority: 'Urgent',
    category: 'Academic',
    author: 'Academic Coordinator',
    date: '10/01/2025',
    description: 'Parent-Teacher conferences have been scheduled for January 25-27. Please book your slot through the school portal.',
    fullContent: 'Parent-Teacher conferences have been scheduled for January 25-27. Please book your slot through the school portal. Discuss your child\'s academic progress, behavior, and any concerns you might have. Each session is 15 minutes long.\n\nBooking Instructions:\n1. Visit the school portal\n2. Select your preferred time slot\n3. Confirm your appointment\n\nImportant: Please arrive 5 minutes early for your scheduled appointment.',
    isRead: true,
  },
  {
    id: '3',
    title: 'Transportation Route Changes',
    emoji: '🚌',
    priority: 'Medium',
    category: 'Transportation',
    author: 'Transport Manager',
    date: '12/01/2025',
    description: 'Due to road construction on Maple Street, Bus Route #7 will be temporarily modified. The new route will include an additional stop at Pine Avenue.',
    fullContent: 'Due to road construction on Maple Street, Bus Route #7 will be temporarily modified. The new route will include an additional stop at Pine Avenue. Please note the revised pickup times. Changes effective from January 20th to March 1st.\n\nRevised Schedule:\n• Pine Avenue: 7:45 AM\n• Oak Street: 7:50 AM\n• Elm Drive: 7:55 AM\n• School Arrival: 8:10 AM\n\nFor questions, contact the transport office.',
    isRead: false,
  },
  {
    id: '4',
    title: 'New Lunch Menu Options Available',
    emoji: '🍕',
    priority: 'Low',
    category: 'Cafeteria',
    author: 'Cafeteria Manager',
    date: '08/01/2025',
    description: 'We\'re excited to introduce new healthy lunch options starting Monday. The menu now includes vegetarian and gluten-free choices.',
    fullContent: 'We\'re excited to introduce new healthy lunch options starting Monday. The menu now includes vegetarian and gluten-free choices. Pre-orders are recommended to ensure availability.\n\nNew Options:\n• Quinoa Buddha Bowl\n• Grilled Chicken Wrap\n• Vegetarian Pizza\n• Gluten-Free Pasta\n• Fresh Fruit Smoothies\n\nPre-order through the school app by 9 AM daily.',
    isRead: false,
  },
  {
    id: '5',
    title: 'Winter Holiday Schedule',
    emoji: '❄️',
    priority: 'Medium',
    category: 'Holiday',
    author: 'Administration',
    date: '05/01/2025',
    description: 'School will be closed for winter holidays from December 23rd to January 6th. Classes resume on January 7th.',
    fullContent: 'School will be closed for winter holidays from December 23rd to January 6th. Classes resume on January 7th.\n\nImportant Dates:\n• Last day of classes: December 22nd\n• Winter break begins: December 23rd\n• School reopens: January 7th\n• Make-up classes (if needed): January 8th\n\nEnjoy your holidays and stay safe!',
    isRead: true,
  },
];

const categoryData = [
  { label: 'All Categories', value: 'All Categories' },
  { label: 'Academic', value: 'Academic' },
  { label: 'Events', value: 'Events' },
  { label: 'Transportation', value: 'Transportation' },
  { label: 'Cafeteria', value: 'Cafeteria' },
  { label: 'Holiday', value: 'Holiday' },
];

const priorityData = [
  { label: 'All Priorities', value: 'All Priorities' },
  { label: 'Urgent', value: 'Urgent' },
  { label: 'High', value: 'High' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Low', value: 'Low' },
];

export default function AnnouncementsScreen() {
  const [announcements, setAnnouncements] = useState(mockAnnouncements);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriority, setSelectedPriority] = useState('All Priorities');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const unreadCount = announcements.filter(a => !a.isRead).length;

  const toggleExpanded = (id: string) => {
    setAnnouncements(prev =>
      prev.map(announcement =>
        announcement.id === id
          ? { ...announcement, isExpanded: !announcement.isExpanded }
          : announcement
      )
    );
  };

  const toggleRead = (id: string) => {
    setAnnouncements(prev =>
      prev.map(announcement =>
        announcement.id === id
          ? { ...announcement, isRead: !announcement.isRead }
          : announcement
      )
    );
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         announcement.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || announcement.category === selectedCategory;
    const matchesPriority = selectedPriority === 'All Priorities' || announcement.priority === selectedPriority;
    const matchesUnread = !showUnreadOnly || !announcement.isRead;
    
    return matchesSearch && matchesCategory && matchesPriority && matchesUnread;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return '#EF4444';
      case 'Urgent': return '#DC2626';
      case 'Medium': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Events': return '#8B5CF6';
      case 'Academic': return '#06B6D4';
      case 'Transportation': return '#10B981';
      case 'Cafeteria': return '#F59E0B';
      case 'Holiday': return '#EC4899';
      default: return '#6B7280';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>

        <AppHeader />
      {/* Header */}
     

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search announcements..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.filterRow}>
          <View style={styles.dropdownContainer}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelectedText}
              data={categoryData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="All Categories"
              value={selectedCategory}
              onChange={item => setSelectedCategory(item.value)}
              containerStyle={styles.dropdownList}
              itemTextStyle={styles.dropdownItemText}
              activeColor="#F3F4F6"
            />
          </View>

          <View style={styles.dropdownContainer}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelectedText}
              data={priorityData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="All Priorities"
              value={selectedPriority}
              onChange={item => setSelectedPriority(item.value)}
              containerStyle={styles.dropdownList}
              itemTextStyle={styles.dropdownItemText}
              activeColor="#F3F4F6"
            />
          </View>
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Show unread only</Text>
          <Switch
            value={showUnreadOnly}
            onValueChange={setShowUnreadOnly}
            trackColor={{ false: '#E5E7EB', true: '#DBEAFE' }}
            thumbColor={showUnreadOnly ? '#3B82F6' : '#F3F4F6'}
          />
        </View>
      </View>

      {/* Announcements List */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {filteredAnnouncements.map((announcement) => (
          <View key={announcement.id} style={styles.announcementCard}>
            <View style={styles.cardHeader}>
              <View style={styles.titleRow}>
                <Text style={styles.emoji}>{announcement.emoji}</Text>
                <Text style={styles.title}>{announcement.title}</Text>
                {!announcement.isRead && <View style={styles.unreadDot} />}
              </View>

              <View style={styles.tagsRow}>
                <View style={[styles.priorityTag, { backgroundColor: getPriorityColor(announcement.priority) }]}>
                  <Text style={styles.priorityText}>{announcement.priority}</Text>
                </View>
                <View style={[styles.categoryTag, { backgroundColor: getCategoryColor(announcement.category) }]}>
                  <Text style={styles.categoryText}>{announcement.category}</Text>
                </View>
              </View>

              <Text style={styles.authorDate}>
                By {announcement.author} • {announcement.date}
              </Text>
            </View>

            <ReadMoreText text={announcement.fullContent} limit={150}>

            </ReadMoreText>

       

            <View style={styles.cardFooter}>
              <TouchableOpacity 
                style={styles.statusButton}
                onPress={() => toggleRead(announcement.id)}
              >
                <View style={[
                  styles.statusIndicator, 
                  { backgroundColor: announcement.isRead ? '#10B981' : '#6B7280' }
                ]} />
                <Text style={[styles.statusText, { color: announcement.isRead ? '#10B981' : '#6B7280' }]}>
                  {announcement.isRead ? 'Read' : 'Unread'}
                </Text>
              </TouchableOpacity>
              
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Share2 size={16} color="#6B7280" />
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Bookmark size={16} color="#6B7280" />
                  <Text style={styles.actionText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: '#F1F5F9',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 12,
  },
  notificationBadge: {
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  notificationText: {
    fontSize: 12,
    color: '#DC2626',
    fontWeight: '600',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  filtersContainer: {
    padding: 20,
    backgroundColor: '#F1F5F9',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 1000,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#111827',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    zIndex: 1000,
  },
  dropdownContainer: {
    flex: 0.48,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownPlaceholder: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  dropdownSelectedText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#374151',
    paddingVertical: 4,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
    marginLeft: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  priorityTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  categoryTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  authorDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  readMore: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
    marginRight: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
});