import { router } from 'expo-router';
import { Eye, EyeOff, Lock, Mail, Smartphone } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';





export default function LoginScreen1() {
    const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
      
        if(loginMethod === 'phone'){
              if (!phone) {
            Alert.alert('Error', 'Please enter your phone number');
            return;
        }
            router.push('/screens/auth/otp_page');
        }else{
              if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
       router.push('/screens/(main_tabs)');
        }
 
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F1F5F9" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logo}>
                                <Text style={styles.logoText}>U</Text>
                            </View>
                            <Text style={styles.brandText}>
                                My <Text style={styles.brandAccent}>Unione</Text>
                            </Text>
                        </View>

                        <Text style={styles.title}>Get Started now</Text>
                        <Text style={styles.subtitle}>
                            Sign in to access your UNIONE account
                        </Text>
                    </View>

                    {/* Login Method Toggle */}
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity
                            style={[styles.toggleButton, loginMethod === 'email' && styles.toggleButtonActive]}
                            onPress={() => setLoginMethod('email')}
                        >
                            <Text style={[styles.toggleText, loginMethod === 'email' && styles.toggleTextActive]}>
                                Email
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.toggleButton, loginMethod === 'phone' && styles.toggleButtonActive]}
                            onPress={() => setLoginMethod('phone')}
                        >
                            <Text style={[styles.toggleText, loginMethod === 'phone' && styles.toggleTextActive]}>
                                Phone Number
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.formContainer}>
                        {/* Email/Phone Field */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>
                                {loginMethod === 'email' ? 'Email' : 'Phone Number'}
                            </Text>
                            <View style={styles.inputWrapper}>
                                {loginMethod === 'email'?<Mail size={20} color="#9CA3AF" style={styles.inputIcon} />:
                                <Smartphone size={20} color="#9CA3AF" style={styles.inputIcon} />}
                                <TextInput
                                    style={styles.input}
                                    value={loginMethod === 'email'?email:phone}
                                    onChangeText={loginMethod == 'email'?setEmail:setPhone}
                                    placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
                                    placeholderTextColor="#9CA3AF"
                                    keyboardType={loginMethod === 'email' ? 'email-address' : 'number-pad'}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* Password Field */}
                        {loginMethod === 'email' ? <View style={styles.inputContainer}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
                                <TextInput
                                    style={[styles.input, styles.passwordInput]}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#9CA3AF"
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                            
                                >
                                    {showPassword ? <EyeOff size={20} color="#9CA3AF" /> : <Eye size={20} color="#9CA3AF" />}
                                </TouchableOpacity>
                            </View>
                        </View>
                            : null}
                    </View>


                    {/* Login Button */}
                    <TouchableOpacity
                        style={[styles.loginButton, (loginMethod === 'email'?(!email || !password):!phone) && styles.loginButtonDisabled]}
                        onPress={handleLogin}
                        disabled={loginMethod === 'email'?(!email || !password):!phone}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>






                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F9',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    header: {
        marginBottom: 32,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 32,
        height: 32,
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    brandText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    brandAccent: {
        color: '#3B82F6',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        lineHeight: 24,
    },
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: '#E5E7EB',
        borderRadius: 25,
        padding: 4,
        marginBottom: 32,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 21,
        alignItems: 'center',
    },
    toggleButtonActive: {
        backgroundColor: '#3B82F6',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    toggleText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6B7280',
    },
    toggleTextActive: {
        color: '#FFFFFF',
    },
    formContainer: {
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 0,
        marginTop: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },
    passwordInput: {
        paddingRight: 40,
    },

    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 32,
    },

    forgotText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#EF4444',
    },
    loginButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 32,
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    loginButtonDisabled: {
        backgroundColor: '#D1D5DB',
        shadowOpacity: 0,
        elevation: 0,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    dividerText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6B7280',
        marginHorizontal: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 32,
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginLeft: 12,
    },
    googleIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#4285F4',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#6B7280',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3B82F6',
    },
});

