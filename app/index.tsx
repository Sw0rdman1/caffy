import { useAuth } from '@/components/Context/AuthContext'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoadingScreen = () => {
    const { user, loading } = useAuth()

    useEffect(() => {
        if (loading) return
        if (user) {
            router.replace('/(tabs)')
        } else {
            router.replace('/(auth)')
        }
    }, [loading, user])

    return (
        <View>
            <Text>index</Text>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})