import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, Dimensions } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const { width } = Dimensions.get("window");

export default function OTPScreen() {
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(90); // 1 min 30 sec

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    const formatTime = (seconds: number) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    const handleSubmit = () => {
        Keyboard.dismiss();
        alert(`OTP Entered: ${otp}`);
    };
    
 const dismissKeyboard = () => Keyboard.dismiss();

    return (
        <View style={styles.screen} onTouchStart={dismissKeyboard}>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <ChevronLeft size={24} color="#fff" />
            </TouchableOpacity>
            {/* Main Card */}
            <View style={styles.card}>
                {/* Title */}
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Authentication</Text>
                    <View style={styles.dot} />
                </View>

                {/* Subtitle */}
                <Text style={styles.subtitle}>
                    Enter the authentication code sent to the phone xxx-xxx-xxxx
                </Text>

                {/* Label */}
                <Text style={styles.label}>Verification Code</Text>

                {/* OTP Input */}
                <View style={{ marginBottom: 20 }}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor="#007BFF"
                        autoFocus={true}
                        focusStickBlinkingDuration={400}
                        onTextChange={(text) => {
                            // Only accept numbers
                            console.log("OTP Input:", text);
                            const numericValue = text.replace(/[^0-9]/g, "");
                            setOtp(numericValue);
                            console.log("Numeric OTP:", numericValue);
                        }}
                         onFilled={(text) => {
                            // Only accept numbers
                            console.log("OTP Input:", text);
                            const numericValue = text.replace(/[^0-9]/g, "");
                            setOtp(numericValue);
                            console.log("Numeric OTP:", numericValue);
                        }}
                        textInputProps={{
                            keyboardType: "number-pad",
                        }}
                        theme={{
                            containerStyle: { alignSelf: "flex-start" },

                            pinCodeContainerStyle: {
                                backgroundColor: "#F5F5F5",
                                borderRadius: 8,
                                width: width * 0.15,
                                height: width * 0.15,
                                borderWidth: 1,
                                borderColor: "#ddd",

                            },
                            pinCodeTextStyle: { color: "#000", fontSize: 20, fontWeight: "600" },
                            focusStickStyle: { backgroundColor: "#007BFF" },
                        }}
                    />
                </View>

                {/* Resend */}
                <TouchableOpacity
                    onPress={() => timer === 0 && setTimer(90)}
                    disabled={timer !== 0}
                >
                    <Text style={styles.resendText}>
                        Didn’t receive the code?{" "}
                        <Text style={styles.resendLink}>
                            {timer === 0 ? "Resend" : `Resend in ${formatTime(timer)}`}
                        </Text>
                    </Text>
                </TouchableOpacity>

                {/* Verify Button */}
                <TouchableOpacity
                    style={[styles.submitButton, otp.length < 4 && { opacity: 0.6 }]}
                    disabled={otp.length < 4}
                    onPress={handleSubmit}
                >
                    <Text style={styles.submitText}>Verify OTP</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F1F5F9",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        padding: 8,
        backgroundColor: "#007BFF",
        borderRadius: 10,
    },
    card: {
        backgroundColor: "#F1F5F9",
        width: "100%",
        borderRadius: 20,
        padding: 20,
        // shadowColor: "#000",
        // shadowOpacity: 0.08,
        // shadowRadius: 8,
        // shadowOffset: { width: 0, height: 4 },
        // elevation: 0,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#007BFF",
        marginLeft: 5,
    },
    subtitle: {
        color: "#666",
        fontSize: 14,
        marginBottom: 20,
    },
    label: {
        color: "#000",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
    },
    resendText: {
        color: "#666",
        fontSize: 14,
        marginBottom: 20,
    },
    resendLink: {
        color: "#007BFF",
        fontWeight: "500",
    },
    submitButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    submitText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    footer: {
        color: "#666",
        fontSize: 14,
        textAlign: "center",
    },
    footerLink: {
        color: "#007BFF",
        fontWeight: "500",
    },
});
