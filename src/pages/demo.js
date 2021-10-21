import React from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { GenericH2, GenericParaAbout, Shake } from '../styles/IndexStyles';

const demo = () => (
    <Layout>
        <GenericH2 none dark some style={{ textAlign: 'center', padding: '3rem', color: 'green' }}>Thank You!</GenericH2>
        <GenericParaAbout >
            <Shake>
                <FontAwesomeIcon icon={faHandshake} style={{textAlign: 'center', color: 'orange'}} size='10x'/>
            </Shake>
        </GenericParaAbout>
        <GenericParaAbout lessSize grey>
        <p style={{color: 'green', display: 'block', fontSize: '24px', textTransform: 'uppercase', textAlign: 'center'}}>            
            Thank you for taking you time. <br />
            This a sample showcase.  
        </p>

        </GenericParaAbout>
    </Layout>
)
export default demo;