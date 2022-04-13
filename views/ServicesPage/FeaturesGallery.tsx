import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';

const TABS = [
  {
    title: 'Data Lake Infrastructure',
    description:
      '<p>To build a failure model, we require enough historical data that allows us to capture information about events leading to failure. In addition to that, general static features of the system can also provide valuable information, such as mechanical properties, average usage and operating conditions - all of that historical data is going to be pushed to a data lake and will form the central basin for future analysis.</p>',
    imageUrl: '/demo-illustration-3.png',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Optimise Targets',
    description: '<p>We&apos;ll set performance targets that the model should be optimized for and label our KPIs accordingly.</p>',
    imageUrl: '/demo-illustration-4.png',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Train & Deploy ',
    description:
      '<p>Based on static characteristics of the system and on how it behaves now, the remaining useful time can be predicted, which implies that both static and historical data are required and that the degradation process is smooth.</p>',
    imageUrl: '/demo-illustration-5.png',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
  {
    title: 'QuickSight & IoT Integration',
    description:
      '<p>Dashboard alerts are rendered, and there&apos;s an added upon of integrating streaming data if there are IoT devices in the ecosystem.</p>',
    imageUrl: '/demo-illustration-5.png',
    baseColor: '206, 54, 20',
    secondColor: '255, 105, 64',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>The Serivce Model</OverTitle>
        <SectionTitle>We&apos;re building failure models with a 4 step appraoch.</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {/* {imagesMarkup} */}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin: 0 auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0 auto;
    margin-bottom: 4rem;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;
  // align-items: center;
  width: 60%;
  margin: 0 auto;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);
  padding-right: 1rem;

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
