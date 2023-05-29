import React from "react";
import { Text, View } from "react-native";

const ResultIMC = (props) => {
  return (
    <View>
      <Text>{props.messageResultImc + " " + props.resultImc}</Text>
    </View>
  );
};

export default ResultIMC;
