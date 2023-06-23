import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Keyword Research',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://searchengineland.com/wp-content/seloads/2019/06/keyword-research-tools-1200x900.png',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'On-Page SEO',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.shoutmeloud.com/wp-content/uploads/2020/08/On-page-SEO-Guide-1024x576.jpg',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Off-Page SEO',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.internetmarketingschool.co.in/wp-content/uploads/2018/06/Off-Page-SEO-Techniques.jpg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Keyword Research', img: 'https://searchengineland.com/wp-content/seloads/2019/06/keyword-research-tools-1200x900.png' },
    { id: 2, name: 'On-Page SEO', img: 'https://www.shoutmeloud.com/wp-content/uploads/2020/08/On-page-SEO-Guide-1024x576.jpg' },
    { id: 3, name: 'Off-Page SEO', img: 'https://www.internetmarketingschool.co.in/wp-content/uploads/2018/06/Off-Page-SEO-Techniques.jpg' },
];

const SEO = () => {
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

export default SEO;

const styles = StyleSheet.create({})