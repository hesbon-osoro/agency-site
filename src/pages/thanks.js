import React from 'react';
import Layout from '../components/layout';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GenericH2, GenericParaAbout, Love } from '../styles/IndexStyles';

const thanks = () => (
    <Layout>
        <GenericH2 none dark some style={{ textAlign: 'center', padding: '3rem', color: 'green' }}>Thank You!</GenericH2>
        <GenericParaAbout >
            <Love>
                <FontAwesomeIcon icon={faHeart} style={{textAlign: 'center', color: 'red'}} size='10x'/>
            </Love>
        </GenericParaAbout>
        <GenericParaAbout lessSize grey>
            Form submission has been successful.
        </GenericParaAbout>
    </Layout>
)
export default thanks;