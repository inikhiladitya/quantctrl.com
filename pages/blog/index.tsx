import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import Page from 'components/Page';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="QuantCtrl" description="Manufacturing Analytics Made Easy.">
      <Container>
        <Content>
          <OverTitle>Case Studies</OverTitle>
          <SectionTitle>What are you signing in for?</SectionTitle>
        </Content>
      </Container>
      <CustomAutofitGrid>
        {posts.map((singlePost, idx) => (
          <ArticleCard
            key={singlePost.slug}
            title={singlePost.meta.title}
            description={singlePost.meta.description}
            imageUrl={singlePost.meta.imageUrl}
            slug={singlePost.slug}
          />
        ))}
      </CustomAutofitGrid>
    </Page>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
