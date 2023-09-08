import { styled } from "styled-components";
import OptionItem from "./OptionItem";
import { RiLogoutCircleRLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <Container>
      <OptionItem Icon={RiLogoutCircleRLine} title="Log out" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
`;

export default LogoutButton;
