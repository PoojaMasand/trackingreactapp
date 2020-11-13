import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/courierservice1_0.jpg' ;


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      
      backgroundImage: `url(${Image})`,
      
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  /*

  This method is used to build the home screen and render the login form 
  with username and phone details of the user. It uses Material UI external library.
  */

export default function HomePage()
{
    
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  function addValidation()
  {
      if(name === '' || phone === '')
        alert("User Name and Phone are required fields")
      
  }
  const classes = useStyles();
  
    
    return(
        <div>
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Track your package
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name John Doe"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="phone +46 729478015"
            id="phone"
            autoComplete="phone"
            onChange={(event) => setPhone(event.target.value)}
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          {name === '' || phone === '' ? 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={addValidation}
            className={classes.submit}
            
          >
            Search
          </Button>
          :
          <Link to ={`/header/${name}/${phone}`}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Search
          </Button>
          </Link>
         }
        </form>


        
      </div>
    </Grid>
    
  </Grid>
  
  </div>

  
);
}