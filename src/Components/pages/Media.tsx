import React from 'react';
import styled from "@emotion/styled";

export const Media = () => {
    return (
        <div>
            <MediaDiv>
                <FirstSpan></FirstSpan>
                <SecondSpan></SecondSpan>
                <ThirdSpan></ThirdSpan>
                <FourthSpan></FourthSpan>
            </MediaDiv>
        </div>
    );
};


const MediaDiv = styled.div`
  //desktop resolution
  width: 86vw;
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
 
  @media (max-width: 1280px) {
    //tablet resolution
    //background-color: darkolivegreen;
    align-items: center;
    flex-direction: row-reverse;
    }
  @media (max-width: 768px) {
    //phone resolution
    //background-color: darkred;
    flex-direction: column;
  }
`

const FirstSpan = styled.span`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: cadetblue;
  @media (max-width: 1280px) {
    //increase blocks for tablet
    width: 400px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const SecondSpan = styled.span`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: yellow;
  @media (max-width: 1280px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const ThirdSpan = styled.span`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: greenyellow;
  @media (max-width: 1280px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const FourthSpan = styled.span`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: green;
  @media (max-width: 1280px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`