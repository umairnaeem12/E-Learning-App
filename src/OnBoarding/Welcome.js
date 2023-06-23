import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../Images/logo.png')} style={{ width: 400, height: 400 }}></Image>

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 20, paddingLeft: 200 }}>
                <TouchableOpacity style={{ backgroundColor: '#2c574f', padding: 10, paddingLeft: 15, borderRadius: 30, flexDirection: 'row' }} onPress={() => navigation.navigate('FirstScreen')}>
                    <Text style={{ fontSize: 20, color: 'white' }}>𝙂𝙚𝙩 𝙎𝙩𝙖𝙧𝙩𝙚𝙙 </Text>
                    <Icon name="chevron-forward-outline" size={25} color={'white'}></Icon>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({})