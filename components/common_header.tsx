import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Menu, User } from 'lucide-react-native';
import { DrawerActions } from '@react-navigation/native';

const AppHeader = ({ showDrawer = true, actions, showAction = false,showLeading = false,leadingComponent }: { showDrawer?: boolean,showLeading?:boolean ,actions?: ReactNode, showAction?: boolean,leadingComponent?: ReactNode }) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View
            style={[
                styles.header,
                { paddingTop: Platform.OS === 'ios' ? insets.top : insets.top },
            ]}
        >
            {/* Menu button (only when showDrawer is true) */}
            {showDrawer && (
                <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
                    <Menu color="#3b82f6" size={24} />
                </TouchableOpacity>
            )}

              {showLeading && (
                leadingComponent
            )}

            {/* Logo container */}
            <View
                style={[
                    styles.logoContainer,
                    (showDrawer || showLeading) ? styles.centerLogo : styles.startLogo,
                ]}
            >
                <View style={styles.logo}>
                    <Text style={styles.logoText}>U</Text>
                </View>
                <Text style={styles.brandText}>
                    My <Text style={styles.brandAccent}>Unione</Text>
                </Text>


            </View>

            {/* trailing button */}
            {showAction ? actions : <TouchableOpacity style={styles.profileButton}>
                <User color="#64748b" size={24} />
            </TouchableOpacity>}
        </View>
    );
};

export default AppHeader;

const styles = StyleSheet.create({
    header: {
        marginBottom: 16,
        marginLeft: 20,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    centerLogo: {
        justifyContent: 'center',
    },
    startLogo: {
        justifyContent: 'flex-start',
    },
    menuButton: {
        padding: 8,
    },
    profileButton: {
        padding: 8,
        opacity: 0
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
});
