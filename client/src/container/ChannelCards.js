import React, { useEffect, useContext, useState } from 'react'
import { Grid } from "@material-ui/core";
import axios from 'axios';
import ChannelCard from '../components/ChannelCard'
import { AuthContext } from '../contexts/authContext';
import SearchBar from '../components/SearchBar';
//import SearchBar from 'material-ui-search-bar'


const ChannelCards = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const { isLoggedIn, accessToken } = useContext(AuthContext);
    const [search, setSearch] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        if (isLoggedIn && accessToken) {

            const fetchSubscriptions = async () => {
                try {

                    const subscriptionsRes = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true`, {
                        headers: { 'Authorization': 'Bearer ' + accessToken },

                    })
                    //console.log(subscriptionsRes);
                    let subData = subscriptionsRes.data.items.map(item => item.snippet);
                    //console.log(subData);

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

                    const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics,brandingSettings&id=${ids}`, {
                        headers: { 'Authorization': 'Bearer ' + accessToken },

                    })
                    console.log(channelResponse);
                    let channelItems = channelResponse.data.items;
                    let extractedTags = [];
                    let filledSubs = subscriptions.map(sub => {
                        //console.log(channelItems.find(item => item.id === sub.resourceId.channelId), sub.resourceId.channelId)
                        let channelDetails = channelItems.find(item => item.id === sub.resourceId.channelId);
                        let indTags = []
                        let titleTags = channelDetails.brandingSettings.channel.title.split(' ').map(v => v.toLowerCase());
                        indTags = [...titleTags];
                        if (channelDetails.brandingSettings.channel.keywords) {
                            indTags = [...indTags, ...channelDetails.brandingSettings.channel.keywords.replace(/"/g, '').split(' ').map(k => k.toLowerCase())];
                            indTags = [...new Set(indTags)];
                            extractedTags = [...extractedTags, ...indTags];
                            console.log(extractedTags)
                            //extractedTags = extractedTags.substr(1, extractedTags.length - 1).replace('""', '').split(' ');
                            //extractedTags.map(tg => { console.log(tg.replace('\"', '')); return tg.replace('""', '') });


                        }
                        // console.log(channelDetails.brandingSettings.channel.title.split(' '))
                        //extractedTags = [...new Set(...extractedTags, ...channelDetails.brandingSettings.channel.title.split(' '))];
                        // console.log("before", extractedTags);
                        //extractedTags = [...extractedTags, ...titleTags];
                        console.log("after", extractedTags);
                        //extractedTags = Array.from(extractedTags);
                        console.log('before tags', tags);
                        // console.log('after tags', tags);
                        return {
                            ...sub,
                            statistics: channelDetails.statistics,
                            keywords: indTags
                        }
                    });

                    console.log('filled subds', filledSubs);
                    setTags([...tags, ...extractedTags])
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
                <Grid item xs={12}>
                    {/* <SearchBar
                        value={search}
                        onChange={(newValue) => setSearch(newValue)}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                    /> */}
                    <SearchBar tags={tags} setValues={(value) => setSearch(value)} />
                </Grid>
                {subscriptions.filter(sb => search.length ? search.some(val => sb.keywords ? sb.keywords.includes(val) : false) : true).map(sub => {
                    return (

                        <ChannelCard key={sub.resourceId.channelId} sub={sub} />


                    )
                })}
                {/* <ChannelCard sub={{
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
                }} /> */}
                {/* <Grid item xs={false} sm={2} /> */}
            </Grid>
        </div>
    )
}

export default ChannelCards;
