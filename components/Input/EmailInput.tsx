import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const EmailInput = ({ value, onChangeText }: { value: string, onChangeText: (text: string) => void }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="mail-outline" size={24} color="#A38E7A" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#A38E7A"
                value={value}
                onChangeText={onChangeText}
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View>
    )
}

export default EmailInput

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
