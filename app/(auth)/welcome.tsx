import Button from '@/components/Button'
import SreenWrapper from '@/components/SreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

const Welcome = () => {
  return (
    <SreenWrapper>
      <View style={styles.container}>
        {/* Login Button & image */}
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontWeight={"500"}> Sign In</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(1000)}
            source={require('@/assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode='contain'
          />
        </View>

        {/* footer - CORRIGIDO A ESTRUTURA AQUI */}
        <View style={styles.footer}>
          <Animated.View
            entering={FadeIn.duration(2000).delay(150).springify().damping(12)}
            style={{ alignItems: 'center' }}
          >
            <Typo size={30} fontWeight={"800"}>Tenha o controle</Typo>
            <Typo size={30} fontWeight={"800"}>de suas finanças</Typo>
          </Animated.View>
          
           <Animated.View
            entering={FadeIn.duration(2000).delay(250).springify().damping(18)}
            style={{ alignItems: 'center', gap:2 }}
          >
            <Typo size={17} color={colors.textLight}>Finanças devem ser organizadas</Typo>
            <Typo size={17} color={colors.textLight}>para um futuro mais tranquilo</Typo>
          </Animated.View>
          
          <Animated.View
            entering={FadeIn.duration(2000).delay(350).springify().damping(18)}
           style={styles.buttontContainer}>
            <Button>
              <Typo size={22} color={colors.neutral900} fontWeight={'600'}>Vamos começar</Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </SreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: spacingY._7,
    },
    welcomeImage: {
        width: '100%',
        alignSelf: 'center',
        height: verticalScale(300),
        marginTop: verticalScale(100),
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: spacingY._20,
    },
    footer: {
  backgroundColor: colors.neutral900,
  alignItems: 'center',
  paddingTop: verticalScale(30),
  paddingBottom: verticalScale(45),
  gap: spacingY._20,

  // iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,

  // Android
  elevation: 12,
  zIndex: 10, // útil para manter acima de outros componentes
}
,
    buttontContainer: {
        width: '100%',
        paddingHorizontal: spacingY._25,
    }
})