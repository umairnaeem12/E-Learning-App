import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TextInputComponent = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor="white"
            />
        </View>
    );
};

export default TextInputComponent;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#bca184',
        padding: 10,
        color: 'white',
    },
});
