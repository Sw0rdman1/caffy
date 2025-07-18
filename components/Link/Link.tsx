import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const Link = ({ text, onPress }: { text: string, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    linkText: {
        color: '#91876D',
        fontSize: RFValue(24),
        fontFamily: 'AmaticSCBold',
        textDecorationLine: 'underline',
        zIndex: 10,
    },
})