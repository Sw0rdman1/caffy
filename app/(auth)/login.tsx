import { supabase } from '@/lib/supabase';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('vujasinovicb2019@gmail.com')
    const [password, setPassword] = useState('Pass123!')
    const [isSigningUp, setIsSigningUp] = useState(false)
    const router = useRouter()

    const handleLogIn = async () => {
        if (!email || !password) return Alert.alert('Error', 'Please enter email and password')

        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            Alert.alert('Auth error', error.message)
        } else {
            router.push('/(tabs)')
        }
    }



    const handleRegister = async () => {
        if (!email || !password) return Alert.alert('Error', 'Please enter email and password')

        const authCallback = Linking.createURL('/(auth)/callback')

        const { error } = await supabase.auth.signUp({
            email, password, options: {
                emailRedirectTo: authCallback,
            }
        })

        if (error) {
            Alert.alert('Auth error', error.message)
        } else {
            Alert.alert('Success', 'Check your email for confirmation link')
            setIsSigningUp(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{isSigningUp ? 'Sign Up' : 'Login'}</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title={isSigningUp ? 'Create Account' : 'Log In'} onPress={isSigningUp ? handleRegister : handleLogIn} />
            <Text style={styles.toggle} onPress={() => setIsSigningUp(!isSigningUp)}>
                {isSigningUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: 'center' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 10, borderRadius: 6 },
    toggle: { textAlign: 'center', marginTop: 20, color: '#007AFF' },
})
