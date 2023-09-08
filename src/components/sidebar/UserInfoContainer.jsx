import { styled } from "styled-components";

const UserInfoContainer = () => {
  return (
    <Container>
      <UserPicture src="/assets/images/avatar.jpg" alt="User picture" />
      <UserName>Samer Alsaadawi</UserName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const UserPicture = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #303030;
`;

export default UserInfoContainer;
