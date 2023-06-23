import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardComponenet from './OnBoardComponent';
import BottomDotBtnCom from './BottomDotBtnCom';
import { useNavigation } from '@react-navigation/native';


const FirstScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('SecondScreen')
    }

    return (
        <View style={{ flex: 1 }}>
            <OnBoardComponenet
                // img={require('../Images/vr.jpg')}
                img={{uri: 'https://static.vecteezy.com/system/resources/previews/001/811/016/non_2x/online-education-e-learning-online-course-concept-home-school-illustration-students-on-laptop-computer-screen-distance-learning-new-normal-cartoon-flat-illustration-vector.jpg'}}
                title={`Explore Online ${'\n'}Courses`}
                text={'ꜰɪɴᴅ ʙᴇꜱᴛ ᴄᴏᴜʀꜱᴇ ꜰᴏʀ ʏᴏᴜʀ ᴄᴀʀᴇᴇʀ ᴛʜᴀᴛ ᴡɪʟʟ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘ ʏᴏᴜʀ ꜱᴋɪʟʟsssssss.'}
            />

            <BottomDotBtnCom onPress={handlePress} />
        </View>
    )
}

export default FirstScreen;

const styles = StyleSheet.create({})