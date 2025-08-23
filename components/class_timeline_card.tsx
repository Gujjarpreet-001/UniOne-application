import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Clock } from 'lucide-react-native';
import { MobileClassData } from '@/types/mobileScheduleType';

interface ClassTimelineCardProps {
  classData: MobileClassData;
  isCurrent?: boolean;
}

export function ClassTimelineCard({ classData, isCurrent = false }: ClassTimelineCardProps) {
  return (
    <View style={[
      styles.card,
      isCurrent && styles.currentCard
    ]}>
      <View style={styles.timeColumn}>
        <View style={styles.timeContainer}>
          <Clock size={16} color={isCurrent ? "#FFF" : "#666"} />
        </View>
        <Text style={[
          styles.startTime,
          isCurrent && styles.currentText
        ]}>
          {classData.startTime}
        </Text>
        <View style={styles.timeDivider}>
          <View style={[
            styles.dot,
            isCurrent && styles.currentDot
          ]} />
          <View style={[
            styles.line,
            isCurrent && styles.currentLine
          ]} />
          <View style={[
            styles.dot,
            isCurrent && styles.currentDot
          ]} />
        </View>
        <Text style={[
          styles.endTime,
          isCurrent && styles.currentText
        ]}>
          {classData.endTime}
        </Text>
      </View>
      
      <View style={styles.contentColumn}>
        <Text style={[
          styles.subject,
          isCurrent && styles.currentText
        ]}>
          {classData.subject}
        </Text>
        <Text style={[
          styles.location,
          isCurrent && styles.currentLocationText
        ]}>
          {classData.location}
        </Text>
        
        <View style={styles.teacherRow}>
          <Image
            source={{ uri: classData.teacherAvatar }}
            style={styles.avatar}
          />
          <Text style={[
            styles.teacherName,
            isCurrent && styles.currentText
          ]}>
            {classData.teacherName}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  currentCard: {
    backgroundColor: '#86EFAC',
  },
  timeColumn: {
    alignItems: 'center',
    marginRight: 20,
    minWidth: 80,
  },
  timeContainer: {
    marginBottom: 8,
  },
  startTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  timeDivider: {
    alignItems: 'center',
    marginVertical: 8,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#DDD',
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: '#DDD',
    marginVertical: 2,
  },
  currentDot: {
    backgroundColor: '#FFF',
  },
  currentLine: {
    backgroundColor: '#FFF',
  },
  endTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
  contentColumn: {
    flex: 1,
  },
  subject: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  currentLocationText: {
    color: '#000',
    opacity: 0.8,
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  currentText: {
    color: '#000',
  },
});