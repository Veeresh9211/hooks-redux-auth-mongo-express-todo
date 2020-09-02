import React from 'react';
import Loader from 'react-loader-spinner'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import './dataLoader.scss';

function DataLoader(props){
  const loader1 = useSelector(state => state.laptop.loader);
     return(
         <Modal show={loader1} id="dataLoader">
            <Loader
               type="Bars"
               color="#ffffff"
               height={50}
               width={50} 
               // secondaryColor="grey"
               // style={{left: "50%", position: "absolute", top:"30%"}}
            />
         </Modal>      
     );
    }

 export default DataLoader;