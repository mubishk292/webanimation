import React from 'react'
import PropTypes from 'prop-types';
// Material UI Elements
import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

const DetailsCard = ({title, subheader, image, reverse, details}) => {

    const ImageElement = () => (
        <Grid item sm={6} xs={12} className="item" >
            <img src={image} alt="svg" className="details-image" />
        </Grid>
    )

    const DetailsElement = () => (
        <Grid item sm={6} xs={12} className="item" style={{ padding: '0 20px' }}>
            <Typography variant="h4">About</Typography>
            <Typography variant="body2">{details}</Typography>
        </Grid>
    )

    return (
        <Card className="details-card">
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Grid container alignItems="center" justifyContent="center" className="grid" >
                    <ImageElement />
                    <DetailsElement />
                </Grid>
            </CardContent>
        </Card>
    )
}

DetailsCard.propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reverse: PropTypes.bool.isRequired,
    details: PropTypes.string.isRequired,
}

export default DetailsCard
