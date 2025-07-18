// app/(auth)/login.tsx
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const LoginScreen = () => {
    const { top } = useSafeAreaInsets()

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Welcome Back</Text>
            <View style={{ width: '100%', paddingHorizontal: 20, alignItems: 'center' }}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#A38E7A"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#A38E7A"
                    secureTextEntry
                    style={styles.input}
                />


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                    <Text style={styles.linkText}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../assets/images/welcome-banner.png')}
                style={styles.banner}
                contentFit="fill"
                transition={1000}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EFE6',
        alignItems: 'center',
        zIndex: 1,
    },
    title: {
        fontSize: RFValue(60),
        fontFamily: 'AmaticSCBold',
        color: '#5C4A3D',
        marginBottom: 40,
        marginTop: 30,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
        fontSize: RFValue(22),
        fontFamily: 'AmaticSCBold',
        color: '#5C4A3D',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E0D6CC',
    },
    button: {
        backgroundColor: '#E09252',
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20,
        width: '80%',
    },
    buttonText: {
        fontSize: RFValue(34),
        color: '#F5EFE6',
        fontFamily: 'AmaticSCBold',
        textAlign: 'center',
    },
    linkText: {
        color: '#E09252',
        fontSize: RFValue(20),
        fontFamily: 'AmaticSCBold',
        textDecorationLine: 'underline',
        zIndex: 10,
    },
    banner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: RFValue(280),
        zIndex: -10,
    },
})
