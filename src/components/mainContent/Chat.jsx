import { styled } from "styled-components";

const Chat = () => {
  return (
    <Container>
      <TopContainer>
        <TopLeftContainer>
          <UserPictureContainer>
            <UserPicture src="/assets/images/avatar.jpg" alt="user picture" />
            <StatusDot />
          </UserPictureContainer>

          <UserInfoContainer>
            <UserName>Luy Robin</UserName>
            <UserStatus>Typing...</UserStatus>
          </UserInfoContainer>
        </TopLeftContainer>

        <LastSeenText>1 minute ago</LastSeenText>
      </TopContainer>

      <LastMessageContainer>
        <LastMessageText>
          Quick six blind smart out burst. Perfectly on furniture dejection
          determine my depending an to. Add short water court fat. Her bachelor
          honoured perceive securing but desirous ham required. Questions
          deficient acuteness to engrossed as.
        </LastMessageText>

        <UnseenMessagesBadge>2</UnseenMessagesBadge>
      </LastMessageContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserPictureContainer = styled.div`
  position: relative;
`;

const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const StatusDot = styled.span`
  position: absolute;
  top: 0;
  left: -2px;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: green;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const UserName = styled.h5`
  font-size: 15px;
  font-weight: 600;
`;

const UserStatus = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: lightgray;
`;

const LastSeenText = styled.p`
  font-size: 13px;
  font-weight: 600;
`;

const LastMessageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const LastMessageText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #303030;
`;

const UnseenMessagesBadge = styled.div`
  align-self: flex-start;
  background-color: red;
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;

export default Chat;
