import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
        <Container maxWidth="sm" className="footer">
            <div data-aos="fade-in">
                <Typography variant="h2" align="center">About</Typography>
                <Typography variant="body2" color="secondary"><strong>Developed by Mubeen Ahmad</strong></Typography>
                <Typography variant="body1">Developed using Web Animations API</Typography>
                    <Typography variant="h4" color="primary">TECH USED</Typography>
                    <ul style={{padding: '0 10px'}}>
                        <li><Typography variant="body2">React</Typography></li>
                        <li><Typography variant="body2">Web Animations API</Typography></li>
                        <li><Typography variant="body2">Material UI</Typography></li>
                    </ul>
            </div>
        </Container>
    )
}

export default Footer;
