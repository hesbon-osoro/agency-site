import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby';
import { Banner, TextWrapper, GenericPara, GenericH3, SectionTwo , GenericParaAbout} from '../styles/IndexStyles';

const about = () => {
    return (
        <Layout>
            <section style={{ position: 'relative' }}>
                <Banner different></Banner>
                <TextWrapper>
                    <div>
                        <GenericH3 none>Who are we</GenericH3>
                        <GenericPara lessSize grey>
                            Wazimu LLC is an experienced and passionate group of designers,<br /> developers, and artists. Every client we work with becomes part of the team. Together we face the challenges and celebrate the victories.
                        </GenericPara>
                        <Link to='/works'>Our Work</Link>
                    </div>
                </TextWrapper>
            </section>
            <SectionTwo white>
                <div>
                    <GenericH3 dark none>About Us</GenericH3>
                    <GenericParaAbout lessSize grey>
                        Founded in 2016, <b>Wazimu LLC</b> is a small web design and development company based in Bangalore, India. Over the last few years we've made a reputation for building websites, mobile apps, and web apps that look great abd are easy-to-use.
                    </GenericParaAbout>
                    <GenericParaAbout lessSize grey>
                        We originated from futuristic technology and progressing toward success with great desire. We work with self-derived strategies, as we have experienced everything on our own. We are equipped with the state-of-the-art work station in the website development and testing. So, results delivered on time, every time! Your success is our bread and butter!
                    </GenericParaAbout>
                    <GenericParaAbout lessSize grey>
                        We always happy to say loudly, we smell & feel the success every day because of the ShikhaCorps experts in execution planning with website design and digital marketing. They are always adopting with our valuable clients to satisfy on their requirement in each perspective, so our valuable clients make us more valuable in our success. While you work with us you feel, you are in right place & right time.
                    </GenericParaAbout>
                    <GenericParaAbout lessSize grey>
                        Our Vision is to make our self as India's most valuable corporation through ultimate performance and uniqueness in every single project that we do! Our Mission is to enhance the wealth generating capability of the enterprise in a globalizing environment by exhibiting our efficiency and adopting the innovative <q>more-than-enough</q> methodology in our work.
                    </GenericParaAbout>
                </div>
            </SectionTwo>
        </Layout>
    )
}

export default about;