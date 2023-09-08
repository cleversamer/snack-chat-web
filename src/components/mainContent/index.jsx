import { styled } from "styled-components";
import TopContainer from "./TopContainer";
import SearchBox from "./SearchBox";
import Chat from "./Chat";

const MainContent = () => {
  return (
    <Container>
      <TopContainer />
      <SearchBox />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default MainContent;
