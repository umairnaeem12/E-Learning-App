import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Amazon FBA',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.extensiv.com/hubfs/Fulfillment%20by%20Amazon%20%28FBA%29.jpg',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'Shopify Dropshipping',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://a.storyblok.com/f/94285/1536x895/c85484ddf1/printify-dropshipping.png',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Affiliate Marketing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.eastmojo.com/wp-content/uploads/2023/02/shutterstock_2007014807-scaled-1.jpg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Amazon FBA', img: 'https://www.extensiv.com/hubfs/Fulfillment%20by%20Amazon%20%28FBA%29.jpg' },
    { id: 2, name: 'Shopify Dropshipping', img: 'https://a.storyblok.com/f/94285/1536x895/c85484ddf1/printify-dropshipping.png' },
    { id: 3, name: 'Affiliate Marketing', img: 'https://www.eastmojo.com/wp-content/uploads/2023/02/shutterstock_2007014807-scaled-1.jpg' },
];

const ECommerce = () => {
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

export default ECommerce;

const styles = StyleSheet.create({})