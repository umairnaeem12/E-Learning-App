import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Research and Data Gathering',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://www.questionpro.com/blog/wp-content/uploads/2018/04/Research-Methods_without-logo.jpg',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'Social Media Management',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2023/03/istockphoto-1346575545-170667a.jpg',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Project Management',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://skopus.co.za/panel/wp-content/uploads/2022/10/project-management.jpg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Research and Data Gathering', img: 'https://www.questionpro.com/blog/wp-content/uploads/2018/04/Research-Methods_without-logo.jpg' },
    { id: 2, name: 'Social Media Management', img: 'https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2023/03/istockphoto-1346575545-170667a.jpg' },
    { id: 3, name: 'Project Management', img: 'https://skopus.co.za/panel/wp-content/uploads/2022/10/project-management.jpg' },
];

const VirtualAssistant = () => {
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

export default VirtualAssistant;

const styles = StyleSheet.create({})