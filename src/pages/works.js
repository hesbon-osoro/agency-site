import React from 'react';
import { Works, GenericH2 } from '../styles/IndexStyles';
import Layout from '../components/layout';
import Project from '../components/Project';

// work images
import printbill from '../images/code-820275_1920.jpg';
import sprung from '../images/alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg';
import orange from '../images/ben-kolde-bs2Ba7t69mM-unsplash (1).jpg';
import billing from '../images/luke-peters-B6JINerWMz0-unsplash.jpg';
import ferrari from '../images/ferrari-f50-wallpaper.jpg';
import pregnancy from '../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg';
import jaaga from '../images/student-849825_1920.jpg';
import responsive1 from '../images/web-design-1953129_1920.jpg';
import responsive2 from '../images/website-3374825_1920.jpg';
import conference from '../images/artificial-intelligence-3382507_1920.jpg';
import itunes from '../images/office-932926_1920.jpg';
import parallax from '../images/productivity-1995786_1920.jpg';
import yelp from '../images/artificial-intelligence-3685928_1920.png';
import blogsite from '../images/website-3374825_1920.jpg';
import portifolio from '../images/software-developer-6521720_1920.jpg';

const projects = [
    {
        image: `${printbill}`,
        title: 'PrintBill',
        link: '/demo'
    },
    {
        image: `${sprung}`,
        title: 'Sprung',
        link: '/demo',
    },
    {
        image: `${orange}`,
        title: 'orange Health',
        link: '/demo'
    },
    {
        image: `${billing}`,
        title: 'Billing Restro',
        link: '/demo'
    },
    {
        image: `${ferrari}`,
        title: 'Ferrari Sports',
        link: '/demo'
    },
    {
        image: `${pregnancy}`,
        title: 'Pregnancy info',
        link: '/demo'
    },
    {
        image: `${jaaga}`,
        title: 'Jaaga Study',
        link: '/demo'
    },
    {
        image: `${responsive1}`,
        title: 'Responsive Site- POC',
        link: '/demo'
    },
    {
        image: `${responsive2}`,
        title: 'Responsive Site2- POC',
        link: '/demo'
    },
    {
        image: `${conference}`,
        title: 'Style Conference',
        link: '/demo'
    },
    {
        image: `${itunes}`,
        title: 'iTunes Clone - POC',
        link: '/demo'
    },
    {
        image: `${parallax}`,
        title: 'Parallax Site - POC',
        link: '/demo'
    },
    {
        image: `${yelp}`,
        title: 'YelpCamp',
        link: '/demo'
    },
    {
        image: `${blogsite}`,
        title: 'Blog Site',
        link: '/demo'
    },
    {
        image: `${portifolio}`,
        title: 'Portifolio Site',
        link: '/demo'
    }
];

const Work = () => (
    <Layout>
        <Works>
            <GenericH2 none dark some style={{ textAlign: 'center' }}>Our Works</GenericH2>
            <section className='gallery__flex'>
                {
                    projects && projects.map(project => <Project key={project.title} project={project} />)
                }
            </section>
        </Works>
    </Layout>
)

export default Work;