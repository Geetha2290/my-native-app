import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Note extends React.Component{
    render(){
        return(
            
            <View key={this.props.keyVal} style={styles.note}>
                <Text style={styles.noteText}>
                    {this.props.val}
                </Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100
    },
    noteText: {
        paddingLeft: 20,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white'
    }
});