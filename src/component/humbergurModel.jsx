/* eslint-disable jsx-a11y/anchor-is-valid */
 

  import React  from 'react'
import styled from 'styled-components';
  const HumbergurMenu = styled.div`
  background:yellow;
  right:0;
  top:140px;
  bottom:0;
  position:fixed;
  width:300px;
  z-index:100;
  display:flex;
  flex-direction:column;
   transform:2sec;
  transition:transform ease ;
  ${'' /* transform:${props => props.show?'translatex(0)':'translateX(100%)'}; */}
   li{

    list-style:none;
    text-align:start;
    padding:1rem;
    border:1px sloid black ;
    box-shadow:5px 3px 4px;
    cursor:pointer;
    

   }
   a{
     
      padding:5rem;

   }
    `;
    const Custom = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:10px;
  
    p{
  
     font-size:30px;
     cursor:pointer;
  
    }
    
    `;
  export default function HumbergurModel() {
    //   const {humbergurStatus,SethumbergurStatus}  =  useState(false);
      return (
          <div>
          <HumbergurMenu >
          <Custom ><p>X</p></Custom>
<li><a href="#">boys</a></li>
<li><a href="#">women</a></li>
<li><a href="#">shooes</a></li>
<li><a href="#">shirt</a></li>
<li><a href="#">jeins</a></li>
<li><a href="#">baby</a></li>
<li><a href="#">coustume</a></li>
<li><a href="#">food</a></li>
<li><a href="#">glosory</a></li>
<li><a href="#">phone</a></li>

          </HumbergurMenu>
          </div>
          
      );
  }
  