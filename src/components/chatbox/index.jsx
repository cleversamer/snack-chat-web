import { styled } from "styled-components";
import TopContainer from "./TopContainer";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";

const ChatBox = () => {
  return (
    <Container>
      <TopContainer />
      <MessagesList />
      <MessageInput />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 8px;
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 70px);
`;

export default ChatBox;
