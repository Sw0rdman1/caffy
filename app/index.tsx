import { useAuth } from '@/components/context/AuthContext'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoadingScreen = () => {
    const { user, session } = useAuth()

    useEffect(() => {
        if (user) {
            router.replace('/(tabs)')
        } else {
            router.replace('/(auth)')
        }
    }, [user, session])

    return (
        <View>
            <Text>index</Text>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})