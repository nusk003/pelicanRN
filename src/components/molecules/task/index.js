import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import Octicons from 'react-native-vector-icons/Octicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import PropTypes from 'prop-types'
import { LIGHT_BLUE, STANDARD_MARGIN, STANDARD_PADDING, FONT_SIZE_H, FONT_SIZE_M, GREY } from '../../settings';
import moment from 'moment'

function getDaysRemaining(date) {
    var eventdate = moment(date);
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}

const ToDoItem = ({title,description,date}) => {

    const daysRemaining =  getDaysRemaining(date)
    let str = ""
    let color = "red"


    if (daysRemaining === 0){
        str = "Today"
        color = "green"
    }
    else if (daysRemaining === 1){
        str = "1 day more"
    }
    else if (daysRemaining > 1){

        str = daysRemaining+" days more"
        color = "black"
    }
    else if (daysRemaining === -1){
        str = daysRemaining+" day ago"
        color = "orange"
    }
    else{
        str = daysRemaining+" days ago"
        color = "orange"

    }

    const styles = StyleSheet.create({
        icon : {
            marginRight : STANDARD_MARGIN
        },
        container : {
            flexDirection : 'row',
            alignItems : 'center',        
            backgroundColor : 'white',
            borderRadius : widthPercentageToDP(1),
            marginLeft : widthPercentageToDP(10),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            borderColor : color,
            shadowRadius: 2.22,
            elevation: 3,
            padding : STANDARD_PADDING,
            marginBottom : STANDARD_MARGIN
        },
        titleText : {
            fontSize : FONT_SIZE_H,
            color : color,
            fontWeight : 'bold'
        },
        textStyle : {
            color : GREY,
            fontSize : FONT_SIZE_M,
        }
    })

    return(
        
        <View style = {styles.container} >
            <View style = {{
                marginLeft : widthPercentageToDP(-8)
            }} >
                <View
                    style = {{
                        width : widthPercentageToDP(10),
                        height : widthPercentageToDP(10),
                        backgroundColor : color,
                        justifyContent : 'center',
                        alignItems : 'center',
                        borderRadius : widthPercentageToDP(5)
                    }}
                >
                    <AntDesign name="check" size={widthPercentageToDP(7)} color= {"white"} />
                </View>
            </View>
            <View style = {{flex : 1,marginLeft : widthPercentageToDP(3)}} >
                <Text style = {styles.titleText} >{title}</Text>
                <Text style = {styles.textStyle} >{description}</Text>
                <View style = {{flexDirection : 'row',alignItems : 'center',marginBottom : STANDARD_MARGIN}} >
                    <EvilIcons name="clock" style = {{marginRight : widthPercentageToDP(1)}} size={FONT_SIZE_H} color={GREY} />
                    <Text style = {styles.textStyle} >{str}</Text>
                </View>
                <View style = {{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}} >
                <View style = {{flexDirection : 'row'}} >
                    <EvilIcons style = {styles.icon} name="comment" size={widthPercentageToDP(5)} color={GREY} />
                    <Octicons style = {styles.icon} name="tasklist" size={widthPercentageToDP(4)} color={GREY} />
                    <AntDesign style = {styles.icon} name="staro" size={widthPercentageToDP(4)} color={GREY} />
                </View>
                </View>
            </View>
        </View>
    )
}



export default ToDoItem