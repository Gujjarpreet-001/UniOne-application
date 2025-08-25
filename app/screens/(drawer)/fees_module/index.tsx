import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppHeader from "@/components/common_header";
import { SafeAreaView } from "react-native-safe-area-context";

const summaryData = [
    { id: "1", title: "Total Fees", value: "₹560950.00", icon: "creditcard", color: "#2563eb", bg: "#e0ecff" },
    { id: "2", title: "Paid", value: "₹194900.00", icon: "checkcircle", color: "#22c55e", bg: "#dcfce7" },
    { id: "3", title: "Pending", value: "₹364400.00", icon: "clockcircle", color: "#eab308", bg: "#fef9c3" },
    { id: "4", title: "Overdue", value: "₹1650.00", icon: "closecircle", color: "#ef4444", bg: "#fee2e2" },
];

const feeRecords = [
    { id: "1", student: "Jake Wilson", feeType: "Tuition Fee", amount: "₹2500.00", dueDate: "2025-03-01", status: "paid" },
    { id: "2", student: "Lily Brown", feeType: "Tuition Fee", amount: "₹2500.00", dueDate: "2025-03-01", status: "pending" },
    { id: "3", student: "Emma Smith", feeType: "Tuition Fee", amount: "₹2500.00", dueDate: "2025-03-01", status: "overdue" },
];

export default function FeesScreen() {
    return (
        <SafeAreaView style={styles.container} edges={[]}>
            <AppHeader />
            {/* Top Summary Cards */}
            <View style={styles.summaryRow}>
                {summaryData.map((item) => (
                    <View key={item.id} style={[styles.card, { backgroundColor: item.bg }]}>
                        <AntDesign name={item.icon as any} size={22} color={item.color} style={styles.cardIcon} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardValue}>{item.value}</Text>
                    </View>
                ))}
            </View>

            {/* Fee Records */}
            <Text style={styles.sectionTitle}>Fee Records</Text>
            <FlatList
                data={feeRecords}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.recordCard}>
                        {/* Student + Fee Type */}
                        <View style={styles.rowBetween}>
                            <Text style={styles.student}>{item.student}</Text>
                            <Text style={styles.amount}>{item.amount}</Text>
                        </View>

                        <Text style={styles.feeType}>{item.feeType}</Text>

                        {/* Due Date + Status */}
                        <View style={styles.rowBetween}>
                            <Text style={styles.date}>Due: {item.dueDate}</Text>
                            <View style={styles.statusBox}>
                                {item.status === "paid" && (
                                    <View style={[styles.statusTag, { backgroundColor: "#dcfce7" }]}>
                                        <AntDesign name="checkcircle" size={14} color="#22c55e" />
                                        <Text style={[styles.statusText, { color: "#22c55e" }]}>Paid</Text>
                                    </View>
                                )}
                                {item.status === "pending" && (
                                    <View style={[styles.statusTag, { backgroundColor: "#fef9c3" }]}>
                                        <AntDesign name="clockcircle" size={14} color="#eab308" />
                                        <Text style={[styles.statusText, { color: "#eab308" }]}>Pending</Text>
                                    </View>
                                )}
                                {item.status === "overdue" && (
                                    <View style={[styles.statusTag, { backgroundColor: "#fee2e2" }]}>
                                        <AntDesign name="closecircle" size={14} color="#ef4444" />
                                        <Text style={[styles.statusText, { color: "#ef4444" }]}>Overdue</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F5F9",

    },
    summaryRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20,
        marginHorizontal: 20,
        marginTop: 10
    },
    card: {
        width: "48%",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    cardIcon: {
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 4,
    },
    cardValue: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#111827",
        marginLeft: 20
    },
    recordCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 20
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    student: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
    },
    feeType: {
        fontSize: 13,
        color: "#6b7280",
        marginBottom: 8,
    },
    amount: {
        fontSize: 15,
        fontWeight: "700",
        color: "#111827",
    },
    date: {
        fontSize: 13,
        color: "#6b7280",
    },
    statusBox: {
        alignItems: "flex-end",
    },
    statusTag: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 4,
    },
});
