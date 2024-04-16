import React from 'react';
import './About.scss';
import Container from "../../components/fragment/Container/Container";
import Developer from "../../components/fragment/Developer/Developer";

import { IconButton } from '@material-ui/core';
import { Brightness3 } from '@material-ui/icons';

const About = () => {
    return (
        <Container>

            <div className={"About"}>
                <div className="Dark-mode">
                    <h5>Modo oscuro</h5>
                    <IconButton>
                        <Brightness3 />
                    </IconButton>
                </div>
                <Developer />

            
            </div>

        </Container>
    );
}

export default About;
