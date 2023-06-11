import '../../style/MainStyle.css'
import { Outlet } from "react-router-dom";
//import styled from 'styled-components'



const Main = () => {
  return (
    <>
     <Outlet />
    </>
  );
};


export default Main