import React from "react";
import styled from "styled-components";

import { Link, Outlet } from "react-router-dom";
const Container = styled.div`
  background-color: white;
`;
const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding: 20px 70px;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const NavItems = styled.ul`
  @media only screen and (max-width: 768px) {
    margin: 0;

    padding: 0;
  }
  list-style: none;
  display: flex;
`;
const Item = styled.li`
  @media only screen and (max-width: 768px) {
    margin: 0px 7px;
  }
  cursor: pointer;
  margin: 0px 15px;
  &:hover {
    color: red;
    font-weight: 500;
  }
`;

const PortfolioLayout = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Navbar>
            <NavItems>
              <Item>
                <Link
                  to={"all"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  ALL
                </Link>
              </Item>
              <Item>
                <Link
                  to={"brand"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Brand Identity
                </Link>
              </Item>
              <Item>
                <Link
                  to={"social"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Social Media
                </Link>
              </Item>
            </NavItems>
          </Navbar>
          <Outlet />
        </Wrapper>
      </Container>
    </>
  );
};

export default PortfolioLayout;
