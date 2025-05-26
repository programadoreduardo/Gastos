import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../constants/theme'

const index = () => {
    const router = useRouter()
    // This is the main entry point of the app 
    useEffect(() => {
        setTimeout(() => {
            router.push("/(auth)/welcome")
        }, 2000) // Navigate to home after 2 seconds
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require('../assets/images/money.png')}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900
    },
    logo: {
        width: '20%',
        aspectRatio: 1,
    }
})