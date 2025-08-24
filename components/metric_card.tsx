import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  LucideIcon } from 'lucide-react-native';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  color: string;
  changePercent?: string;
  isPositive?: boolean;
}

export function MetricCard({ title, value, subtitle, icon: Icon, color, changePercent, isPositive }: MetricCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
          <Icon size={20} color={color} />
        </View>
        {changePercent && (
          <Text style={[styles.changePercent, { color: isPositive ? '#10B981' : '#EF4444' }]}>
            {changePercent}
          </Text>
        )}
      </View>
      
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
      {/* {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>
      } */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
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
    minHeight: 140,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePercent: {
    fontSize: 12,
    fontWeight: '600',
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
});