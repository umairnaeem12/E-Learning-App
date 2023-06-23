import React, { useState } from 'react';
import { View, FlatList, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatListData from '../Components/FlatListData';
import { useRoute } from '@react-navigation/native'

const TopicProgramming = () => {

    const route = useRoute();

    const { username } = route.params;

    const data = [
        {
            id: 1,
            title: 'Web Development',
            teacher: 'John Resig',
            Icon: <Icon name="person" size={20}></Icon>,
            image: require('../Images/web-dev.jpg'),
            price: '$125.00',
        },
        {
            id: 2,
            title: 'Mobile App Development',
            teacher: 'Mosh Hamedani',
            image: require('../Images/app-dev.jpg'),
            price: '$150.00',
        },
        {
            id: 3,
            title: 'Data Science and Analytics',
            teacher: 'Andrew Mead',
            image: require('../Images/data-science.jpg'),
            price: '$200.00',
        },
        // Add more items as needed
    ];

    const dataa = [
        { name: 'Web Development', img: require('../Images/webd.png') },
        { name: 'Mobile App Development', img: require('../Images/mobileapp.jpg') },
        { name: 'Data Science and Analytics', img: require('../Images/ds.jpg') },
    ];

    const SearchBar = ({ onChange }) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 15,
                paddingHorizontal: 10,
                height: 50,
                marginHorizontal: 10,
                width: 280
            }}>
                <Icon name="search-outline" size={20} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="black"
                    onChangeText={onChange}
                // style={{ flex: 1 }}
                />
            </View>
        );
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>

            <Image
                source={item.image}
                style={{ width: 250, height: 150, marginRight: 10, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 17, padding: 5, color: 'black', fontWeight: '600' }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="person" size={20} color={'#2c574f'}></Icon>
                <Text style={{ paddingHorizontal: 5, color: 'black' }}>{item.teacher}</Text>
            </View>

            <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 20, padding: 5, color: '#4c669f', fontWeight: 'bold' }}>
                {item.price}
            </Text>

        </View>
    );

    const [searchText, setSearchText] = useState('');
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    return (
        <View style={{ flex: 1 }}>

            <View
                style={{
                    backgroundColor: '#2c574f',
                    height: 185,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    // flexDirection: 'row'
                    // alignItems: 'center', 

                }}>

                <View style={{ flexDirection: 'row', top: 15, justifyContent: 'space-between', height: 80, alignItems: 'center', paddingHorizontal: 25 }}>

                    <View>
                        <Text style={{color: 'white', fontSize: 14}}>𝐇𝐞𝐥𝐥𝐨</Text>
                        <Text style={{ fontSize: 22, fontWeight: '700', color: "white" }}>{username}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: "white" }}>
                            Let Start Learning.
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: 'flex-end',
                        }}>
                        {/* <Icon
                            name="cart-outline"
                            size={25}
                            style={{
                                backgroundColor: '#7f9485',
                                padding: 5,
                                borderRadius: 10,
                                paddingHorizontal: 7,
                                marginRight: 10,
                            }}></Icon> */}
                        <Icon
                            name="notifications-outline"
                            size={25}
                            style={{
                                backgroundColor: '#7f9485',
                                padding: 5,
                                borderRadius: 10,
                                paddingHorizontal: 7,
                            }}></Icon>
                    </View>
                </View>

                <View style={{ top: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <SearchBar onChange={handleSearchTextChange} />
                </View>

            </View>

            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black', top: 5, padding: 10, paddingLeft: 15 }}>Information</Text>

            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black', padding: 5, paddingLeft: 15 }}>Categories</Text>

            <FlatList
                data={dataa}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginBottom: 15 }}>
                        <FlatListData name={item.name} img={item.img} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default TopicProgramming;