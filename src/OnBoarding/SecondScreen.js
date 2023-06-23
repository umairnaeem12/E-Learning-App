import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardComponenet from './OnBoardComponent';
import BottomDotBtnCom from './BottomDotBtnCom';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {

const navigation = useNavigation();

const handlePress = () => {
    navigation.navigate('ThirdScreen');
}
    return (
        <View style={{ flex: 1 }}>
            <OnBoardComponenet 
            img={require('../Images/stdy.jpg')} 
            title={`Set Your Own${'\n'}Goals`}
                text={'ᴀꜰᴛᴇʀ ꜰɪɴᴅ ᴀ ᴄᴏᴜʀꜱᴇ ꜱᴇᴛ ʏᴏᴜʀ ᴛɪᴍᴇʟɪɴᴇ ʜᴏᴡ ᴛɪᴍᴇ ʏᴏᴜ ꜱᴘᴇɴᴅ ʜᴇʀᴇ.'} />


            <BottomDotBtnCom onPress={handlePress}/>
        </View>
    )
}

export default SecondScreen;

const styles = StyleSheet.create({})