import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Copywriting',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.searchenginejournal.com/wp-content/uploads/2021/12/seo-copywriting-61ded65aa6f8e-sej.png',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'SEO Writing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://yoshirodigital.com/wp-content/uploads/2021/04/SEO-content.jpg',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Blog Writing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.blendb2b.com/hubfs/BLD%20techncial%20blog.jpeg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'CopyWriting', img: 'https://www.searchenginejournal.com/wp-content/uploads/2021/12/seo-copywriting-61ded65aa6f8e-sej.png' },
    { id: 2, name: 'SEO Writing', img: 'https://yoshirodigital.com/wp-content/uploads/2021/04/SEO-content.jpg' },
    { id: 3, name: 'Blog Writing', img: 'https://www.blendb2b.com/hubfs/BLD%20techncial%20blog.jpeg' },
];

const ContentWriting = () => {
    return (
        <View>

            <CourseTopic />

            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black', top: 5, padding: 10, paddingLeft: 15 }}>Information</Text>

            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <View>
                        <Information title={item.title} teacher={item.teacher} Icon={item.iconName} image={item.image} price={item.price} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
            </FlatList>

            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black', padding: 5, paddingLeft: 15 }}>Categories</Text>

            <FlatList
                data={Dataa}
                renderItem={({ item }) => (
                    <View>
                        <Categories name={item.name} img={item.img} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
            </FlatList>

        </View>
    )
}

export default ContentWriting;

const styles = StyleSheet.create({})