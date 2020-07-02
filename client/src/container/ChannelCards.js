import React, { useEffect, useContext, useState } from 'react'
import { Grid } from "@material-ui/core";
import axios from 'axios';
import ChannelCard from '../components/ChannelCard'
import { AuthContext } from '../contexts/authContext';

const ChannelCards = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const { isLoggedIn, accessToken } = useContext(AuthContext);
    useEffect(() => {
        if (isLoggedIn && accessToken) {
            axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true`, {
                headers: { 'Authorization': 'Bearer ' + accessToken },

            })
                .then(response => {
                    console.log(response);
                    let subData = response.data.items.map(item => item.snippet);
                    console.log(subData);
                    setSubscriptions(subData);
                }).catch(err => {
                    console.log(err);
                })

        }
    }, [isLoggedIn, accessToken]);
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid item container>
                {/* <Grid item xs={false} sm={2} /> */}
                {subscriptions.map(sub => {
                    return (

                        <ChannelCard key={sub.resourceId.channelId} sub={sub} />


                    )
                })}

                {/* <Grid item xs={false} sm={2} /> */}
            </Grid>
        </div>
    )
}

export default ChannelCards;
