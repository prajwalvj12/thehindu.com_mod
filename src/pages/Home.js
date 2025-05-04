import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 2fr 1.1fr;
  gap: 32px;
  max-width: 1300px;
  margin: 40px auto 0 auto;
  padding: 0 16px;
`;

// Left: Premium
const PremiumSection = styled.section`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  padding: 24px 20px 16px 20px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.cardBorder}44;
`;
const PremiumTitle = styled.h2`
  color: ${({ theme }) => theme.accent};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 18px;
  font-family: 'Georgia', serif;
`;
const PremiumList = styled.ul`
  margin: 0;
  padding: 0;
`;
const PremiumItem = styled.li`
  margin-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  padding-bottom: 12px;
  &:last-child { border-bottom: none; }
  color: ${({ theme }) => theme.text};
`;
const PremiumAuthor = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  margin-top: 4px;
`;

// Center: Main Headline
const CenterSection = styled.section``;
const Live = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 1rem;
  margin-right: 10px;
`;
const MainHeadline = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 10px;
  font-family: 'Georgia', serif;
  color: ${({ theme }) => theme.text};
`;
const SubHeadline = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin-bottom: 8px;
`;
const Byline = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.subtleText};
  margin-bottom: 18px;
  font-weight: 500;
`;
const MainImage = styled.img`
  width: 100%;
  max-height: 340px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 18px;
  background: ${({ theme }) => theme.cardBorder};
`;

// Right: Latest News
const LatestSection = styled.section`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  padding: 24px 20px 16px 20px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.cardBorder}44;
`;
const LatestTitle = styled.h2`
  color: ${({ theme }) => theme.accent};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 18px;
  font-family: 'Georgia', serif;
`;
const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const TimelineItem = styled.li`
  margin-bottom: 18px;
  position: relative;
  padding-left: 18px;
  color: ${({ theme }) => theme.text};
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.accent};
    border-radius: 50%;
  }
`;
const TimelineTime = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2px;
  font-weight: 300;
`;
const TimelineHeadline = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

function Home() {
  // Mock data
  const premiumArticles = [
    { title: "Pahalgam attack casts a shadow over J&K students outside State", author: "Laasya Shekhar" },
    { title: "The chatter in Moscow's Red Square", author: "Kallol Bhattacherjee" },
    { title: "Analysing the impact of AI on assessments in higher education", author: "K.P. Soman, Ijeesh T.K." },
    { title: "A profound shift in the global order", author: "Mukul Sanwal" },
    { title: "Heritage as climate strategy: how India's old towns hold the key to resilient cities", author: "Durganand Balsavar" },
  ];
  const mainStory = {
    live: true,
    headline: 'Pahalgam terror attack LIVE: Omar Abdullah meets PM Modi, discusses situation in J&K',
    sub: 'According to reports, the meeting between J&K CM Abdullah and PM Modi lasted for 30 minutes',
    by: 'THE HINDU BUREAU',
    image: 'mainpage.png',
  };
  const latestNews = [
    { time: '5 mins ago – India', headline: 'CRPF dismisses jawan who married Pakistani woman without intimation' },
    { time: '17 mins ago – India', headline: 'U.K. and India can be exemplars of how you can use culture to bring people closer together: U.K. Culture Secretary' },
    { time: '22 mins ago – Kolkata', headline: 'Another Trinamool MP writes to Amit Shah on attacks on migrant workers from Bengal' },
    { time: '33 mins ago – Tripura', headline: 'Tripura signs MoU with the IIM to provide advanced training to Panchayat officials' },
    { time: '44 mins ago – World', headline: "Chinese coast guard says it 'warns off' Japanese aircraft near disputed island chain" },
  ];

  return (
    <PageWrapper>
      <MainGrid>
        {/* Premium Section */}
        <PremiumSection>
          <PremiumTitle>Premium</PremiumTitle>
          <PremiumList>
            {premiumArticles.map((art, idx) => (
              <PremiumItem key={idx}>
                <div>{art.title}</div>
                <PremiumAuthor>{art.author}</PremiumAuthor>
              </PremiumItem>
            ))}
          </PremiumList>
        </PremiumSection>

        {/* Main Headline Section */}
        <CenterSection>
          <div style={{marginBottom: 8}}>
            {mainStory.live && <Live>● LIVE</Live>}
          </div>
          <MainHeadline>{mainStory.headline}</MainHeadline>
          <SubHeadline>{mainStory.sub}</SubHeadline>
          <Byline>{mainStory.by}</Byline>
          <MainImage src={mainStory.image} alt="Main story" />
        </CenterSection>

        {/* Latest News Section */}
        <LatestSection>
          <LatestTitle>Latest News</LatestTitle>
          <Timeline>
            {latestNews.map((item, idx) => (
              <TimelineItem key={idx}>
                <TimelineTime>{item.time}</TimelineTime>
                <TimelineHeadline>{item.headline}</TimelineHeadline>
              </TimelineItem>
            ))}
          </Timeline>
        </LatestSection>
      </MainGrid>
    </PageWrapper>
  );
}

export default Home; 