import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core";

import ChannelCard from '../components/ChannelCard'

const ChannelCards = () => {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid item container>
                {/* <Grid item xs={false} sm={2} /> */}
                <Grid item xs={6} sm={3}>
                    <ChannelCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ChannelCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ChannelCard />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ChannelCard />
                </Grid>
                {/* <Grid item xs={false} sm={2} /> */}
            </Grid>
        </div>
    )
}

export default ChannelCards;
