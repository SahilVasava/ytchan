import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core";

import ChannelCard from '../components/ChannelCard'

const ChannelCards = () => {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">

                <Grid item >
                    <ChannelCard />
                </Grid>

            </Grid>
        </div>
    )
}

export default ChannelCards;
