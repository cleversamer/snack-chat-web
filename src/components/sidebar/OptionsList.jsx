import { styled } from "styled-components";

import OptionItem from "./OptionItem";

import { PiDotsNineBold } from "react-icons/pi";
import { BsFillChatDotsFill, BsCalendar2Week } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";

const OptionsList = () => {
  return (
    <Container>
      <OptionItem Icon={PiDotsNineBold} title="Home" />
      <OptionItem Icon={BsFillChatDotsFill} title="Chat" active={true} />
      <OptionItem Icon={AiOutlineUser} title="Contact" />
      <OptionItem Icon={HiOutlineBellAlert} title="Notifications" />
      <OptionItem Icon={BsCalendar2Week} title="Calendar" />
      <OptionItem Icon={FiSettings} title="Settings" />
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default OptionsList;
