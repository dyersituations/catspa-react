import React from "react";
import styled from "styled-components";

interface LoaderProps {
  background: string;
}

const StyledLoaderModel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
`;

const StyledLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 300px);
  text-align: center;
  padding: 150px 0;
  animation: popin 1s;
  z-index: -1;

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

  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledLoaderMiddle = styled.div<LoaderProps>`
  background: ${(props) => props.background};
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
`;

const Loader = ({ background = "white" }) => {
  return (
    <>
      <StyledLoaderModel />
      <StyledLoaderWrapper>
        <StyledLoader>
          <StyledLoaderMiddle background={background} />
        </StyledLoader>
      </StyledLoaderWrapper>
    </>
  );
};

export default Loader;
