import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const BottomDotBtnCom = ({ onPress }) => {

    const [ActiveButton, setActiveButton] = useState('')

    const handlePress = () => {
        setActiveButton(ActiveButton === 'active' ? '' : 'active')
        onPress()
    }

    return (
        <View>
            <View style={styles.bottmButton}>
                <View style={{ flexDirection: 'row' }}>
                    {[0, 1, 2].map((index) => (
                        <Icon key={index} name='radio-button-on-outline' size={10} style={[styles.Icn, index === ActiveButton && styles.Activebtn]}></Icon>
                    ))}
                </View>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.nextBtnTxt} onPress={handlePress}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomDotBtnCom;

const styles = StyleSheet.create({
    bottmButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    nextBtn: {
        width: 75,
        height: 40,
        backgroundColor: '#2c574f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    nextBtnTxt: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    Icn: {
        paddingHorizontal: 5
    },
    Activebtn: {
        color: 'green'
    }
})