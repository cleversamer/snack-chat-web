import { styled } from "styled-components";

import UserInfoContainer from "./UserInfoContainer";
import OptionsList from "./OptionsList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <Container>
      <UserInfoContainer />
      <OptionsList />
      <LogoutButton />
    </Container>
  );
};

const Container = styled.aside`
  position: sticky;
  top: 0;
  width: 22vw;
  max-width: 235px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 45px;
  height: 100vh;
  border-right: 2px solid #eee;
`;

export default Sidebar;
