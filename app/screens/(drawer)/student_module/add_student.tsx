// AddStudentScreen.tsx
import AppHeader from "@/components/common_header";
import CustomTextInput from "@/components/custom_textinput";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown"; // Correct import

export default function AddStudentScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [parentContact, setParentContact] = useState("");
    const [grade, setGrade] = useState<string | undefined>(undefined);

    const gradeList = [
        { label: "Class 1", value: "1" },
        { label: "Class 2", value: "2" },
        { label: "Class 3", value: "3" },
        { label: "Class 4", value: "4" },
        { label: "Class 5", value: "5" },
        { label: "Class 6", value: "6" },
        { label: "Class 7", value: "7" },
        { label: "Class 8", value: "8" },
        { label: "Class 9", value: "9" },
        { label: "Class 10", value: "10" },

    ];

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader showLeading={true} showDrawer={false} leadingComponent={
                <TouchableOpacity onPress={() => router.back()}>
                    <ChevronLeft size={28} color={'#3B82F6'} />
                </TouchableOpacity>
            } />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Title style={styles.title}>Add New Student</Title>

                <CustomTextInput
                    label="Name"

                    value={name}
                    onChangeText={setName}



                />

                <Dropdown
                    label="Grade"
                    placeholder="Select Grade"
                    options={gradeList}
                    value={grade}
                    onSelect={setGrade}
                    mode="outlined"
                    hideMenuHeader={true}
                    menuContentStyle={{backgroundColor: "#F1F5F9"}}
                    
                    
                />

                <CustomTextInput
                    label="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <CustomTextInput
                    label="Parent Contact"
                    keyboardType="phone-pad"
                    value={parentContact}
                    onChangeText={setParentContact}
                />

                <View style={styles.buttonRow}>
                    <Button
                        mode="outlined"
                        style={styles.cancelBtn}
                        textColor="#3B82F6"
                        onPress={() => console.log("Cancelled")}
                    >
                        Cancel
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.addBtn}
                        onPress={() => console.log("Add Student")}
                    >
                        Add Student
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F1F5F9" },
    scrollContent: { padding: 16 },
    title: { fontSize: 22, marginBottom: 20, fontWeight: "600", color: "#111827" },
    input: { marginBottom: 14, backgroundColor: "#FFF", color: "#111827" },
    buttonRow: { flexDirection: "row", justifyContent: "flex-end", marginTop: 24 },
    cancelBtn: { marginRight: 12 },
    addBtn: { backgroundColor: "#3b82f6" },
});
