import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


export default function LoginScreen () {
    const [ hasAccount, setHasAccount ] = useState<boolean>(true);
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [emailError, setEmailError] = useState(false);

    const validateEmail = () => {
        const regex = /\S+@\S+\.\S+/;
        setEmailError(!regex.test(email));
    };

    const handleSubmit = () => {
        alert(`${email} & ${password}`)
    }

    return(
        <View style={ styles.container }>
            <Text style={styles.heading1}>{hasAccount ?"Welcome Back" : "Create Account"}</Text>
            <View>
                <TextInput 
                    label={"Email Address"}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    mode="outlined"
                    autoComplete="email"
                    textContentType="emailAddress"
                    onBlur={validateEmail}
                    error={emailError}
                    style={styles.inputStyles}
                /> 
                <TextInput 
                    label={'Password'}
                    mode="outlined"
                    autoComplete="password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    textContentType="password"
                    secureTextEntry={!showPassword}
                    right={
                    <TextInput.Icon
                        icon={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(prev => !prev)}
                    />
                    }
                />
            </View>
            <Button 
                onPress={handleSubmit}
                style={styles.submitButton}
                textColor="#ffff"
            >
                { hasAccount? "Sign In" : "Sign Up" }
            </Button>
            
            <Pressable onPress={() => setHasAccount (prev => !prev)}>
                <Text style={{textAlign:'center',fontSize:12, padding:4}}>
                    { hasAccount ? "Don't have an account? sign up" : "Already have an account? sign in" }
                </Text>
            </Pressable>
        </View>
    )
}

const  styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection: "column",
        gap: 16,
        justifyContent: "center"
    },
    heading1: {
        fontSize: 20,
        fontWeight: 'semibold',
        textAlign: "center"
    },
    inputStyles: {
        marginBottom: 12
    },
    submitButton: {
        backgroundColor: '#3B82F6',
    }
})