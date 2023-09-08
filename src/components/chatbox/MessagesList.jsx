import { styled } from "styled-components";
import Message from "./Message";

const _messages = [
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 0,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "thedev.samer@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 1,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
  {
    id: 2,
    text: "Hello",
    sender: {
      name: "Samer",
      email: "sadasda@gmail.com",
      avatarURL: "/assets/images/avatar.jpg",
    },
  },
];

const MessagesList = ({ messages = _messages }) => {
  return (
    <Container>
      {_messages.map((message, index) => (
        <Message key={message.id + index} message={message} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  overflow-y: auto;
`;

export default MessagesList;
