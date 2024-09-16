import {
  View,
  Text,
  Image,
  StyleSheet,
  
} from "react-native";
export function Card({planeta}){
  return(
      <View style={styles.card}>
      {/* Nome do planeta */}
      <Text style={styles.planetName}>{planeta.nome}</Text>
      {/* Imagem do planeta */}
      <Image
        source={{
          uri: planeta.img,
        }}
        style={styles.planetImage}
      />
      {/* Informações do planeta */}
      <View style={styles.planetInfo}>
        <Text style={styles.infoText}>Velocidade Orbital Média</Text>
        <Text style={styles.infoValue}> {planeta.velocidadeOrbitalMediaKmS} km/s</Text>
      </View>
      <View style={styles.planetInfo}>
        <Text style={styles.infoText}>Satélites</Text>
        <Text style={styles.infoValue}>{planeta.quantidadeSatelites}</Text>
      </View>
      <View style={styles.planetInfo}>
        <Text style={styles.infoText}>Área de Superfície</Text>
        <Text style={styles.infoValue}>{planeta.areaSuperficieKm2.toLocaleString()}km²</Text>
      </View>
      <View style={styles.planetInfo}>
        <Text style={styles.infoText}>Período de Rotação</Text>
        <Text style={styles.infoValue}>{planeta.periodoRotacaoDias} dias</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Estilo para o contêiner principal da tela (fundo azul escuro e preenchimento)
  
  // Estilo para os cartões de informações dos planetas
  card: {
    backgroundColor: "#000", // Cor de fundo preta para os cartões
    borderRadius: 10, // Bordas arredondadas nos cartões
    padding: 15, // Preenchimento dentro dos cartões
    marginBottom: 20, // Espaço abaixo de cada cartão
  },
  // Estilo para o nome do planeta
  planetName: {
    fontSize: 20, // Tamanho da fonte para o nome do planeta
    color: "#fff", // Cor do texto (branco)
    marginBottom: 10, // Espaçamento inferior
    textAlign: "center", // Alinhamento centralizado do nome do planeta
  },
  // Estilo para as imagens dos planetas
  planetImage: {
    width: "100%", // Largura total do cartão
    height: 200, // Altura fixa para a imagem
    borderRadius: 10, // Bordas arredondadas nas imagens
  },
  // Estilo para o contêiner de informações de cada planeta (distribui o texto de maneira horizontal)
  planetInfo: {
    flexDirection: "row", // Exibe as informações em linha
    justifyContent: "space-between", // Espaço entre os textos de informação e valores
    marginTop: 10, // Espaçamento superior entre as linhas de informação
  },
  // Estilo para o texto que descreve a informação (ex: "Velocidade Orbital Média")
  infoText: {
    color: "#aaa", // Cor cinza clara para os rótulos das informações
    fontSize: 16, // Tamanho da fonte do rótulo
  },
  // Estilo para o valor da informação (ex: "29.78 km/s")
  infoValue: {
    color: "#fff", // Cor branca para os valores
    fontSize: 16, // Tamanho da fonte dos valores
  },
});