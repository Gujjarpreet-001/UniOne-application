// components/CustomTextInput.tsx
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, HelperText, IconButton } from "react-native-paper";

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad";
  secureTextEntry?: boolean;
  error?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  maxLength?: number;
  leftIcon?: string; // MaterialCommunityIcons name
  rightIcon?: string; // Optional right-side icon
  onRightIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  error = false,
  errorMessage,
  multiline = false,
  maxLength,
  leftIcon,
  rightIcon,
  onRightIconPress,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = secureTextEntry;

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPasswordField && !showPassword}
        multiline={multiline}
        maxLength={maxLength}
        error={error}
        textColor="#111827"
        activeOutlineColor="#3b82f6"
        
        style={styles.input}
        left={
          leftIcon ? (
            <TextInput.Icon icon={leftIcon} />
          ) : undefined
        }
        right={
          isPasswordField ? (
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : rightIcon ? (
            <TextInput.Icon icon={rightIcon} onPress={onRightIconPress} />
          ) : undefined
        }
      />

      {error && errorMessage ? (
        <HelperText type="error" visible={error}>
          {errorMessage}
        </HelperText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  input: { backgroundColor: "#fff" },
});

export default CustomTextInput;
