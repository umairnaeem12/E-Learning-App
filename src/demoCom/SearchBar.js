import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {

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
            />
        </View>
    );
};

export default SearchBar;