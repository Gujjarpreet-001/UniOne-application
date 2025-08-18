import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import { MapPin, Calendar, Users, GraduationCap, Phone, Mail, Globe, Heart, Star, CircleCheck as CheckCircle } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
import { School } from '../../types/school';


const { width } = Dimensions.get('window');
const cardWidth = width - 32;

interface SchoolCardProps {
  school: School;
  onFavoriteToggle: (schoolId: string) => void;
  onVisitSchool: (school: School) => void;
  onGetInfo: (school: School) => void;
}

export default function SchoolCard({
  school,
  onVisitSchool,
  onGetInfo,
}: SchoolCardProps) {
  const [isPressed, setIsPressed] = useState(false);
  const scale = useSharedValue(1);
  const favoriteScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));



  const handlePressIn = () => {
    setIsPressed(true);
    scale.value = withTiming(0.97, { duration: 150 });
  };

  const handlePressOut = () => {
    setIsPressed(false);
    scale.value = withTiming(1, { duration: 150 });
  };



  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Premium':
        return '#F59E0B';
      case 'Elite':
        return '#10B981';
      case 'Excellence':
        return '#8B5CF6';
      default:
        return '#6B7280';
    }
  };

  const openPhone = () => {
    Linking.openURL(`tel:${school.phone}`);
  };

  const openEmail = () => {
    Linking.openURL(`mailto:${school.email}`);
  };

  const openWebsite = () => {
    Linking.openURL(`https://${school.website}`);
  };

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: school.image }} style={styles.image} />
         
      
          <View style={styles.overlay}>
             <View style={[styles.badge, { backgroundColor: getBadgeColor(school.badge) }]}>
            <Text style={styles.badgeText}>{school.badge}</Text>
          </View>
            <Text style={styles.schoolName}>{school.name}</Text>
            <Text style={styles.schoolLocation}>{school.location}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.addressRow}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.address}>{school.address}</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Calendar size={14} color="#6B7280" />
              <Text style={styles.statLabel}>Established</Text>
              <Text style={styles.statValue}>{school.established}</Text>
            </View>
            <View style={styles.statItem}>
              <Users size={14} color="#6B7280" />
              <Text style={styles.statLabel}>Students</Text>
              <Text style={styles.statValue}>{school.students}</Text>
            </View>
            <View style={styles.statItem}>
              <GraduationCap size={14} color="#6B7280" />
              <Text style={styles.statLabel}>Board</Text>
              <Text style={styles.statValue}>{school.board}</Text>
            </View>
          </View>

          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>Key Features</Text>
            <View style={styles.featuresGrid}>
              {school.keyFeatures.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <CheckCircle size={12} color="#10B981" />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.contactRow}>
            <TouchableOpacity style={styles.contactItem} onPress={openPhone}>
              <Phone size={14} color="#3B82F6" />
              <Text style={styles.contactText}>{school.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
              <Mail size={14} color="#3B82F6" />
              <Text style={styles.contactText}>{school.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={openWebsite}>
              <Globe size={14} color="#3B82F6" />
              <Text style={styles.contactText}>{school.website}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ratingRow}>
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.rating}>{school.rating}</Text>
            <Text style={styles.ratingText}>Excellent Rating</Text>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => onVisitSchool(school)}>
              <Text style={styles.primaryButtonText}>Visit School</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => onGetInfo(school)}>
              <Text style={styles.secondaryButtonText}>Get Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
    width: cardWidth,
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
     width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  schoolName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  schoolLocation: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#E5E7EB',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },

  content: {
    padding: 16,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  address: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 8,
    flex: 1,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featuresTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 8,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 6,
  },
  featureText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#4B5563',
    marginLeft: 6,
  },
  contactRow: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#3B82F6',
    marginLeft: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginLeft: 4,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#3B82F6',
  },
});