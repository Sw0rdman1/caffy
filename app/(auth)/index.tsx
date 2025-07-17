import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
    const { top } = useSafeAreaInsets()

    const handlePress = () => {
        router.push('/(auth)/login')
    }

    return (
        <View style={[styles.container]}>
            <StatusBar style="dark" />
            <View style={styles.content}>
                <Text style={styles.title} >
                    Caffy
                </Text>
                <Text style={styles.subtitle} >
                    Capture your daily coffee ritual.
                </Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../assets/images/welcome-banner2.png')}
                style={styles.banner}
                contentFit="cover"
                transition={1000}
            />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5EFE6',
    },
    content: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 100,
        fontWeight: '700',
        textAlign: 'center',
        color: '#E09252',
        fontFamily: 'AmaticSCBold',

    },
    subtitle: {
        fontSize: 36,
        fontWeight: '500',
        textAlign: 'center',
        color: '#5C4A3D',
        fontFamily: 'AmaticSCBold',
    },
    banner: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80%',
    },
    button: {
        backgroundColor: '#E09252',
        paddingVertical: 5,
        width: '80%',
        borderRadius: 50,
        marginTop: 40,
        zIndex: 100,
    },
    buttonText: {
        color: '#F5EFE6',
        fontSize: 38,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'AmaticSCBold',
    },
})