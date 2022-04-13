import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
//import Features from 'views/HomePage/Features';
// import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import Page from 'components/Page';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Page title="QuantCtrl" description="Driving Value Through Big Data & Cloud Based Analytics.">
        <Head>
          <title>{EnvVars.SITE_NAME}</title>
          <meta name="description" content="Driving Value Through Big Data & Cloud Based Analytics." />
        </Head>
        <HomepageWrapper>
          <DarkerBackgroundContainer>
            <Hero />
            {/* <Partners /> */}
            <BasicSection imageUrl="/demo-illustration-1.svg" title="Automate Maintainence Sheduling" overTitle="The problem">
              <p>
                Automating the detection of anomalies and failures in equipment helps us prevent downtime and critical failures. With this,
                limited resources can be deployed, while extending the lifecycle of devices and equipment, while improving quality and
                supply chain processes and increasing stakeholder satisfaction.
              </p>
            </BasicSection>
            <BasicSection imageUrl="/demo-illustration-2.svg" title="Custom Built Strategies" overTitle="The Solution" reversed>
              <p>
                The generality of an anomaly detection model is both its biggest advantage and pitfall: the model should be able to flag
                every type of failure, despite of not having any previous knowledge about them. Anomalous behaviour, however, does not
                necessarily lead to failure. And if it does, the model does not give information about the time span it should occur. This
                is why we build custom strategies and frame models around them.
              </p>
            </BasicSection>
          </DarkerBackgroundContainer>
          {/* <DarkerBackgroundContainer>
          <FeaturesGallery /> 
           <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
          <Cta />
        </DarkerBackgroundContainer> */}
        </HomepageWrapper>
      </Page>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 10rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
