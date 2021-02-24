import React,{useSate, useState} from 'react'
import {connect} from 'react-redux'
import { addTask } from '../../../redux/actions';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import { View,StyleSheet } from 'react-native';
import { STANDARD_MARGIN, FONT_SIZE_H } from '../../settings';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Keyboard,Platform,DatePickerAndroid,Text} from 'react-native'
import moment from 'moment'
import { Button } from '../../atoms';

const AddTask = (props) => {

    const [title,setTitle] = useState("")
    const [date,setDate] = useState(moment().format('YYYY-MM-DD'))
    const [show, setShow] = useState(false);
    const [description,setDescription] = useState('')
    const {addTask,loading,navigation} = props
    const styles = StyleSheet.create({
        input : {
            marginBottom : STANDARD_MARGIN
        }
    })

    const onChange = (date) => {
        if (date.day > 0){
            setDate(moment(`${date.year}-${date.month+1}-${date.day}`,'YYYY-MM-DD').format('YYYY-MM-DD'))
        }
    };


    const onSubmit = () => {

        if (!title || title === "" || !description || description === ""){
            return
        }

        const payload = {
            title,description,date
        }

        addTask(payload,()=>{
            navigation.goBack()
        })
    }

    return(
        <View>
            <TextInput onChangeText = {setTitle} mode = {"outlined"} style = {styles.input} label = "Title" placeholder = "Title" />
            <TextInput onChangeText = {setDescription} mode = {"outlined"} style = {styles.input} label = "Description" placeholder = "Description"  />
            <TextInput onFocus={()=>{
                Keyboard.dismiss()
                DatePickerAndroid.open({
                    date : new Date(date.toString())
                })
                .then((value)=>{
                    onChange(value)
                })
            }} mode = {"outlined"} style = {styles.input} label = "Date" placeholder = "Date" value = {date.toString()}  />
            {loading?
            <View>
                <ActivityIndicator />
            </View>
            :
            <Button onPress = {onSubmit} >
                <Text style = {{fontSize : FONT_SIZE_H,color : 'white'}} >Add Task</Text>
            </Button>
            }
            
        </View>
    )
}

const mapStateToProps = state => {
    return{
        loading : state.addTask.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTask : (payload,success,error) => dispatch(addTask(payload,success,error))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask)