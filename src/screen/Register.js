import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import TextInputComponent from '../Components/TextInputComponenet';
import firebase from '@react-native-firebase/app';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showRegisterScreen, setShowRegisterScreen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setShowRegisterScreen(true);
        }, 1000);
    }, []);

    useEffect(() => {
        const checkUserLogin = async () => {
            const userData = await AsyncStorage.getItem('userLoggedIn');
            const storedUserName = await AsyncStorage.getItem('username');
            if (userData === 'true') {
                navigation.navigate('CategoriesComponent', { username: storedUserName });
            } else {
                console.log('User is not logged in');
            }
        };

        checkUserLogin();
    }, []);

    const RegisterUsers = () => {
        setIsLoading(true);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                        displayName: username,
                    })
                    .then(() => {
                        console.log('Your Account Registered Successfully');
                        AsyncStorage.setItem('userLoggedIn', 'true');
                        // setUsername(username);
                        AsyncStorage.setItem('username', username); // Store the username
                        ToastAndroid.show(
                            'Your Account was created Successfully',
                            ToastAndroid.SHORT
                        );
                        setTimeout(() => {
                            setIsLoading(false);
                            navigation.navigate('CategoriesComponent', { username: username });
                        }, 1000);
                    })
                    .catch((error) => {
                        console.log('Update Profile Error:', error);
                        ToastAndroid.show(error.message, ToastAndroid.SHORT);
                    });
            })
            .catch((error) => {
                setIsLoading(false);
                console.log('Registration Error:', error);
                ToastAndroid.show(error.message, ToastAndroid.SHORT);
            });
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{
                    uri:
                        'https://www.global-business-school.org/sites/default/files/gbsb-global-online-education-blog.jpg',
                }}
                style={styles.image}
            >
                {isLoading ? (
                    <View style={styles.mainView}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : showRegisterScreen ? (
                    <View style={styles.mainView}>
                        <Text style={styles.topText}>Register Your Account</Text>
                        {/* Rest of your UI */}
                        <TextInputComponent
                            placeholder={'Name'}
                            onChangeText={setUsername}
                            value={username}
                        />
                        <TextInputComponent
                            placeholder={'Email'}
                            onChangeText={setEmail}
                            value={email}
                        />
                        <TextInputComponent
                            placeholder={'Password'}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <View style={{ alignItems: 'center', marginTop: 25 }}>
                            <TouchableOpacity
                                style={styles.signinButton}
                                onPress={() => RegisterUsers()}
                            >
                                <Text style={styles.signinButtonText}>Signin</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                paddingVertical: 20,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ color: 'white' }}>Did you have an account? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={{ color: '#bca184' }}>Login</Text>
                            </TouchableOpacity>
                            {/* <Text style={{ color: 'white' }}>{username}</Text> */}
                        </View>
                    </View>
                ) : null}
            </ImageBackground>
        </View>
    );
};


export default Register;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    mainView: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    topText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 10,
        fontWeight: '700',
        marginBottom: 20
    },
    signinButton: {
        backgroundColor: 'rgba(0, 0, 0, 6)',
        padding: 7,
        borderRadius: 10,
        width: 270,
        marginBottom: 20,
        borderWidth: 0.7,
        borderColor: '#bca184'
    },
    signinButtonText: {
        color: 'rgba(250, 246, 242, 0.8)',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800'
    },
});
