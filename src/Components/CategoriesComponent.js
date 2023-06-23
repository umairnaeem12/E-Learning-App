import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatListData from './FlatListData';
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoriesComponent = () => {

    const route = useRoute();
    const { username } = route.params;

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#2c574f', flex: 1 }}>

            <View style={{ padding: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', textAlign: 'center' }}>Discover Your Hidden Potential</Text>
            </View>

            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ padding: 9, textAlign: 'center', fontWeight: 'bold', color: '#2c574f' }}>Choose Category</Text>
                    <Icon name="desktop-outline" size={15} color={'#2c574f'}></Icon>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('TopicProgramming', { username: username })}>
                        <FlatListData name='Programming' img={require('../Images/programming.png')} course='15 Courses' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('GraphicDesgin')}>
                        <FlatListData name='Graphic Design' img={require('../Images/graphic.png')} course='23 Courses' />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
                        <FlatListData name='SEO' img={require('../Images/seo.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DigitalMarketing')}>
                        <FlatListData name='Digital Marketing' img={require('../Images/digital-marketing.jpg')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ContentWriting')}>
                        <FlatListData name='Content Writing' img={require('../Images/copywriting.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('VirtualAssistant')}>
                        <FlatListData name='Virtual Assistant' img={require('../Images/vr.jpg')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UIDesign')}>
                        <FlatListData name='UI/UX design' img={require('../Images/UI.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ECommerce')}>
                        <FlatListData name='E-commerce' img={require('../Images/e-commerce.png')} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default CategoriesComponent;

const styles = StyleSheet.create({
    skipButton: {
        marginLeft: '75%',
    },
})

