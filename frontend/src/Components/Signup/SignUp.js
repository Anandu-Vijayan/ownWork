import * as React from 'react';
import { useState } from 'react';
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
import { Navigate, NavLink } from 'react-router-dom';
import axios from 'axios'


const theme = createTheme();
const SignUp = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')



    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const config={
                headers:{
                    "Content-type":"application/json"
                }

            }
            const {data}= await axios.post(
                "/signup",
                {firstName,lastName,email,password,phoneNumber},
                config
            )
            console.log({data});
            Navigate('/login')

        } catch (error) {
            
            
        }
       
   
    }
    

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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                value={firstName}
                fullWidth
                onChange={(e)=>setFirstName(e.target.value)}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={lastName}
                fullWidth
                onChange={(e)=>setLastName(e.target.value)}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={email}
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={password}
                name="password"
                label="Password"
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phoneNumber"
                value={phoneNumber}
                label="PhoneNumber"
                onChange={(e)=>setPhoneNumber(e.target.value)}
                type="number"
                id="phoneNumber"
                autoComplete="PhoneNumber"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
              <Grid item>
              
                  <NavLink to ="/login" sx={{cursor:"pointer"}} >Already have an account? Sign in</NavLink>
               
              </Grid>
              </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
}

export default SignUp