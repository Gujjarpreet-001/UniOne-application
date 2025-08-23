import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Calendar, Clock } from 'lucide-react-native';
import { ClassTimelineCard } from '@/components/class_timeline_card';
import { DaySelector } from '@/components/date_selector';
import { scheduleData } from '@/data/mobileScheduleData';
import AppHeader from '@/components/common_header';

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState('Tue');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const selectedDayData = scheduleData.find(day => day.dayShort === selectedDay);
  const classes = selectedDayData?.classes || [];

  const isCurrentClass = (startTime: string, endTime: string) => {
    const [startHour, startMinute] = startTime.split(':').map(num => parseInt(num));
    const [endHour, endMinute] = endTime.split(':').map(num => parseInt(num));
    
    const currentTotalMinutes = currentHour * 60 + currentMinute;
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;
    
    return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes;
  };

  return (
    <SafeAreaView style={styles.container}>
        <AppHeader />
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>My schedule</Text>
       
        </View>
        
        <DaySelector
          selectedDay={selectedDay}
          onDaySelect={(day: string)=>{
            console.log(`${day}`);
            setSelectedDay(day);
          }}
        />
      </View>
      
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {classes.map((classItem, index) => {
          const isCurrent = isCurrentClass(classItem.startTime, classItem.endTime);
          const isNext = index === 0 && !isCurrent; // Simple logic for "Now" indicator
          
          return (
            <View key={index} style={styles.classContainer}>
              {isNext && (
                <View style={styles.nowIndicator}>
                  <Text style={styles.nowText}>Now</Text>
                  <View style={styles.nowLine} />
                </View>
              )}
              
              <ClassTimelineCard
                classData={classItem}
                isCurrent={isCurrent}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  calendarButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  classContainer: {
    marginBottom: 16,
  },
  nowIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 8,
  },
  nowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginRight: 12,
  },
  nowLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
});