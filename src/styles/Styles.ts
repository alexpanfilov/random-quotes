import styled from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.24);
  margin: 10vh auto;
  border-radius: 3px;
  background-color: #fff;
  @media (max-width: 700px) {
    width: 85%;
  }
`
export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  color: #cdcdcd;
  font-size: 37px;
`
export const Quote = styled.blockquote`
  font-size: 36px;
  font-weight: 300;
  font-family: 'Courgette', cursive;
  line-height: 1.5;
  padding: 10px 20px;
  color: #817e7e;
`
export const Author = styled.p`
  text-align: right;
  color: #BEBEBE;
  margin-top: 10px;
  padding: 10px;
`
export const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 3px;
  margin: 30px auto;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 3px, rgba(45, 35, 66, 0.3) 0 5px 5px -3px, #D6D6E7 0 -1px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 3px, rgba(45, 35, 66, 0.3) 0 6px 10px -3px, #D6D6E7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 6px, rgba(45, 35, 66, 0.3) 0 5px 10px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`

export const Footer = styled.footer`
  background: #f1f1f1;
  border-top: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  
  & > span {
    padding: 0 5px;
  }
`
export const Header = styled.header`
  border-bottom: 1px solid #d3d3d3;
  padding: 20px;
  background: #efeff14f;
  text-shadow: 1px 1px 1px #fff;
`