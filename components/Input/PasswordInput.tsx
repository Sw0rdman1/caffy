import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const PasswordInput = ({ value, onChangeText }: { value: string, onChangeText: (text: string) => void }) => {
    const [secure, setSecure] = useState(true)

    return (
        <View style={styles.container}>
            <Ionicons name="lock-closed-outline" size={24} color="#A38E7A" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#A38E7A"
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
                <Ionicons
                    name={secure ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#A38E7A"
                />
            </TouchableOpacity>
        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0D6CC',
        paddingHorizontal: 12,
        height: 55,
        width: '90%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontFamily: 'AmaticSCBold',
        fontSize: RFValue(22),
        color: '#5C4A3D',
    },
})
