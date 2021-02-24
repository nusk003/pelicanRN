import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { BLUE, FONT_SIZE_M } from '../../settings';
import { Task } from '../../molecules';
import {connect} from 'react-redux'
import { Button } from '../../atoms';
import { ActivityIndicator } from 'react-native-paper';

const TaskList = (props) => {

    const {tasks,loading,navigation} = props

    return(
        
        <View style = {styles.menuList} >
        {loading ?
        <View>
            <ActivityIndicator/>
        </View>
        :
        <FlatList
            data = {tasks}
            ListHeaderComponent = {()=>(
                <View style = {styles.containerHeader} >
                    <View style = {styles.iconContainer} >
                        <AntDesign color = {BLUE} size = {widthPercentageToDP(7)}  name="calendar"  />
                    </View>
                    <Text style = {styles.textStyle} >Tasks</Text>
                    <Button onPress = {()=>navigation.navigate("AddTask")} >
                        <Text style = {{color : 'white',fontSize : FONT_SIZE_M,fontWeight : 'bold'}} >Add Task</Text>
                    </Button>
                </View>
            )}
            renderItem = {({item,index})=><Task {...item} key = {index} />}
            
        />}
        </View>
    )
}

const styles = StyleSheet.create({
    menuList : {
        justifyContent : 'center',
    },
    textStyle : {
        fontSize : widthPercentageToDP(5),
        fontWeight : 'bold'
    },
    iconContainer : {
        padding : widthPercentageToDP(3)
    },
    containerHeader : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    container : {
        padding : widthPercentageToDP(3),
        flex : 1
    }
})

const mapStateToProps = state => {

    return {
        tasks : state.getTasks.tasks,
        loading : state.getTasks.loading
    }
}

export default connect(mapStateToProps)(TaskList)