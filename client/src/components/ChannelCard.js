import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Button, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: 'inherit'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    title: {
        overflowWrap: 'anywhere'
    }
}));




const ChannelCard = (props) => {
    const classes = useStyles();
    const formateSubscribersCount = (labelValue) => {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9

            ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

                    : Math.abs(Number(labelValue));

    }
    return (
        <Grid item xs={6} sm={3} md={2}>
            <Card className={classes.root} elevation={0}>
                <CardContent className={classes.content}>
                    <Avatar className={classes.avatar} alt={props.sub.title} src={props.sub.thumbnails.default.url} />
                    <Typography className={classes.title} variant="subtitle1">
                        {props.sub.title}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.sub.statistics ? `${formateSubscribersCount(props.sub.statistics.subscriberCount)} Subscribers` : ''}
                    </Typography>

                </CardContent>
                <CardActions className={classes.actions}>
                    <Button variant="contained" size="small" color="secondary">Subscribed</Button>
                </CardActions>
            </Card >
        </Grid>
    );
}


export default ChannelCard;