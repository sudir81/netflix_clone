import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="Netflix" />
          <NavLink className="signIn-btn" to="/" style={{ color: "white" }}>
            Sign In
          </NavLink>
        </div>
        <div className="header-content">
          <Title>See what's next...</Title>
          <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
          <Button className="main-offer-btn" to="/" primary>
            try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: cenger;
    flex-direction: column;
    z-index: 1;
  }

  // .main-offer-btn {
  //   display: inline-block;
  //   background: var(--main-red);
  //   text-transform: uppercase;
  //   border: none;
  //   outline: none;
  //   margin: 0 33%;
  //   padding: 1.5rem;
  //   border-radius: 0.1875rem;
  //   font-size: 2rem;
  //   text-align: center;
  //   box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  //   transition: background 0.2s ease-in;
  //   cursor: pointer;
  //   &:hover: {
  //     background: var(--main-red-hover);
  //   }
  // }

  .Icon svg {
    verticle-align: bottom;
    margin-left: 1.5rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
`;
