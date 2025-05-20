import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Conta comigo</Text>
          <Text style={styles.subtitle}>
            Estude matemática básica com a gente
          </Text>
        </View>

        <Image
          source={require("../../assets/images/banner.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Quizes</Text>

        <TouchableOpacity style={styles.quizCard}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../assets/images/adicao.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.quizContent}>
            <Text style={styles.quizTitle}>Adição</Text>
            <Text style={styles.quizDescription}>
              Um desafio divertido para treinar sua mente!
            </Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizCard}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../assets/images/mutiplicao.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.quizContent}>
            <Text style={styles.quizTitle}>Mutiplicação</Text>
            <Text style={styles.quizDescription}>
              Resolva as continhas e prove que você manda bem!.
            </Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizCard}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../assets/images/substracao.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.quizContent}>
            <Text style={styles.quizTitle}>Subtração</Text>
            <Text style={styles.quizDescription}>
              Descubra o resultado das subtrações.
            </Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizCard}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../assets/images/divisao.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.quizContent}>
            <Text style={styles.quizTitle}>Divisão</Text>
            <Text style={styles.quizDescription}>
              Um jeito legal de praticar com diversão!
            </Text>
          </View>
          <Text style={styles.arrowIcon}>› </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  heroImage: {
    height: 190,
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  iconImage: {
    width: 45,
    height: 45,
  },
  header: {
    padding: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  quizCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#E6D8FA",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  quizContent: {
    flex: 1,
    padding: 15,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  quizDescription: {
    fontSize: 14,
    color: "#666666",
    flexWrap: "wrap",
  },
  arrowIcon: {
    fontSize: 24,
    color: "#CCCCCC",
    marginRight: 15,
  },
});
