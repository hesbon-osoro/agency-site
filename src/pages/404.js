import React from 'react';
import Layout from '../components/layout';
import { GenericH2, GenericParaAbout, Warn } from '../styles/IndexStyles';
import { Link } from 'gatsby'
import warning from './warning.png'

const error = () => (
    <Layout>
        <GenericH2 none dark some style={{ textAlign: 'center', padding: '3rem', color: 'red' }}>Page Not Found!</GenericH2>
        <GenericParaAbout >
            <Warn>
                {/* <FontAwesomeIcon icon={faHandshake} style={{textAlign: 'center', color: 'orange'}} size='10x'/> */}
                <img src={warning} alt="warning" style={{ position: 'relative',width: '100px', height: '100px'}}/>
            </Warn>
        </GenericParaAbout>
        <GenericParaAbout lessSize grey style={{textAlign: 'center', padding: '3rem', color: 'lime'}}>
            <Link to='/'>
            <p style={{display: 'block', fontSize: '24px', textTransform: 'uppercase', textAlign: 'center'}}>back to home page</p>
            </Link>
        </GenericParaAbout>
    </Layout>
)
export default error;