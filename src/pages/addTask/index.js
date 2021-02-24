import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { TextInput } from 'react-native-paper';
import { AddTaskForm } from '../../components/organisms';
import { STANDARD_PADDING } from '../../components/settings';

const AddTask = props => {

    return(
        <ScrollView>
            <View style = {{padding : STANDARD_PADDING}} >
                <AddTaskForm {...props} />
            </View>
        </ScrollView>
    )
}

export default AddTask