import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CourseTopic from '../Components/CourseTopic';
import Information from '../demoCom/Information';
import Categories from '../demoCom/Categories';

const Data = [
    {
        id: 1,
        title: 'Adobe Photoshop',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://beebom.com/wp-content/uploads/2022/06/Adobe-to-Soon-Offer-the-Web-Version-of-Photoshop-for-Free-Check-out-the-Details-Here-feat..jpg?w=730&h=487&crop=1&quality=75',
        price: '$75.00',
    },
    {
        id: 2,
        title: 'Adobe Illustrator',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://helpx.adobe.com/content/dam/help/en/illustrator/using/Illustrator-on-ipad/jcr_content/main-pars/multi_column/col-50-50-c1/image/whats_new_tile_1.png.img.png',
        price: '$75.00',
    },
    {
        id: 3,
        title: 'Layout Design',
        teacher: 'Ahtisham Ali',
        Icon: name = "person",
        image: 'https://helpx.adobe.com/content/dam/help/en/illustrator/how-to/begin-layout-design/jcr_content/main-pars/image_1360518999/begin-layout-design-step2_900x506.jpg.img.jpg',
        price: '$75.00',
    }
]

const Dataa = [
    { id: 1, name: 'Adobe Photoshop', img: 'https://www.searchenginejournal.com/wp-content/uploads/2021/12/seo-copywriting-61ded65aa6f8e-sej.png' },
    { id: 2, name: 'Adobe Illustrator', img: 'https://yoshirodigital.com/wp-content/uploads/2021/04/SEO-content.jpg' },
    { id: 3, name: 'Layout Design', img: 'https://www.blendb2b.com/hubfs/BLD%20techncial%20blog.jpeg' },
];

const GraphicDesgin = () => {
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

export default GraphicDesgin;

const styles = StyleSheet.create({})