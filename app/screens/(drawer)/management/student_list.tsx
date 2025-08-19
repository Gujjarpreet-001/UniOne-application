// UserListScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StudentCard, { Student } from "@/components/student_list_card";
import AppHeader from "@/components/common_header";
import CustomDropdown from "@/components/custom_dropdown";
import { router } from "expo-router";


const initialStudents: Student[] = [
  {
    id: '1',
    name: 'Emma Smith',
    grade: '10th Grade',
    section: 'A',
    email: 'emma.smith@school.com',
    parentContact: '9876543210',
    role: 'Student Leader',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '2',
    name: 'Jake Wilson',
    grade: '9th Grade',
    section: 'A',

    email: 'jake.wilson@school.com',
    parentContact: '9876543212',
    role: 'Regular Student',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '3',
    name: 'Lily Brown',
    grade: '10th Grade',
    section: 'A',

    email: 'lily.brown@school.com',
    parentContact: '9876543213',
    role: 'Class Monitor',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '4',
    name: 'shreyas',
    grade: 'Class B',
    section: 'A',

    email: 'shreyas@gmail.com',
    parentContact: '9309811039',
    role: 'Regular Student',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '5',
    name: 'Naman W',
    grade: '10th Grade',
    section: 'A',

    email: 'naman.w@school.com',
    parentContact: '9876543210',
    role: 'Sports Captain',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '6',
    name: 'Aniket salvi',
    grade: '9th Grade',
    section: 'A',

    email: 'salvi.aniket@school.com',
    parentContact: '9876543212',
    role: 'Regular Student',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '7',
    name: 'Priyanka',
    grade: '10th Grade',
    section: 'A',

    email: 'priyanka@school.com',
    parentContact: '9876543213',
    role: 'Prefect',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '8',
    name: 'omkar',
    grade: '9th B',
    section: 'A',

    email: 'omkar@gmail.com',
    parentContact: '9392932999',
    role: 'Regular Student',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
  {
    id: '9',
    name: 'akash',
    grade: '10th Grade',
    section: 'A',

    email: 'akashgadade@gmail.com',
    parentContact: '9887890987',
    role: 'Regular Student',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  },
];

const gradeOptions = [
  'All Classes',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade',
  '10th Grade',
  'Class B',
  '9th B',
];




export default function StudentListScreen() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedClass, setSelectedClass] = useState('All Classes');


  return (
    <SafeAreaView style={styles.container} >
      <AppHeader />
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentCard student={item} onDelete={() => { }} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      {/* Floating Action Button */}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/screens/management/add_student")} //  navigate 
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 0,

  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
