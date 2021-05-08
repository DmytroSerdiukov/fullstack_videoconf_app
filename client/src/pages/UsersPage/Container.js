import React, { useEffect, useState } from 'react'
import UserAPI from '../../api/api'
import UsersPageMarkup from './Markup'


const UsersPageContainer = () => {


    const getUsers = async() => {
        const data = await UserAPI.getUsers()
        setUsers(data.data)
    }
    const [users, setUsers] = useState(null)
    useEffect( () => {
        getUsers()
    })

    return <UsersPageMarkup users={users}/>
}

export default UsersPageContainer