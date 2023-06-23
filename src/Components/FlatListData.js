import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';

const FlatListData = ({ name, img, course, onPress }) => {

    const Data = [
        {
            id: '1',
            name: name,
            img: img,
        },
    ]

    const renderItem = ({ item }) => {
        return (
            < View style={{ marginHorizontal: 18, marginTop: '7%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#4c669f', width: 140, height: 120, borderRadius: 10 }}>
                {/* <TouchableOpacity> */}
                    <ImageBackground source={item.img} style={{ width: 70, height: 70, borderRadius: 70, overflow: 'hidden' }}></ImageBackground>
                    {/* <ImageBackground source={{uri: item.img}} style={{ width: 70, height: 70, borderRadius: 70, overflow: 'hidden' }}></ImageBackground> */}
                    <View style={{ top: 5 }}>
                        <Text style={{ color: 'black', textAlign: 'center' }}>{item.name}</Text>
                    </View>
                {/* </TouchableOpacity> */}
            </View >
        )
    }

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                ></FlatList>
            </View>
        </View>
    )
}

export default FlatListData;