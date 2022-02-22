import React, { useEffect } from 'react';
// Material UI Elements
import { Container, Typography } from '@material-ui/core';
// Components
import DetailsCard from './DetailsCard';

const Details = () => {
    useEffect(() => {
        document.querySelectorAll('.details-card').forEach((card,index) => {
            card.setAttribute('data-aos', index % 2 === 0 ? 'fade-left' : 'fade-right');
        })
    // eslint-disable-next-line
    }, []);
    return (
        <Container maxWidth="md" className="details-page" id="details-page">
            <Typography variant="h2">Places</Typography>
            <DetailsCard 
                reverse={false}
                title="Glaciers and Icebergs" 
                subheader="Greenland" 
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2016/02/top-10-natural-wonders/top-10-natural-wonders-greenland-glaciers.jpg.rend.hgtvcom.966.725.suffix/1491592786027.jpeg" 
                details="Combine the world's largest island with a total population of only 55,000 and Greenland provides the perfect backdrop for a true bonding experience with nature. Rent a kayak, originally invented by hunters here, and row arctic waters past towering icebergs and glaciers."
            />
            <DetailsCard 
                reverse={true}
                title="Great Barrier Reef" 
                subheader="Australia" 
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2016/02/top-10-natural-wonders/top-10-natural-wonders-great-barrier-reef.jpg.rend.hgtvcom.966.725.suffix/1491592786018.jpeg"
                details="The Great Barrier Reef's vibrant coral and fish form an underwater tropical paradise that promises the best scuba diving and snorkeling in the world. Spanning more than 1,200 miles of crystal waters along the coastline, the reef system is the largest and healthiest anywhere."
            />
            <DetailsCard 
                reverse={false}
                title="Grand Prismatic Springs" 
                subheader="Yellowstone, Wyoming" 
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/01/08ET/top-10-wonders-west-yellowstone-national-park.jpg.rend.hgtvcom.966.725.suffix/1491581132559.jpeg"
                details="More than 1,000 miles of backcountry hiking trails through Yellowstone lead travelers to pristine areas rich with extraordinary wildlife and steaming, bubbling hot springs. Your chances at spotting an endangered grizzly or elk are pretty good -- the park is home to the largest elk herd in North America and one of two grizzly bear populations."
            />
            <DetailsCard 
                reverse={true}
                title="Redwood National Park" 
                subheader="California" 
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2016/02/top-10-natural-wonders/top-10-natural-wonders-redwood-forest-trees.jpg.rend.hgtvcom.966.725.suffix/1491592786051.jpeg"
                details='Visitors here cannot help but feel awestruck by the unbelievable enormity of the coast redwoods, the tallest and oldest trees on earth. The tallest redwood on record, known simply as "the Tall Tree," is 600 years old and stands more than 350 feet.'
            />
            <DetailsCard 
                reverse={false}
                title="Gran Sabana" 
                subheader="Venezuela" 
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2016/02/top-10-natural-wonders/top-10-natural-wonders-gran-sabana.jpg.rend.hgtvcom.966.725.suffix/1491592786011.jpeg"
                details='Located within Canaima, a national park the size of Belgium, Gran Sabana is the plateau region between Venezuela and Brazil. The hauntingly beautiful landscape is dominated by the unique "tepuyes" -- flat-topped mountains with steep vertical walls.'
            />
        </Container>
    )
}

export default Details;
