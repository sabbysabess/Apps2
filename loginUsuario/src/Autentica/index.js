import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {auth} from '../firebaseConfig';

const TelaAutentica = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin= ()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setUser(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Autenticação de Usuário</Text>
            <TextInput style={estilos.input} placeholder='Email' value={email} onChangeText={(val) => {setEmail(val);}} />
            <TextInput style={estilos.input} placeholder='Senha' value={password} secureTextEntry={true} onChangeText={(val) => {setPassword(val);}}/>

            <Button title="Entrar" style={estilos.botao} onPress={handleLogin}/>
        </View>
    );
};

const estilos = StyleSheet.create({
     container: {
        flex:1,
        padding: 20,
        alignItems:'center'
     },
     titulo:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
     },
     input:{
        width:300,
        padding:10,
        borderColor:'#ccc',
        borderWidth:1,
        marginBottom:10
     },
     botao: {
        width:300,
     }
});

export default TelaAutentica;