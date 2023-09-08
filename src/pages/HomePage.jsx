import { styled } from "styled-components";

import ChatBox from "components/ChatBox";
import MainContent from "components/MainContent";
import Sidebar from "components/sidebar";

const HomePage = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
      <ChatBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default HomePage;
