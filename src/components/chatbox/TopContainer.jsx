import styled from "styled-components";
import { MdOutlineAttachFile } from "react-icons/md";
import { BiDotsVertical } from "react-icons/bi";

const TopContainer = () => {
  return (
    <Container>
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

      <TopRightContainer>
        <OptionContainer>
          <MdOutlineAttachFile />
        </OptionContainer>

        <OptionContainer>
          <BiDotsVertical />
        </OptionContainer>
      </TopRightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px 25px;
  border-bottom: 1px solid #d7d7d7;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  color: dodgerblue;
`;

const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OptionContainer = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition-duration: 176ms;
  cursor: pointer;

  :active {
    transform: scale(0.97);
  }

  svg {
    font-size: 18px;
  }
`;

export default TopContainer;
