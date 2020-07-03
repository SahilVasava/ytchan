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

            const fetchSubscriptions = async () => {
                try {

                    const subscriptionsRes = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true`, {
                        headers: { 'Authorization': 'Bearer ' + accessToken },

                    })
                    // console.log(subscriptionsRes);
                    let subData = subscriptionsRes.data.items.map(item => item.snippet);
                    // console.log(subData);

                    setSubscriptions(subData);
                } catch (error) {
                    console.log(error);
                }

            };

            fetchSubscriptions();

        }
    }, [isLoggedIn, accessToken]);

    useEffect(() => {
        if (isLoggedIn && accessToken && subscriptions.length) {
            const fetchChannelDetails = async (ids) => {
                try {

                    const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ids}`, {
                        headers: { 'Authorization': 'Bearer ' + accessToken },

                    })
                    //console.log(channelResponse);
                    let channelItems = channelResponse.data.items;
                    let filledSubs = subscriptions.map(sub => {
                        //console.log(channelItems.find(item => item.id === sub.resourceId.channelId), sub.resourceId.channelId)
                        let channelDetails = channelItems.find(item => item.id === sub.resourceId.channelId);
                        return {
                            ...sub,
                            statistics: channelDetails.statistics
                        }
                    });
                    //console.log('filled subds', filledSubs);

                    setSubscriptions(filledSubs);
                } catch (error) {
                    console.log(error);
                }

            };

            //console.log('subsss', subscriptions);
            let ids = subscriptions.map(sub => sub.resourceId.channelId).join(',');
            //console.log(ids);
            fetchChannelDetails(ids);
        }
    }, [isLoggedIn, accessToken, subscriptions.length]);

    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={1} >
                {/* <Grid item xs={false} sm={2} /> */}
                {subscriptions.map(sub => {
                    return (

                        <ChannelCard key={sub.resourceId.channelId} sub={sub} />


                    )
                })}
                <ChannelCard sub={{
                    title: 'Lorem ipsum dolor sit amet.', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                <ChannelCard sub={{
                    title: 'tt', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                <ChannelCard sub={{
                    title: 'tt', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                <ChannelCard sub={{
                    title: 'tt', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                <ChannelCard sub={{
                    title: 'tt', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                <ChannelCard sub={{
                    title: 'tt', thumbnails: {
                        default: {
                            url: 'https://via.placeholder.com/150'
                        }
                    }
                }} />
                {/* <Grid item xs={false} sm={2} /> */}
            </Grid>
        </div>
    )
}

export default ChannelCards;
