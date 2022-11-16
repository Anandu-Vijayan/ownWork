import React,{useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Form from '../../Components/Form/Form';



const Home = () => {
    const navigate=useNavigate()


    const [user,setUser]=useState('')
    useEffect(()=>{
        const userInfo=localStorage.getItem("userInfo")
        if(userInfo){
            setUser(JSON.parse(userInfo))
            navigate('/home')
        }else{
          navigate('/')
        }
        
    },[])
    const logout=()=>{
        localStorage.removeItem("userInfo")
        navigate('/')

    }

  return (
    <div>
         <Box sx={{ flexGrow: 0}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 0}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user ? <Button onClick={logout} color="inherit">Logout</Button> : <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar> 
    </Box>
    <Form/>
    </div>
  )
}

export default Home