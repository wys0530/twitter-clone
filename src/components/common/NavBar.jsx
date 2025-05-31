import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  IoSearch,
  IoEllipsisHorizontalCircle,
  IoBookmarkOutline,
} from "react-icons/io5";
import { PiBell } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { RiFileListLine, RiSlashCommands2 } from "react-icons/ri";
import { HiUser, HiOutlineUser, HiOutlineUsers } from "react-icons/hi";

const NavBarContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
  padding: 1rem 1rem;
  background-color: transparent;
  color: white;
  //border: 1px solid white;
  margin-right: 2rem;
  height: 100%;
  position: sticky;
  flex-shrink: 0;
  position: sticky;
  box-sizing: border-box;
`;

const Logo = styled(FaXTwitter)`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: white;
  display: flex;
  border-radius: 10px;
  padding: 0.3rem 0;
  margin-left: 1rem;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  //border: 1px solid red;
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const MenuItem = styled.li`
  font-size: 1.25rem;
  padding: 0.25rem 1rem;
  margin: 0.8rem 0;

  border-radius: 400px;
  display: flex;
  overflow: hidden;
  width: fit-content;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  a {
    // 링크
    color: white;
    display: flex;
    align-items: center;

    &.active {
      font-weight: bold;
    }
  }

  &:hover {
    background-color: #1c1c1c;
  }

  svg {
    font-size: 1.55rem;
    color: white;
    margin-right: 0.75rem;
  }
`;

const PostBtn = styled.button`
  background-color: rgb(29, 155, 240);
  color: white;
  font-weight: bold;
  padding: 12px 90px;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background-color: rgb(26, 132, 202);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0 0 0;
  padding: 0.75rem 1rem;
  cursor: pointer;
  //border: 1px solid white;
  box-sizing: border-box;
  border-radius: 99px;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #aaa;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const UserId = styled.div`
  font-size: 13px;
  color: gray;
`;

const Ellipsis = styled.div`
  margin-left: auto;
  font-size: 20px;
  color: gray;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-left: 1rem;
  color: white;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Menu>
        <MenuItem>
          <NavLink to="/">
            {({ isActive }) => (
              <>
                {isActive ? <GoHomeFill /> : <GoHome />}
                Home
              </>
            )}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <IoSearch />
          Explore
        </MenuItem>
        <MenuItem>
          <PiBell />
          Notifications
        </MenuItem>
        <MenuItem>
          <FiMail />
          Messages
        </MenuItem>
        <MenuItem>
          <RiSlashCommands2 />
          Grok
        </MenuItem>
        <MenuItem>
          <RiFileListLine />
          Lists
        </MenuItem>
        <MenuItem>
          <IoBookmarkOutline />
          Bookmarks
        </MenuItem>
        <MenuItem>
          <HiOutlineUsers />
          Communities
        </MenuItem>
        <MenuItem>
          <FaXTwitter />
          Premium
        </MenuItem>
        <MenuItem>
          <NavLink to="/profile/:userId">
            {({ isActive }) => (
              <>
                {isActive ? <HiUser /> : <HiOutlineUser />}
                Profile
              </>
            )}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <IoEllipsisHorizontalCircle />
          More
        </MenuItem>
      </Menu>

      <PostBtn>Post</PostBtn>
      <NavLink to="/profile/:userId">
        <UserInfo>
          <ProfileImg />
          <ProfileText>
            <UserName>이퍼비</UserName>
            <UserId>@efub_5th_toy</UserId>
          </ProfileText>
          <Ellipsis>⋯</Ellipsis>
        </UserInfo>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
