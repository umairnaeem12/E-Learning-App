import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OnBoardComponenet = ({ img, title, text }) => {

    const Data = [
        {
            img: img,
            title: title,
            text: text,
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={{ alignItems: 'center', paddingVertical: 10, top: 20 }}>
                    <Image source={item.img} style={styles.bgImg} autoPlay></Image>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.txt}>{item.text}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Data}
                renderItem={renderItem}
            ></FlatList>

        </View>
    )
}

export default OnBoardComponenet

const styles = StyleSheet.create({
    bgImg: {
        top: 10,
        width: 315,
        height: 270,
        borderRadius: 10,
        marginBottom: 100
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: 'black',
    },
    txt: {
        fontSize: 20,
        paddingHorizontal: 18,
        color: 'black',
    },
})