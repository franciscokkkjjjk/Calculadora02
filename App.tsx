import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type props = {
  c?: number,
  text: string,
  bg?: string,
  onPress: () => any
}
const Botao = ({ c, text, bg, onPress }: props) => {
  const cAux = c ? c : 1;
  const bgAux = bg ? bg : "#b0b0b0";
  const styles = StyleSheet.create({
    area: {
      flex: cAux,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#fff",
      backgroundColor: bgAux,
      borderRadius: 5,
      margin: 3,
    },
    text: {
      fontSize: 18,
      color: "#000"
    }
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.area}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )

}

const Calculadora02 = (): JSX.Element => {
  const [result, setResult] = useState(0);
  const [eq, setEq] = useState("0");
  const [eqCheck, setEqCheck] = useState(true);

  const touchBtn = (b: string) => {
    if (b === "C") {
      setEq("0");
      setResult(0);
      setEqCheck(true);
      return;
    }

    if (b === "=" && (eq[0] !== "/" && eq[0] !== '*') && (eq[eq.length - 1] !== "/" && eq[eq.length - 1] !== "*" && eq[eq.length - 1] !== "-" && eq[eq.length - 1] !== "+")) {
      if (eq[0] === '.' && !eq[1]) {
        return;
      }
      setResult(eval(eq));
      setEqCheck(false);
      return;
    } else if (b === "=") {
      return;
    }

    if ((eq[eq.length - 1] === "+" || eq[eq.length - 1] === "-" || eq[eq.length - 1] === "*" || eq[eq.length - 1] === "/" || eq[eq.length - 1] === ".") && (b === "+" || b === "-" || b === "*" || b === "/" || b === ".")) {
      setEq(eq);
      return;
    }

    if (eq === "0") {
      setEq(b);
      return;
    }
    setEqCheck(true);
    setEq(eq + b);

  }

  return (
    <View style={styles.body}>
      <View style={styles.tela}>
        <View style={styles.linha}>
          {eqCheck &&
            <Text style={styles.big}>{eq}</Text>
          }{!eqCheck &&
            <Text style={styles.small}>{eq}</Text>
          }
        </View>
        <View style={styles.linha}>
          {eqCheck &&
            <Text style={styles.small}>{result}</Text>
          }{!eqCheck &&
            <Text style={styles.big}>{result}</Text>
          }
        </View>
      </View>
      <View style={styles.linha}>
        <Botao onPress={() => touchBtn("C")} text='C' bg='#CCCCCC' c={3} />
        <Botao onPress={() => touchBtn("/")} text='/' bg='#53ffff' />
      </View>
      <View style={styles.linha}>
        <Botao onPress={() => touchBtn("7")} text='7' />
        <Botao onPress={() => touchBtn("8")} text='8' />
        <Botao onPress={() => touchBtn("9")} text='9' />
        <Botao onPress={() => touchBtn("*")} text='*' bg='#53ffff' />
      </View>
      <View style={styles.linha}>
        <Botao onPress={() => touchBtn("4")} text='4' />
        <Botao onPress={() => touchBtn("5")} text='5' />
        <Botao onPress={() => touchBtn("6")} text='6' />
        <Botao onPress={() => touchBtn("-")} text='-' bg='#53ffff' />
      </View>
      <View style={styles.linha}>
        <Botao onPress={() => touchBtn("1")} text='1' />
        <Botao onPress={() => touchBtn("2")} text='2' />
        <Botao onPress={() => touchBtn("3")} text='3' />
        <Botao onPress={() => touchBtn("+")} text='+' bg='#53ffff' />
      </View>
      <View style={styles.linha}>
        <Botao onPress={() => touchBtn("0")} text='0' c={2} />
        <Botao onPress={() => touchBtn(".")} text='.' />
        <Botao onPress={() => touchBtn("=")} text='=' bg='#53ffff' />
      </View>
    </View>
  )
}

export default Calculadora02;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  linha: {
    flex: 1,
    display: "flex",
    flexDirection: "row"
  },
  big: {
    backgroundColor: "#000000",
    color: "#fff",
    fontSize: 50,
    flex: 1,
    textAlign: "right",
    paddingRight: 20,
  },
  small: {
    backgroundColor: "#000000",
    color: "#fff",
    fontSize: 25,
    flex: 1,
    textAlign: "right",
    paddingTop: 5,
    paddingRight: 20,
  },
  tela: {
    flex: 1,
    paddingBottom: 10
  }
})
