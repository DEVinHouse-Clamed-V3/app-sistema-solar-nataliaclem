import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native"; // Importa os componentes básicos do React Native
import { planetas } from "./planetas";
import { Card } from "./card";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {/* Ícone no lado esquerdo */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4341/4341059.png",
          }} // URL do ícone (esquerda)
          style={styles.icon} // Estilo para o ícone
        />
        {/* Título da página */}
        <Text style={styles.headerText}>Vamos explorar</Text>
        {/* Ícone no lado direito */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4341/4341059.png",
          }} // URL do ícone (direita)
          style={styles.icon} // Estilo para o ícone
        />
      </View>
      <ScrollView>
        {/* Cartão para o planeta */}
        {planetas.map((planeta, index) => (
          <Card key={index} planeta={planeta} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos aplicados aos componentes da interface
const styles = StyleSheet.create({
  // Estilo para o contêiner principal da tela
  container: {
    flex: 1,
    backgroundColor: "#1c2644", // Cor de fundo (azul escuro)
    padding: 20,
    marginTop: 20, // Margem superior
  },
  // Estilo para o cabeçalho (ícones nos dois lados e título centralizado)
  header: {
    flexDirection: "row", // Exibe os elementos em linha (ícones e título)
    alignItems: "center", // Alinha verticalmente no centro
    justifyContent: "space-between", // Garante espaço entre os ícones e o título
    paddingVertical: 20, // Espaçamento vertical
  },
  // Estilo para o texto do cabeçalho (título principal)
  headerText: {
    color: "#fff", // Cor do texto
    fontSize: 24, // Tamanho da fonte
    fontWeight: "bold", // Texto em negrito
    textAlign: "center", // Centraliza o texto dentro do componente Text
    flex: 1, // Faz o texto ocupar o espaço restante entre os ícones
    marginHorizontal: 10, // Espaçamento horizontal ao redor do texto
  },
  // Estilo para os ícones no cabeçalho
  icon: {
    width: 50, // Largura do ícone
    height: 50, // Altura do ícone
  },
});
