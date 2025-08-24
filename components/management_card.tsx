import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  LucideIcon } from 'lucide-react-native';

interface ManagementCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

export function ManagementCard({ title, subtitle, icon: Icon, color }: ManagementCardProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon size={32} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
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
    minHeight: 120,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 12,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
});