import { Button } from '@material-ui/core'
import Cookies from 'js-cookie'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { setAuth } from '../../reducers/auth'


const Navigation = ({ setAuth, authIn}) => {

    const unloginUser = () => {
        Cookies.remove('user')
        setAuth(false)
    }

    const NavLink = (props) => 
    <Link to={props.path} 
        style={{marginRight: '20px',
        fontSize: '24px',
        textDecoration: 'none',
        color: 'white',
    }}>
        {props.children}
    </Link>

    return <>
    <div>
        {authIn ?
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            height: '100px'
        }}>
            
            <NavLink path='/profile'>Профіль</NavLink>
            <NavLink path='/users'>Контакти</NavLink>
            <NavLink path='/videoconferences'>Відеконференції</NavLink>
            <NavLink path='/messages'>Повідомлення</NavLink>
            {authIn ? <Button
                    onClick={unloginUser}
                    variant="contained" 
                    color="primary"
                    style={{flexDirection: 'flex-end',
                        height:'30px',
                        margin: '5px'

                    }}
                    >
                        Вийти
                    </Button> :
                <Redirect to='/' />}
        </div>
        : <Redirect to='/' />}
         
    </div>
    </>
}

export default Navigation