import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h1>Get in touch</h1>
      <h3>Have ideas? Need info?</h3>
      <p>
        <span>Email:</span> contact[at]quantctrl[dot]com
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    color: rgb(22, 115, 255);
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
