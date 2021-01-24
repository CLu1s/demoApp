import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Title = styled.h1`
  ${tw`text-red-500 md:text-blue-700 lg:text-pink-600 xl:text-black xl:text-3xl`}

 
`;
const Saludo = (props) => {
  const myVar = `Hola Mundo yo soy ${props.nombres}`;
  return <Title myFontSize={props.font}> {myVar} </Title>;
};

export default Saludo;
