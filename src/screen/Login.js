import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import TextInputComponent from '../Components/TextInputComponenet';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginUser = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Login Your Account Successfully');
            ToastAndroid.show('Your Account Login Successfully', ToastAndroid.SHORT);
            const storedUsername = await AsyncStorage.getItem('username');
            navigation.navigate('CategoriesComponent', { username: storedUsername });
        } catch (error) {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://www.global-business-school.org/sites/default/files/gbsb-global-online-education-blog.jpg' }}
                style={styles.image}>

                <View style={styles.textView}>
                    <View style={{}}>
                        <Text style={styles.loginText}>Login Your Account</Text>

                        <TextInputComponent placeholder={'Email'} onChangeText={setEmail} value={email} />
                        <TextInputComponent placeholder={'Password'} onChangeText={setPassword} value={password} />

                        <View style={styles.loginTextView}>
                            <TouchableOpacity style={styles.loginButton}
                                onPress={() => LoginUser()}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.loginTextView}>
                            <Text style={{ color: 'white' }}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color: '#bca184' }}>Signin</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    textView: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    loginText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 10,
        fontWeight: '700'
    },
    loginTextView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: 'rgba(0, 0, 0, 6)',
        padding: 7,
        borderRadius: 10,
        width: 270,
        marginBottom: 20,
        borderWidth: 0.7,
        borderColor: '#bca184'
    },
    loginButtonText: {
        color: 'rgba(250, 246, 242, 0.8)',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800'
    }
});
