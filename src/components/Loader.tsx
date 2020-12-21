import React from "react";
import styled from "styled-components";

const StyledLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 300px);
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 150px 0;
  animation: popin 1s;

  @keyframes popin {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const StyledLoader = styled.div`
  display: inline-block;
  font-size: 10px;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    #d1d1d1 10%,
    rgba(209, 209, 209, 0) 42%
  );
  animation: load3 1.4s infinite linear;

  &:before {
    width: 50%;
    height: 50%;
    background: #d1d1d1;
    border-radius: 100% 0 0 0;
    position: absolute;
    left: 0;
    content: "";
  }

  &:after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader />
    </StyledLoaderWrapper>
  );
};

export default Loader;
