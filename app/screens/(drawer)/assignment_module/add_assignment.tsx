import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    
    TextInput,
    Alert,
    Platform,
} from 'react-native';
import { Plus, Calendar, Star, BookOpen, User, X } from 'lucide-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

interface FormData {
    title: string;
    subject: string;
    description: string;
    dueDate: Date;
    priority: string;
    points: string;
    student: string;
}

const priorityOptions = [
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
];

const subjectOptions = [
    { label: 'English', value: 'English' },
    { label: 'Mathematics', value: 'Mathematics' },
    { label: 'Science', value: 'Science' },
    { label: 'History', value: 'History' },
    { label: 'Geography', value: 'Geography' },
    { label: 'Physics', value: 'Physics' },
    { label: 'Chemistry', value: 'Chemistry' },
    { label: 'Biology', value: 'Biology' },
];

const studentOptions = [
    { label: 'Rohan Gupta', value: 'Rohan Gupta' },
    { label: 'Arjun Kumar', value: 'Arjun Kumar' },
    { label: 'Kavya Patel', value: 'Kavya Patel' },
    { label: 'Isha Joshi', value: 'Isha Joshi' },
    { label: 'Priya Sharma', value: 'Priya Sharma' },
    { label: 'Vikram Singh', value: 'Vikram Singh' },
    { label: 'Ananya Reddy', value: 'Ananya Reddy' },
    { label: 'Rahul Mehta', value: 'Rahul Mehta' },
];

export default function AddAssignmentScreen() {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        subject: '',
        description: '',
        dueDate: new Date(),
        priority: 'medium',
        points: '',
        student: '',
    });

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Assignment title is required';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }

        if (!formData.points.trim()) {
            newErrors.points = 'Points are required';
        } else if (isNaN(Number(formData.points)) || Number(formData.points) <= 0) {
            newErrors.points = 'Points must be a valid positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCreateAssignment = () => {
        if (validateForm()) {
            Alert.alert(
                'Success',
                'Assignment created successfully!',
                [
                    {
                        text: 'OK',
                        onPress: () => router.back(),
                    },
                ]
            );
        }
    };

    const handleCancel = () => {
        router.back();
    };

    const onDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setFormData(prev => ({ ...prev, dueDate: selectedDate }));
        }
    };

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    const InputField = ({
        label,
        value,
        onChangeText,
        placeholder,
        multiline = false,
        error,
        required = false
    }: {
        label: string;
        value: string;
        onChangeText: (text: string) => void;
        placeholder: string;
        multiline?: boolean;
        error?: string;
        required?: boolean;
    }) => (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
                {label} {required && <Text style={styles.required}>*</Text>}
            </Text>
            <TextInput
                style={[
                    multiline ? styles.textArea : styles.textInput,
                    error ? styles.inputError : null,
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                multiline={multiline}
                numberOfLines={multiline ? 4 : 1}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );

    const DropdownField = ({
        label,
        data,
        value,
        onChange,
        placeholder,
        icon,
        required = false
    }: {
        label: string;
        data: any[];
        value: string;
        onChange: (item: any) => void;
        placeholder: string;
        icon: React.ReactNode;
        required?: boolean;
    }) => (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
                {label} {required && <Text style={styles.required}>*</Text>}
            </Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                renderLeftIcon={() => (
                    <View style={styles.dropdownIcon}>{icon}</View>
                )}
            />
        </View>
    );

    return (
        <SafeAreaView style={[styles.container,]} edges={['bottom']}>
        
            <View style={[styles.header,{paddingTop:Platform.OS == 'android'?useSafeAreaInsets().top+20:useSafeAreaInsets().top+20}]}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={handleCancel} style={styles.closeButton}>
                        <X size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerTitle}>Create New Assignment</Text>
                        <Text style={styles.headerSubtitle}>Add assignment details and requirements</Text>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <View style={styles.formRow}>
                        <View style={styles.formColumn}>
                            <InputField
                                label="Assignment Title"
                                value={formData.title}
                                onChangeText={(text) => setFormData(prev => ({ ...prev, title: text }))}
                                placeholder="Enter assignment title"
                                error={errors.title}
                                required
                            />
                        </View>
                        <View style={styles.formColumn}>
                            <InputField
                                label="Subject"
                                value={formData.subject}
                                onChangeText={(text) => setFormData(prev => ({ ...prev, subject: text }))}
                                placeholder="Enter subject"
                                error={errors.subject}
                                required
                            />
                        </View>
                    </View>

                    <InputField
                        label="Description"
                        value={formData.description}
                        onChangeText={(text) => setFormData(prev => ({ ...prev, description: text }))}
                        placeholder="Detailed assignment description and instructions"
                        multiline
                        error={errors.description}
                        required
                    />

                    <View style={styles.formRow}>
                        <View style={styles.formColumn}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>
                                    Due Date <Text style={styles.required}>*</Text>
                                </Text>
                                <TouchableOpacity
                                    style={styles.datePickerButton}
                                    onPress={() => setShowDatePicker(true)}
                                >
                                    <Calendar size={16} color="#6B7280" />
                                    <Text style={styles.datePickerText}>
                                        {formatDate(formData.dueDate)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.formColumn}>
                            <DropdownField
                                label="Priority"
                                data={priorityOptions}
                                value={formData.priority}
                                onChange={(item) => setFormData(prev => ({ ...prev, priority: item.value }))}
                                placeholder="Select priority"
                                icon={<Star size={16} color="#6B7280" />}
                            />
                        </View>
                    </View>

                    <View style={styles.formRow}>
                        <View style={styles.formColumn}>
                            <InputField
                                label="Points"
                                value={formData.points}
                                onChangeText={(text) => setFormData(prev => ({ ...prev, points: text }))}
                                placeholder="100"
                                error={errors.points}
                                required
                            />
                        </View>
                        <View style={styles.formColumn}>
                            <DropdownField
                                label="Assign to Student"
                                data={[{ label: 'All Students', value: '' }, ...studentOptions]}
                                value={formData.student}
                                onChange={(item) => setFormData(prev => ({ ...prev, student: item.value }))}
                                placeholder="Select student (Optional)"
                                icon={<User size={16} color="#6B7280" />}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateAssignment}>
                        <Plus size={20} color="#FFFFFF" />
                        <Text style={styles.createButtonText}>Create Assignment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {showDatePicker && (
                <DateTimePicker
                    value={formData.dueDate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onDateChange}
                    minimumDate={new Date()}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F9',
        margin:0
    },
    header: {
        backgroundColor: '#8B5CF6',
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingTop: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    headerTextContainer: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 2,
    },
    content: {
        flex: 1,
    },
    form: {
        padding: 20,
    },
    formRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 8,
    },
    formColumn: {
        flex: 1,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    required: {
        color: '#DC2626',
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#374151',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    textArea: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#374151',
        minHeight: 100,
        textAlignVertical: 'top',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    inputError: {
        borderColor: '#DC2626',
    },
    errorText: {
        fontSize: 12,
        color: '#DC2626',
        marginTop: 4,
    },
    dropdown: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    dropdownIcon: {
        marginRight: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#9CA3AF',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#374151',
        fontWeight: '500',
    },
    datePickerButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
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
    datePickerText: {
        fontSize: 16,
        color: '#374151',
        fontWeight: '500',
        marginLeft: 8,
    },
    buttonContainer: {
        padding: 20,
        paddingBottom: 40,
        gap: 12,
    },
    createButton: {
        backgroundColor: '#8B5CF6',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#8B5CF6',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    createButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    cancelButton: {
        backgroundColor: '#E5E7EB',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: '#6B7280',
        fontSize: 16,
        fontWeight: '600',
    },
});
