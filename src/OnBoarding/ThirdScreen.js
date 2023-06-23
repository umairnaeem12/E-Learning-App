import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardComponenet from './OnBoardComponent';
import BottomDotBtnCom from './BottomDotBtnCom';

const ThirdScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={{ flex: 1 }}>
            <OnBoardComponenet
                img={require('../Images/WD.jpg')} 
                title={`Complete full ${'\n'}Course`}
                text={'ᴄᴏᴍᴘʟᴇᴛᴇ ᴛʜᴇ ꜰᴜʟʟ ᴄᴏᴜꜱʀᴇ ᴡɪᴛʜ ꜰᴜʟʟ ᴅᴇᴅɪᴄᴀᴛɪᴏɴ ᴛᴏ ɢᴇᴛ ᴄᴇʀᴛɪꜰɪᴄᴀᴛᴇ.'} />


            <BottomDotBtnCom onPress={handlePress} />

        </View>
    )
}

export default ThirdScreen;

const styles = StyleSheet.create({})