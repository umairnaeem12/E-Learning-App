import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { useNavigation } from '@react-navigation/native';


const CourseVideo = () => {

  const navigation = useNavigation();

  const [selecedButton, setSelecedButton] = useState('Videos');
  const [selecedButtonData, setSelecedButtonData] = useState([]);
  const [selectedTitle, setSelecedTitle] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [getVideoSource, setGetVideoSource] = useState('');
  const [videoURL, setVideoURL] = useState(null);

  const fetchVideo = () => {
    storage()
      .refFromURL(getVideoSource)
      .getDownloadURL()
      .then((url) => {
        setVideoURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (getVideoSource) {
      fetchVideo();
    }
  }, [getVideoSource]);

  // console.log('This is Video', showVideo)

  // console.log('Button Name', selecedButton)
  // console.log('Button Data', selecedButtonData)
  console.log('Video Button', selectedTitle)

  const Data = [
    {
      id: 1,
      Button: 'Videos',
      Content: [
        {
          Num: '01',
          title: 'Introduction',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://elearning-30e79.appspot.com/react.mp4',
        },
        {
          Num: '02',
          title: 'Summary',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://e-learning-58934.appspot.com/react.mp4',
        },
        {
          Num: '03',
          title: 'Lecture #01',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://e-learning-58934.appspot.com/react.mp4',
        },
        {
          Num: '03',
          title: 'Lecture #01',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://e-learning-58934.appspot.com/react.mp4',
        },
        {
          Num: '03',
          title: 'Lecture #01',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://e-learning-58934.appspot.com/react.mp4',
        },
        {
          Num: '03',
          title: 'Lecture #01',
          Icon: <Icon name="play-circle-outline" size={30}></Icon>,
          vidoeSoucre: 'gs://e-learning-58934.appspot.com/react.mp4',
        },
      ],
    },

    {
      id: 2,
      Button: 'Douments',
      Content: [
        {
          title: 'This is First Pdf',
        },
        {
          title: 'This is Second Pdf',
        },
        {
          title: 'This is Third Pdf',
        }
      ],
    },

    {
      id: 3,
      Button: 'Reviews',
      Content: [
        {
          title: 'This is very informative',
        },
        {
          title: 'This is very Knowledgable',
        },
        {
          title: 'This is very Good',
        },
      ]
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setSelecedButton(item.Button);
            setSelecedButtonData(item.Content);
          }}>
          <Text style={[selecedButton === item.Button ? { color: 'red', borderWidth: 1, borderRadius: 10, padding: 7 } : { color: 'green' }, { fontSize: 17, fontWeight: '900' }]}>{item.Button}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderTitleItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 20 }}>

        <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {
          setSelecedTitle(item.title);
          setGetVideoSource(item.vidoeSoucre);
          // fetchVideo();
          setShowVideo(true);
        }}>
          <View style={[selectedTitle === item.title ? { borderWidth: 1, borderColor: 'red', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 } : { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10 }]}>
            <Text style={{ fontSize: 15, fontWeight: '700' }}>{item.Num}</Text>
            {/* <Text style={{ fontSize: 20, paddingLeft: 10 }}>{item.title}</Text> */}
            <Text style={[selectedTitle === item.title ? { color: 'red', paddingLeft: 10, fontWeight: '700', fontSize: 17 } : { color: 'green', paddingLeft: 10 }]}>{item.title}</Text>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              {selectedTitle === item.title ? (
                <Icon name="pause-circle-outline" size={30} />
              ) : (
                item.Icon
              )}
            </View>

          </View>
        </TouchableOpacity>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', }}>

      {/* <ImageBackground
        source={{ uri: 'https://www.global-business-school.org/sites/default/files/gbsb-global-online-education-blog.jpg' }}
        style={{ width: '100%', height: '100%' }}>

        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> */}

      <View style={{ flex: 1 }}>
        {showVideo && videoURL && (
          <VideoPlayer
            source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            style={{ width: '100%', borderRadius: 20 }}
          />
        )}
      </View>

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          horizontal={true}
        ></FlatList>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={selecedButtonData}
          renderItem={renderTitleItem}
        ></FlatList>
      </View>

      {/* </View>
      </ImageBackground> */}

    </View>

  )
}

export default CourseVideo;

const styles = StyleSheet.create({})