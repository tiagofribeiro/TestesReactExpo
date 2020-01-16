import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TitleText from './TitleText';
import Colors from '../Constants/Colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={{color: 'white'}}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;