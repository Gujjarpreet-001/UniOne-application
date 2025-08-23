import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface DaySelectorProps {
  selectedDay: string;
  onDaySelect: (day: string) => void;
}

const days = [
  { short: 'Mon', date: '18' },
  { short: 'Tue', date: '19' },
  { short: 'Wed', date: '20' },
  { short: 'Thu', date: '21' },
  { short: 'Fri', date: '22' },
];

export function DaySelector({ selectedDay, onDaySelect }: DaySelectorProps) {
  return (
    <View style={styles.container}>
      {days.map((day) => (
        <TouchableOpacity
          key={day.short}
          style={[
            styles.dayButton,
            selectedDay === day.short && styles.selectedDayButton,
          ]}
          onPress={() => onDaySelect(day.short)}
        >
          <Text
            style={[
              styles.dayText,
              selectedDay === day.short && styles.selectedDayText,
            ]}
          >
            {day.short}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDay === day.short && styles.selectedDateText,
            ]}
          >
            {day.date}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  dayButton: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedDayButton: {
    backgroundColor: '#8B7CF6',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 2,
  },
  selectedDayText: {
    color: '#FFF',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectedDateText: {
    color: '#FFF',
  },
});