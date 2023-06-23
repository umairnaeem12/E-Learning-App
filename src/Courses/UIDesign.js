import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Interaction Design',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://assets.hongkiat.com/uploads/interaction-design-vs-visual-design/ui-ux-design.jpg',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'Visual Design',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://elearningindustry.com/wp-content/uploads/2015/09/10-tips-to-improve-your-visual-design-skills-for-non-designers.jpg',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Prototyping and Wireframing',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://assets.designhill.com/design-blog/wp-content/uploads/2022/10/Wireframe-vs-mockup-vs-prototype-Decoding-the-differences.jpg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Interaction Design', img: 'https://assets.hongkiat.com/uploads/interaction-design-vs-visual-design/ui-ux-design.jpg' },
    { id: 2, name: 'Visual Design', img: 'https://elearningindustry.com/wp-content/uploads/2015/09/10-tips-to-improve-your-visual-design-skills-for-non-designers.jpg' },
    { id: 3, name: 'Prototyping and Wireframing', img: 'https://assets.designhill.com/design-blog/wp-content/uploads/2022/10/Wireframe-vs-mockup-vs-prototype-Decoding-the-differences.jpg' },
];

const UIDesign = () => {
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

export default UIDesign;

const styles = StyleSheet.create({})