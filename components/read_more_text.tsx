import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const ReadMoreText = ({ text, limit = 100 }:{text: string,limit: number}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const displayText = expanded ? text : text.slice(0, limit) + (text.length > limit ? "..." : "");

  return (
    <View style={{marginBottom:8}}>
      <Text style={styles.text}>{displayText}</Text>
      {text.length > limit && (
        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={styles.readMore}>
            {expanded ? "Read less" : "Read more"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#333",
  },
  readMore: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "500",
    color: "#0077b6",
  },
});

export default ReadMoreText;
