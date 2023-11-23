import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../Redux/Actions/HomePageActions";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";
import { useState } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import CanvasUserDetails from "./homepageSubComponents/CanvasUserDetail";

const TopBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <Navbar expand="lg" className="bg-body-tertiary"></Navbar>;
};
export default TopBar;
