import { styled } from "styled-components";

import ChatBox from "components/chatbox";
import MainContent from "components/mainContent";
import Sidebar from "components/sidebar";

const HomePage = () => {
  return (
    <Container>
      <Sidebar />

      <RightSideContainer>
        <MainContent />
        <ChatBox />
      </RightSideContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const RightSideContainer = styled.div`
  flex: 1;
  padding: 50px 30px;
  display: flex;
  gap: 25px;
  background-color: #efefef;
`;

export default HomePage;
