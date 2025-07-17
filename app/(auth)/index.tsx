import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingTop: top + 30 }]}>
            <StatusBar style="dark" />
            <View style={styles.textContainer}>
                <Text style={styles.title} >
                    Caffy
                </Text>
                <Text style={styles.subtitle} >
                    Capture your daily coffee ritual.
                </Text>
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
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 58,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4B3621'
    },
    subtitle: {
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center',
        color: '#5C4A3D',
        marginBottom: 30,
    },
    banner: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 600
    },
})