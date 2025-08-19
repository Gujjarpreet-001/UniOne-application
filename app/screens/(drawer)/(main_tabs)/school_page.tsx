import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  RefreshControl,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { School, SchoolFilters } from '../../../../types/school';
import SchoolCard from '../../../../components/school_card';
import SearchBar from '@/components/search_bar';
import FilterModal from '@/components/filter_modal';


const schoolsData: School[] = [
  {
    id: '1',
    name: 'Delhi Public School',
    location: 'Delhi',
    address: 'Sector 12, R.K. Puram, New Delhi',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
    badge: 'Premium',
    established: 1972,
    students: '3,500+',
    board: 'CBSE',
    keyFeatures: ['Smart Classes', 'Sports Complex', 'Science Labs', 'Library'],
    phone: '+91-11-2617-9756',
    email: 'info@dpsrkp.net',
    website: 'www.dpsrkp.net',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Modern School',
    location: 'Delhi',
    address: 'Barakhamba Road, New Delhi',
    image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg',
    badge: 'Elite',
    established: 1920,
    students: '2,800+',
    board: 'CBSE',
    keyFeatures: ['Heritage Campus', 'Music & Arts', 'Swimming Pool', 'Auditorium'],
    phone: '+91-11-2331-4109',
    email: 'principal@modernschool.net',
    website: 'www.modernschool.net',
    rating: 4.7,
  },
  {
    id: '3',
    name: "St. Columba's School",
    location: 'Delhi',
    address: 'Ashok Place, New Delhi',
    image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg',
    badge: 'Excellence',
    established: 1941,
    students: '2,200+',
    board: 'ICSE',
    keyFeatures: ['Boys School', 'Cricket Ground', 'Computer Lab', 'Chapel'],
    phone: '+91-11-2336-3151',
    email: 'office@stcolumbas.org',
    website: 'www.stcolumbas.org',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Ryan International School',
    location: 'Mumbai',
    address: 'Kandivali East, Mumbai',
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
    badge: 'Premium',
    established: 1976,
    students: '4,200+',
    board: 'CBSE',
    keyFeatures: ['International Curriculum', 'Swimming Pool', 'Robotics Lab', 'Theatre'],
    phone: '+91-22-2847-6789',
    email: 'mumbai@ryangroup.org',
    website: 'www.ryangroup.org',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Cathedral & John Connon School',
    location: 'Mumbai',
    address: 'Fort, Mumbai',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    badge: 'Excellence',
    established: 1860,
    students: '3,800+',
    board: 'ICSE',
    keyFeatures: ['Heritage Building', 'Arts & Culture', 'Debate Society', 'Music Room'],
    phone: '+91-22-2266-0234',
    email: 'info@cathedral-school.com',
    website: 'www.cathedral-school.com',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Bangalore International School',
    location: 'Bangalore',
    address: 'Geddalahalli, Bangalore',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
    badge: 'Elite',
    established: 2005,
    students: '1,800+',
    board: 'IB',
    keyFeatures: ['IB Curriculum', 'Green Campus', 'Innovation Lab', 'Global Exchange'],
    phone: '+91-80-2846-5123',
    email: 'admissions@bis.edu.in',
    website: 'www.bis.edu.in',
    rating: 4.7,
  },
];

export default function DiscoverScreen() {
  const [schools, setSchools] = useState<School[]>(schoolsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SchoolFilters>({});


  const [refreshing, setRefreshing] = useState(false);



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);



  const handleVisitSchool = (school: School) => {
    Alert.alert(
      'Visit School',
      `Would you like to schedule a visit to ${school.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call School', onPress: () => { } },
        { text: 'Schedule Visit', onPress: () => { } },
      ]
    );
  };

  const handleGetInfo = (school: School) => {
    Alert.alert(
      'Get Information',
      `Request detailed information about ${school.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Download Brochure', onPress: () => { } },
        { text: 'Request Callback', onPress: () => { } },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Premier Schools</Text>
        <Text style={styles.subtitle}>
          Explore top-rated educational institutions across India that provide
          excellence in academics, extracurricular activities, and holistic
          development for your child's bright future.
        </Text>
      </View>

      <SearchBar value={searchQuery} onChangeText={(text: string) => {
        setSearchQuery(text);
      }} onFilterPress={() => {
        setShowFilters(true);
      }} />

      <FlatList
        data={schools}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SchoolCard
            school={item}
            onFavoriteToggle={(id: String) => {
              console.log(`Favorite toggled for school with id: ${id}`);
            }}
            onVisitSchool={handleVisitSchool}
            onGetInfo={handleGetInfo}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }   />
        <View  >
    <FilterModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        onApply={(selectedLocations: string[]) => {}}
      />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  scrollView: {
    flex: 1,
  },
  bottomPadding: {
    height: 20,
  },
});