import { styled } from "styled-components";

const TopContainer = () => {
  return (
    <Container>
      <TopLeftContainer>
        <Title>Chats</Title>
        <Filter>Recent Chats</Filter>
      </TopLeftContainer>

      <CreateChatButton>+ Create New Chat</CreateChatButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #303030;
`;

const Filter = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;

const CreateChatButton = styled.button`
  background-color: dodgerblue;
  outline: none;
  border: none;
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition-duration: 176ms;

  :active {
    transform: scale(0.97);
  }
`;

export default TopContainer;
