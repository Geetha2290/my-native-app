import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity, ActionSheetIOS} from 'react-native';
import Note from './Note';
import { changeNotes } from '../actions/note';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    render(){
       
        let notes = this.state.noteArray.map((val, key) => {
            return <Note  key={key} val={val} keyVal = {key} 
                   deleteMethod = { () => this.deleteNote(key) } /> 
        });
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Shopping List</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value = {this.state.noteText}
                        onChangeText = {(noteText) => this.setState({noteText: noteText})}
                        placeholder='Add a Item'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput> 
                    <TouchableOpacity style={styles.addButton} onPress={ this.addNote.bind(this) }>
                        <Text style={styles.addButtonText}> + </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollViewContainer}>
                    {notes}
                </ScrollView>
            </View>
        )
    }

    addNote() {
        if(this.state.noteText){
            this.state.noteArray.push(this.state.noteText);
            this.setState({ noteArray: this.state.noteArray });
            this.setState({ noteText: '' });
            changeNotes(this.state.noteArray);
        }
    }

    deleteNote(key) {
        let {actions} = this.props;
        this.state.noteArray.splice(key,1);
        this.setState({ noteArray: this.state.noteArray});
        changeNotes(this.state.noteArray);
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header: {
        backgroundColor: '#A0522D',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 12
    },
    inputContainer: {
        padding: 0
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 15,
        backgroundColor: '#252525',
        borderTopColor: '#ededed'
    },
    scrollViewContainer: {
        flex: 1,
        marginBottom: 100
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 8,
        top: 10,
        backgroundColor: '#A0522D',
        width: 40,
        height: 40,
        borderRadius: 50,
        elevation: 8,
        alignContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});

const mapStateToProps = state => ({
    notes: state.notes,
  });
  
  const ActionCreators = Object.assign(
    {},
    changeNotes,
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)