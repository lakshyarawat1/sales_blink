import {
  Popover,
  Menu,
  Ul,
  Link,
  Li,
  Pane,
  Position,
  Button,
} from "evergreen-ui";
import { useContext } from "react";
import { UserContext } from "../AuthContext";

const Navbar = () => {
  const { currentUser, signOut, signInWithGoogle } = useContext(UserContext);

  return (
    <nav className="w-full bg-white flex gap-[40%]">
      <img src="logo.png" className="h-12 m-5 ml-24" />
      <div className="mt-8 flex gap-10">
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <Ul listStyle="square">
                <Link cursor="pointer" role="menuitem">
                  <Li>Hey Evergreen,</Li>
                </Link>
                <Link cursor="pointer" role="menuitem">
                  <Li>I want custom items</Li>
                </Link>
                <Pane borderTop={true} />
                <Link cursor="pointer" role="menuitem">
                  <Li>Oh sweet</Li>
                </Link>
              </Ul>
            </Menu>
          }
        >
          <Button className="border-0  text-lg shadow-none">Features</Button>
        </Popover>
        <Button className="border-0  text-lg shadow-none">Pricing</Button>
        {currentUser ? (
          <Button className="border-0  text-lg shadow-none" onClick={signOut}>
            SignOut
          </Button>
        ) : (
          <Button
            className="border-0  text-lg shadow-none"
            onClick={signInWithGoogle}
          >
            Login
          </Button>
        )}
        <Button className="bg-[#4B6ED2] text-white font-black p-5 hover:text-[#4B6ED2] hover:scale-110 rounded-full">
          Start Trial Free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
