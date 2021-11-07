import React from "react";

import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  CheckBox,
} from "react-native";

import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const AgregarTarjetas = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.arriba}
            source={require("./img/SandCorner.png")}
          />
        </View>

        <Text style={[styles.texto, {}]}>Mis Tarjetas</Text>
        <View style={styles.viewwhite}>
          <View style={styles.contenidoF}>
            <Text style={styles.textinit}>Nombre</Text>
            <View style={styles.ViewCont}>
              <Input
                style={styles.textoInput}
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />
            </View>
            <Text style={styles.textinit}>Número de la Tarjeta</Text>

            <View style={styles.ViewCont}>
              <Input
                style={styles.textoInput}
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />
            </View>

            <View style={styles.containertext1}>
              <Text style={styles.textinit1}>CCV</Text>
              <Text style={styles.textinit2}>Vence</Text>
            </View>
            <View style={styles.containertext}>
              <View style={styles.ViewCont2}>
                <Input
                  style={styles.textoInput}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                />
              </View>
              <View style={styles.ViewCont2}>
                <Input
                  style={styles.textoInput}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox} />
                <Text
                  style={{
                    fontSize: 20,
                    color: "#018ABC",
                    fontWeight: "bold",
                    marginLeft: 5,
                    marginTop: 2,
                  }}
                >
                  Recordar
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "justify",
                    marginRight: 130,
                    marginLeft: 60,
                  }}
                >
                  Al hacer clic, está aceptando los terminos, condiciones y
                  politicas de la empresa
                </Text>
              </View>
            </View>
            <View style={styles.contenedorLogo}>
              <TouchableOpacity style={styles.btnA}>
                <Text style={styles.textoFR}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AgregarTarjetas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#018ABC",
  },
  texto: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 50,
    paddingLeft: 15,
  },
  arriba: {
    height: 160,
    width: "100%",
  },
  header: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  contenidoF: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 500,
    borderRadius: 20,
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  textoInput: {
    backgroundColor: "#EAEAEA",
    color: "#565666",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  ViewCont: {
    backgroundColor: "#EAEAEA",
    height: 50,
    width: 300,
    borderRadius: 10,
    marginLeft: 12,
    margin: 10,
    paddingTop: 5,
  },
  viewwhite: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containertext: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containertext1: {
    flexDirection: "row",
  },
  ViewCont2: {
    backgroundColor: "#EAEAEA",
    height: 50,
    width: 100,
    borderRadius: 10,
    marginLeft: 12,
    margin: 10,
    paddingTop: 5,
  },
  textinit: {
    fontSize: 20,
    color: "#018ABC",
    fontWeight: "bold",
    marginLeft: 16,
  },
  textinit1: {
    fontSize: 20,
    color: "#018ABC",
    fontWeight: "bold",
    marginLeft: 16,
  },
  textinit2: {
    fontSize: 20,
    color: "#018ABC",
    fontWeight: "bold",
    marginLeft: 155,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  contenedorLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnA: {
    backgroundColor: "#018ABC",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 10,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textoFR: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
});