import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const callback = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                CALLBACK
            </Text>
        </View>
    )
}

export default callback

const styles = StyleSheet.create({})