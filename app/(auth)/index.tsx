import { Image } from 'expo-image'
import { StyleSheet, View } from 'react-native'

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
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
    },
    banner: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: 600
    },
})