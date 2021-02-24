import React,{useState} from 'react'
import {AppBar, TaskList, AddTaskModal} from '../../components/organisms'
import {connect} from 'react-redux'
import { getTasks } from '../../redux/actions';
import { ScrollView } from 'react-native'

const Home = (props) => {

    const {getTasks} = props

    React.useEffect(()=>{
        getTasks()
    },[])

    return(
        <TaskList {...props} />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks : () => dispatch(getTasks())
    }
}

export default connect(null,mapDispatchToProps)(Home)