import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Social Media Marketing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://martech.org/wp-content/uploads/2015/04/social-media-marketing-e1430407975761.jpg',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'Email Marketing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5NtOXRTKae2ap0E5fJnbiQGV3Vbqpo7AsdnysZJZyJp_85UQ8bKHtroqS_r7leGH8pk&usqp=CAU',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Digital Advertising',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://blog.vantagecircle.com/content/images/2020/08/digital-advertisement.png',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Social Media Marketing', img: 'https://martech.org/wp-content/uploads/2015/04/social-media-marketing-e1430407975761.jpg' },
    { id: 2, name: 'Email Marketing', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5NtOXRTKae2ap0E5fJnbiQGV3Vbqpo7AsdnysZJZyJp_85UQ8bKHtroqS_r7leGH8pk&usqp=CAU' },
    { id: 3, name: 'Digital Advertising', img: 'https://blog.vantagecircle.com/content/images/2020/08/digital-advertisement.png' },
];

const DigitalMarketing = () => {
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

export default DigitalMarketing;

const styles = StyleSheet.create({})