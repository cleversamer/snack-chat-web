import { styled } from "styled-components";

const Message = ({ message }) => {
  return (
    <Container>
      {message.sender.email === "thedev.samer@gmail.com" ? (
        <SentMessage>{message.text}</SentMessage>
      ) : (
        <ReceivedMessage>{message.text}</ReceivedMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
`;

const BaseMessage = styled.div`
  width: fit-content;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 4px 7px;
  font-size: 13px;
  font-weight: 400;
`;

const SentMessage = styled(BaseMessage)`
  background-color: dodgerblue;
  margin-right: auto;
  color: #fff;
  border-top-left-radius: 0px;
`;

const ReceivedMessage = styled(BaseMessage)`
  background-color: #fff;
  border: 1px solid lightgray;
  margin-left: auto;
  border-bottom-right-radius: 0px;
`;

export default Message;
