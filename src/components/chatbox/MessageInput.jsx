import { styled } from "styled-components";
import { BsSendFill } from "react-icons/bs";

const MessageInput = () => {
  return (
    <Container>
      <Input placeholder="Type a message here" />

      <SendButton type="submit">
        <BsSendFill />
      </SendButton>
    </Container>
  );
};

const Container = styled.form`
  background-color: #fff;
  border-top: 1px solid #d7d7d7;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #303030;

  ::placeholder {
    font-size: 13px;
    font-weight: 600;
    color: lightgray;
  }
`;

const SendButton = styled.button`
  background-color: dodgerblue;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #fff;
  }
`;

export default MessageInput;
