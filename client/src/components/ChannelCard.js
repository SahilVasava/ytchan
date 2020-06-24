import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { palette, spacing, typography } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {

        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    content: {
        alignItems: 'center'
    },
    avatar: {
        margin: 'auto'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));




const ChannelCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                <Typography variant="h5" component="h2">
                    Title
        </Typography>
                <Typography color="textSecondary">
                    11M Subscribers
        </Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Subscribed</Button>
            </CardActions>
        </Card >
    );
}


export default ChannelCard;