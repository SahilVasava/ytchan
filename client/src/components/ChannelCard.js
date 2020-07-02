import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Button, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {

        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));




const ChannelCard = (props) => {
    const classes = useStyles();
    console.log('subs', props.sub);
    return (
        <Grid item xs={6} sm={3}>
            <Card className={classes.root} elevation={0}>
                <CardContent className={classes.content}>
                    <Avatar className={classes.avatar} alt={props.sub.title} src={props.sub.thumbnails.default.url} />
                    <Typography variant="subtitle1">
                        {props.sub.title}
                    </Typography>
                    <Typography color="textSecondary">
                        11M Subscribers
        </Typography>

                </CardContent>
                <CardActions className={classes.actions}>
                    <Button variant="contained" size="small">Subscribed</Button>
                </CardActions>
            </Card >
        </Grid>
    );
}


export default ChannelCard;