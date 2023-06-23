import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../OnBoarding/Welcome';
import FirstScreen from '../OnBoarding/FirstScreen';
import SecondScreen from '../OnBoarding/SecondScreen';
import ThirdScreen from '../OnBoarding/ThirdScreen';
import Register from '../screen/Register';
import Login from '../screen/Login';
import CategoriesComponent from '../Components/CategoriesComponent';
import TopicProgramming from '../Components/TopicProgramming';
import CourseVideo from '../Components/CourseVideo';
import ContentWriting from '../Courses/ContentWriting';
import GraphicDesgin from '../Courses/GraphicDesgin';
import SEO from '../Courses/SEO';
import DigitalMarketing from '../Courses/DigitalMarketing';
import VirtualAssistant from '../Courses/VirtualAssistant';
import UIDesign from '../Courses/UIDesign';
import ECommerce from '../Courses/ECommerce';

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SecondScreen' component={SecondScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ThirdScreen' component={ThirdScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='CategoriesComponent' component={CategoriesComponent} options={{ headerShown: false }} />
                <Stack.Screen name='ContentWriting' component={ContentWriting} options={{ headerShown: false }} />
                <Stack.Screen name='GraphicDesgin' component={GraphicDesgin} options={{ headerShown: false }} />
                <Stack.Screen name='SEO' component={SEO} options={{ headerShown: false }} />
                <Stack.Screen name='DigitalMarketing' component={DigitalMarketing} options={{ headerShown: false }} />
                <Stack.Screen name='VirtualAssistant' component={VirtualAssistant} options={{ headerShown: false }} />
                <Stack.Screen name='UIDesign' component={UIDesign} options={{ headerShown: false }} />
                <Stack.Screen name='ECommerce' component={ECommerce} options={{ headerShown: false }} />
                <Stack.Screen name='TopicProgramming' component={TopicProgramming} options={{ headerShown: false }} />
                <Stack.Screen name='CourseVideo' component={CourseVideo} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
