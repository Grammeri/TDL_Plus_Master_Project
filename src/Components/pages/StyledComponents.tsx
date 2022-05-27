import React, {useState} from 'react';
import styled from "@emotion/styled";
import {HexColorPicker} from "react-colorful";
import Button from "@mui/material/Button";


export const StyledComponents = () => {
    const [color, setColor] = useState("#aabbcc");
    const [showColorPicker, setShowColorPicker]=useState(false)
    return (
        <div>
            <NameDiv color={color}>StyledComponents</NameDiv>
            <ContainerForButton><Button onClick={() => setShowColorPicker(!showColorPicker)} variant="contained">Show collor picker</Button></ContainerForButton>
            {showColorPicker &&<HexColorPicker color={color} onChange={setColor}/>}

        </div>
    );
};

const NameDiv = styled.div<{color:string}>`
  width: 83vw;
  height: 50px;
  background-color: ${props => props.color};
  font-size: 20px;
`
const ContainerForButton = styled.div`
  text-align: center;
`

