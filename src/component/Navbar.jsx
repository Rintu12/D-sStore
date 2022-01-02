/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';

import styled from "styled-components";
import { Badge, makeStyles} from "@material-ui/core";
import {    ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.css";
import { useSelector } from 'react-redux';
 import { Link } from "react-router-dom";



const Container = styled.div`
  width:100%;
  height:100px;
  background-color:red;
  opacity:.80;
  display:inline-block;
  position:sticky;
 

  

`;
const Left = styled.div`
  flex:3; 
  display:flex;
  padding:6px;

`;
const Wraper = styled.div`
margin-top:15px;
  display:flex;
 
`;
const Humbergur =  styled.div`

 margin-top:6px;
    width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-Right:10px;
  cursor:pointer;
  
  span{

    width: 100%;
          
          height: 3px;
          background-color:white;
          transform-origin: left;
  }
              
 
 `;
 const SearchContainer = styled.div`
  ${'' /* width:100%;
 display: flex;
 align-items: center;
 margin-left:13px;
 ${'' /* margin-left: 25px; */}
padding:4px;
cursor:pointer;

 Input{
   
     outline:none;
      width:170%;
    height:30px;
    border-radius:10px;


  } 

`;
const Input = styled.input `
 border:none;
`;
const Center = styled.div`

 
 
  flex:2; 
 
  padding:0 15px;
   ${'' /* align-iteam:center;
   justify-content:center; */}

`;
const Right = styled.div`
max-width:100%;
 display:flex;
 flex:1;
 justify-content:space-between;
   padding:1.2rem;
`; 
const Logo = styled.div`
font-weight: 800;
font-size:40px;
color:white;
margin-right:40px;

`;
  const    MenuItem = styled.div`
    font-weight:500;
    cursor:pointer;
  `;
   
  const useStyles = makeStyles((theme)=>({
     mobile:{
      
        
     [theme.breakpoints.down('sm')]:{
         height:"50px",
         width:"100%",
         backgroundColor:"yellow",
         display:"flex",
        
        //  flexIteam:"flex-start"
         
      
     },
    },
     Wraper:{

       
      [theme.breakpoints.down('sm')]:{
        display:"flex",
         padding:"0px",
         margin:"0px"
         

        


      },

    },
    Left:{

       [theme.breakpoints.down('sm')]:{

         display:"flex"
       }


    },
    right:{
   
        [theme.breakpoints.down('sm')]:{

            display:"none"
        }

    },
    Center:{
        [theme.breakpoints.down('sm')]:{
            display:"none"

        }


    },
    humbergur:{

        [theme.breakpoints.down('sm')]:{
          
            width:"20px",
            hight:"20px"


        }

    }
    

  }));
  
 const Navbar = () => {
   const quentity = useSelector(state => state.cart.quentity); // to use store  from the redux configuertion

  
    const classes = useStyles();
     
    return (
        <div>
         
        <Container className={classes.mobile}>
         <Wraper  className={classes.Wraper}>

           
         <Left className={classes.Left}>
         

          
         <Humbergur className={classes.humbergur}   >
           <span className="1"></span>
           <span className="2"></span>
           <span className="3"></span>
           </Humbergur>
           
           <SearchContainer>
            <Input placeholder="Search" />
             {/* <Search /> */}
          </SearchContainer>
          
         </Left>
        
        
         <Center className={classes.Center}>

          <Logo> D&S.</Logo>


         </Center>
         <Right className={classes.right}>

         <MenuItem>REGISTER</MenuItem>
          <MenuItem  style={{}}>SIGN IN</MenuItem>
          <Link to={"/cart"}>
          <MenuItem>
            <Badge badgeContent={quentity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
         </Right>
       
        </Wraper>

        </Container>

        </div>

        
    );
};

 
export default Navbar;