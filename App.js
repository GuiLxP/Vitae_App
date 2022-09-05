import { SafeAreaView, Image, ImageBackground, StyleSheet, StatusBar, Button } from "react-native"

import background from './assets/background.png'
import biscoito from './assets/biscoito.png'

export default function App() {
  
  const minhasFrases = [
    'Não tem chateação que uma mordida de biscoito não possa ajudar a resolver',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 1.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 2 .',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 3.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 4.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 5.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 6.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 7 .',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade 8.',
  ]

  function quebrarBiscoito() {
      const numeroAleatorio = Math.random() * 10
      const numeroInteiro = Math.floor(numeroAleatorio) // gera um numero de 0 a 9

      alert(minhasFrases[numeroInteiro])
  }

  return (
    <SafeAreaView>
      <ImageBackground source={background} style={styles.imageApp}>
        <StatusBar backgroundColor="#e8ad86" />

        <Image source={biscoito} style={styles.logoImage} />
        <Button
          title="Quebrar biscoito"
          color="#C7934E"
          onPress={quebrarBiscoito}
        />

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageApp: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: 150,
    height: 150
  }
})