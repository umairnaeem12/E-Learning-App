import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../demoCom/SearchBar';

const CourseTopic = () => {

    const navigation = useNavigation();

    return (
        <View style={{ }}>

            <View
                style={{ backgroundColor: '#2c574f', height: 185, borderBottomEndRadius: 20, borderBottomLeftRadius: 20 }}>

                <View style={{ flexDirection: 'row', top: 15, justifyContent: 'space-between', height: 80, alignItems: 'center', paddingHorizontal: 25 }}>

                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: "white" }}>Hi Robarto,</Text>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: "white" }}>
                            Let Start Learning,
                        </Text>
                    </View>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Icon name="notifications-outline" size={25}
                            style={{ backgroundColor: '#7f9485', padding: 5, borderRadius: 10, paddingHorizontal: 7 }}>
                        </Icon>

                    </View>
                </View>

                <View style={{ top: 35, alignItems: 'center', justifyContent: 'center' }}>
                    <SearchBar />
                </View>

            </View>

        </View>
    );
};

export default CourseTopic;