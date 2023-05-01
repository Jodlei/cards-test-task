import styled from 'styled-components';

export const TweetsList = styled.ul`
  display: grid;
  padding-top: 50px;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 48px;
`;
export const ErrorText = styled.p`
  margin-top: 30px;
  padding-bottom: 15px;
  text-align: center;
`;
