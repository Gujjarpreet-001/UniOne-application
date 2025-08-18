export interface School {
  id: string;
  name: string;
  location: string;
  address: string;
  image: string;
  badge: 'Premium' | 'Elite' | 'Excellence';
  established: number;
  students: string;
  board: string;
  keyFeatures: string[];
  phone: string;
  email: string;
  website: string;
  rating: number;
  isFavorite?: boolean;
}
export interface SchoolFilters {
  board?: string[];
  badge?: string[];
  location?: string;
  establishedRange?: [number, number];
}

// Default export of a dummy React component to satisfy routing requirements
import React from 'react';

const SchoolTypeComponent: React.FC = () => null;

export default SchoolTypeComponent;