import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  LucideIcon } from 'lucide-react-native';

interface QuickActionCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
}

export function QuickActionCard({ title, icon: Icon, color }: QuickActionCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
          <Icon size={24} color={color} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    minHeight: 80,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
});