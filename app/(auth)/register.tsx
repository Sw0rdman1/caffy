import EmailInput from '@/components/Input/EmailInput'
import FullNameInput from '@/components/Input/FullNameInput'
import PasswordInput from '@/components/Input/PasswordInput'
import Link from '@/components/Link/Link'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { top } = useSafeAreaInsets()

    const handleRegister = () => {
        // Registration logic here
        router.replace('/')
    }

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <StatusBar style="dark" />
            <Text style={styles.title}>Join Caffy</Text>
            <View style={{ width: '100%', paddingHorizontal: 20, alignItems: 'center' }}>

                <FullNameInput value={fullName} onChangeText={setFullName} />
                <EmailInput value={email} onChangeText={setEmail} />
                <PasswordInput value={password} onChangeText={setPassword} />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Link
                    onPress={() => router.push('/(auth)/login2')}
                    text="Already have an account? Login"
                />
            </View>

            <Image
                source={require('../../assets/images/welcome-banner.png')}
                style={styles.banner}
                contentFit="cover"
                transition={1000}
            />
        </View>
    )
}

export default RegisterScreen

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
        marginTop: 20,
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
        color: '#91876D',
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

