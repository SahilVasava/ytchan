import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import GoogleBtn from './GoogleBtn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.title}>
                            YT Chan
                </Typography>
                        <GoogleBtn />
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}


export default NavBar;