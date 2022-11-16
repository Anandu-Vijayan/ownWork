import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'


const theme = createTheme();


const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errPass,setErrPass]=useState('')
    const [errEmail,setErrEmail]=useState('')
    const navigate=useNavigate('')


const handlePass = () => {
    console.log(password);
     if (password === "" || password === " ") {
       setErrPass("Password cannot be empty");
       return false;
     } else if (password.length < 6) {
       setErrPass("Password must be atleast 6 characters");
       return false;
     } else {
       setErrPass("");
       return true;
     }
   };
 
   const handleEmail = () => {
     console.log(email);
     if (email === "" || email === " ") {
       setErrEmail("Email cannot be empty");
       return false;
     } else if (!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/)) {
       setErrEmail("Enter a proper email");
       return false;
     } else {
       setErrEmail("");
       return true;
     }
   };
 
 
 const handleSubmit = async(e)=>{
    e.preventDefault()
    if(handleEmail && handlePass){
        try{
            const {data}= await axios.post('/login',{
                email,password
            })
            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data))
            navigate('/home')

        }catch(error){
            console.log(error);

        }
    }
 }
 useEffect(()=>{
    const userInfo=localStorage.getItem('userInfo')
    if(userInfo){
        navigate('/home')

    }else{
        navigate('/')

    }
 },[])
 
 




  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}  */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onKeyUp={() => handleEmail()}
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              onChange={(e)=>setEmail(e.target.value)}
              autoFocus
            />
            <span style={{ color: "red" }}>{errEmail}</span>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onKeyUp={() =>  handlePass()}
              value={password}
              label="Password"
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            
            <span style={{ color: "red" }}>{errPass}</span>
            <Button
            onClick={()=>{handleSubmit()}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
               <Link to="/signup">I dont't have a account</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  )
}

export default Login