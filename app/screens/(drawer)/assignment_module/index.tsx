import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    
} from 'react-native';
import { BookOpen, Calendar, Star, CreditCard as Edit3, Trash2, Plus } from 'lucide-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { router } from 'expo-router';
import AppHeader from '@/components/common_header';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Assignment {
    id: string;
    title: string;
    description: string;
    subject: string;
    dueDate: string;
    student: string;
    points: number;
    status: 'pending' | 'completed' | 'graded' | 'overdue';
    priority: 'high' | 'medium' | 'low';
    grade?: string;
}

const mockAssignments: Assignment[] = [
    {
        id: '1',
        title: 'English Essay - Environmental Conservation',
        description: 'Write a 500-word essay on the importance of environmental conservation and personal responsibility.',
        subject: 'English',
        dueDate: '12/01/2024',
        student: 'Rohan Gupta',
        points: 75,
        status: 'graded',
        priority: 'medium',
        grade: 'A',
    },
    {
        id: '2',
        title: 'Mathematics Quiz - Algebra Basics',
        description: 'Complete the algebra problems covering linear equations and basic graphing concepts.',
        subject: 'Mathematics',
        dueDate: '15/01/2024',
        student: 'Arjun Kumar',
        points: 100,
        status: 'overdue',
        priority: 'high',
    },
    {
        id: '3',
        title: 'Science Project - Renewable Energy',
        description: 'Research and create a presentation on renewable energy sources including solar, wind, and hydroelectric power.',
        subject: 'Science',
        dueDate: '20/01/2024',
        student: 'Kavya Patel',
        points: 150,
        status: 'completed',
        priority: 'medium',
    },
    {
        id: '4',
        title: 'History Timeline - Ancient Civilizations',
        description: 'Create a detailed timeline of ancient civilizations including key events, rulers, and cultural achievements.',
        subject: 'History',
        dueDate: '25/01/2024',
        student: 'Isha Joshi',
        points: 120,
        status: 'pending',
        priority: 'low',
    },
];

const statusOptions = [
    { label: 'All Status', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
    { label: 'Graded', value: 'graded' },
    { label: 'Overdue', value: 'overdue' },
];

const dueDateOptions = [
    { label: 'Due date', value: 'all' },
    { label: 'Priority', value: 'priority' },
    { label: 'Subject', value: 'subject' },

];


export default function AssignmentsScreen() {
    const [assignments] = useState<Assignment[]>(mockAssignments);
    const [statusFilter, setStatusFilter] = useState('all');
    const [dueDateFilter, setDueDateFilter] = useState('all');


    const getFilteredAssignments = () => {
        return assignments.filter(assignment => {
            const statusMatch = statusFilter === 'all' || assignment.status === statusFilter;


            return statusMatch;
        });
    };

    const filteredAssignments = getFilteredAssignments();

    const getStatusCounts = () => {
        return {
            total: assignments.length,
            pending: assignments.filter(a => a.status === 'pending').length,
            completed: assignments.filter(a => a.status === 'completed').length,
            graded: assignments.filter(a => a.status === 'graded').length,
            overdue: assignments.filter(a => a.status === 'overdue').length,
        };
    };

    const statusCounts = getStatusCounts();

    const StatusCard = ({ title, count, color, icon }: {
        title: string;
        count: number;
        color: string;
        icon: React.ReactNode;
    }) => (
        <View style={[styles.statusCard, { backgroundColor: color }]}>
            <View style={styles.statusHeader}>
                {icon}
                <Text style={styles.statusTitle}>{title}</Text>
            </View>
            <Text style={styles.statusCount}>{count}</Text>
        </View>
    );

    const PriorityBadge = ({ priority }: { priority: string }) => {
        const getPriorityStyle = () => {
            switch (priority) {
                case 'high':
                    return { backgroundColor: '#FEF2F2', color: '#DC2626' };
                case 'medium':
                    return { backgroundColor: '#FEF3C7', color: '#D97706' };
                case 'low':
                    return { backgroundColor: '#F0FDF4', color: '#16A34A' };
                default:
                    return { backgroundColor: '#F3F4F6', color: '#6B7280' };
            }
        };

        const style = getPriorityStyle();
        return (
            <View style={[styles.priorityBadge, { backgroundColor: style.backgroundColor }]}>
                <Text style={[styles.priorityText, { color: style.color }]}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                </Text>
            </View>
        );
    };

    const StatusBadge = ({ status, grade }: { status: string; grade?: string }) => {
        const getStatusStyle = () => {
            switch (status) {
                case 'completed':
                    return { backgroundColor: '#DCFCE7', color: '#16A34A', text: 'Completed' };
                case 'graded':
                    return { backgroundColor: '#DBEAFE', color: '#2563EB', text: grade ? `Grade: ${grade}` : 'Graded' };
                case 'overdue':
                    return { backgroundColor: '#FEE2E2', color: '#DC2626', text: 'Overdue' };
                case 'pending':
                    return { backgroundColor: '#FEF3C7', color: '#D97706', text: 'Pending' };
                default:
                    return { backgroundColor: '#F3F4F6', color: '#6B7280', text: 'Unknown' };
            }
        };

        const style = getStatusStyle();
        return (
            <View style={[styles.statusBadge, { backgroundColor: style.backgroundColor }]}>
                <Text style={[styles.statusBadgeText, { color: style.color }]}>
                    {style.text}
                </Text>
            </View>
        );
    };

    const AssignmentCard = ({ assignment }: { assignment: Assignment }) => {
        const getCardBorderColor = () => {
            switch (assignment.status) {
                case 'completed':
                    return '#16A34A';
                case 'graded':
                    return '#2563EB';
                case 'overdue':
                    return '#DC2626';
                default:
                    return '#E5E7EB';
            }
        };

        return (
            <View style={[styles.assignmentCard, { borderLeftColor: getCardBorderColor() }]}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardTitleRow}>
                        <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                        <View style={styles.cardActions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Edit3 size={16} color="#6B7280" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Trash2 size={16} color="#DC2626" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.badgeRow}>
                        <StatusBadge status={assignment.status} grade={assignment.grade} />
                        <PriorityBadge priority={assignment.priority} />
                    </View>
                </View>

                <Text style={styles.assignmentDescription}>{assignment.description}</Text>

                <View style={styles.assignmentDetails}>
                    <View style={styles.detailRow}>
                        <View style={styles.detailItem}>
                            <BookOpen size={14} color="#6B7280" />
                            <Text style={styles.detailText}>{assignment.subject}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Calendar size={14} color="#6B7280" />
                            <Text style={styles.detailText}>Due: {assignment.dueDate}</Text>
                        </View>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.studentText}>Student: {assignment.student}</Text>
                        <View style={styles.pointsContainer}>
                            <Star size={14} color="#F59E0B" />
                            <Text style={styles.pointsText}>{assignment.points} pts</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={[]}>
            <AppHeader />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.statusCardsContainer}>
                    <StatusCard
                        title="Total"
                        count={statusCounts.total}
                        color="#EEF2FF"
                        icon={<BookOpen size={16} color="#6366F1" />}
                    />
                    <StatusCard
                        title="Pending"
                        count={statusCounts.pending}
                        color="#FEF3C7"
                        icon={<Calendar size={16} color="#D97706" />}
                    />
                    <StatusCard
                        title="Completed"
                        count={statusCounts.completed}
                        color="#DCFCE7"
                        icon={<BookOpen size={16} color="#16A34A" />}
                    />
                    <StatusCard
                        title="Graded"
                        count={statusCounts.graded}
                        color="#E0E7FF"
                        icon={<Star size={16} color="#6366F1" />}
                    />
                    <StatusCard
                        title="Overdue"
                        count={statusCounts.overdue}
                        color="#FEE2E2"
                        icon={<Calendar size={16} color="#DC2626" />}
                    />
                </View>

                <View style={styles.filtersContainer}>
                    <View style={styles.filterRow}>
                        <View style={styles.dropdownContainer}>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={statusOptions}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="All Status"
                                value={statusFilter}
                                onChange={item => setStatusFilter(item.value)}
                                renderLeftIcon={() => (
                                    <BookOpen size={16} color="#6B7280" style={styles.dropdownIcon} />
                                )}
                            />
                        </View>
                        <View style={styles.dropdownContainer}>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={dueDateOptions}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="All Dates"
                                value={dueDateFilter}
                                onChange={item => setDueDateFilter(item.value)}
                                renderLeftIcon={() => (
                                    <Calendar size={16} color="#6B7280" style={styles.dropdownIcon} />
                                )}
                            />
                        </View>
                    </View>

                </View>

                <View style={styles.assignmentsContainer}>
                    <Text style={styles.resultsText}>
                        Showing {filteredAssignments.length} of {assignments.length} assignments
                    </Text>
                    {filteredAssignments.map((assignment) => (
                        <AssignmentCard key={assignment.id} assignment={assignment} />
                    ))}
                </View>
            </ScrollView>
            {/* Floating Action Button */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('/screens/(drawer)/assignment_module/add_assignment')} // navigate to add assignment screen
            >
                <Plus size={24} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F9',
    },

    content: {
        flex: 1,
    },
    statusCardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        flexWrap: 'wrap',
        gap: 12,
    },
    statusCard: {
        flex: 1,
        minWidth: 100,
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
    },
    statusHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    statusTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6B7280',
        marginLeft: 6,
    },
    statusCount: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1F2937',
    },
    filtersContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        gap: 12,
    },
    filterRow: {
        flexDirection: 'row',
        gap: 12,
    },
    dropdownContainer: {
        flex: 1,
    },
    dropdown: {
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
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
        fontSize: 14,
        color: '#9CA3AF',
        fontWeight: '500',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#374151',
        fontWeight: '500',
    },
    resultsText: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '500',
        marginBottom: 16,
    },
    assignmentsContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100,
    },
    assignmentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeader: {
        marginBottom: 12,
    },
    cardTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    assignmentTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        flex: 1,
        marginRight: 12,
    },
    cardActions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#F9FAFB',
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    statusBadgeText: {
        fontSize: 12,
        fontWeight: '500',
    },
    priorityBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    priorityText: {
        fontSize: 12,
        fontWeight: '500',
    },
    assignmentDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 16,
    },
    assignmentDetails: {
        gap: 8,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    detailText: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '500',
    },
    studentText: {
        fontSize: 13,
        color: '#4B5563',
        fontWeight: '500',
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    pointsText: {
        fontSize: 13,
        color: '#F59E0B',
        fontWeight: '600',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#8B5CF6', // purple accent (matches header)
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});