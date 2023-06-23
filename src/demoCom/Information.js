import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Information = ({ title, teacher, iconName, image, price }) => {

    const data = [
        {
            id: 1,
            title: title,
            teacher: teacher,
            Icon: iconName,
            image: image,
            price: price,
        }
    ]

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>

            <Image
                source={{uri: item.image}}
                style={{ width: 250, height: 150, marginRight: 10, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 17, padding: 5, color: 'black', fontWeight: '600' }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={item.iconName} size={20} color={'#2c574f'} />
                <Text style={{ paddingHorizontal: 5, color: 'black' }}>{item.teacher}</Text>
            </View>

            <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 20, padding: 5, color: '#4c669f', fontWeight: 'bold' }}>
                {item.price}
            </Text>

        </View>
    );

    return (
        <View style={{}}>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Information;

const styles = StyleSheet.create({})