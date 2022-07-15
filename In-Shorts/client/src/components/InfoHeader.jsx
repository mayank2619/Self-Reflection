import React from 'react'
import {Box,makeStyles,Typography} from '@material-ui/core'

const useStyles = makeStyles({

    container:{
        
        height:48,
        background: '#f44336',
        color:'white',
        display:'flex',
        alignItems:'center'
    
    },
    text:{
        fontSize:14,
        marginLeft: 25

    },
    logo:{
        height:35,
        '&:last-child':{
            margin: '0 50px 0 20px'
        }
    }



})

export const InfoHeader = () => {
    const classes= useStyles()
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
            <Box style={{marginLeft:'auto'}}>
            <img src={appleStore} alt="apple" className={classes.logo}/>
            <img src={googleStore} alt ="google" className={classes.logo}/>
            </Box>
        </Box>
    )
}

