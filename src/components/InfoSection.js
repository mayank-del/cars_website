import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Section = styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
`;
const Container = styled.div`
    padding:3rem calc((100vw-1300px)/6);
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:800px;

    @media screen and (max-width:770px){
        grid-template-columns:1fr;
    }
`;
const ColumnLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order:${({reverse}) =>(reverse ? '2':'1')};
    img{
        width:130vh;
        height:130vh;
        object-fit:contain;
        
     
     @media screen and(max-width:770px){
            width:90%;
            height:90%;            
        }}
    h1{
        margin-top:30px;
        font-size:clamp(3.5rem,10vw,2rem);
        
        padding: 20px;
        box-sizing: border-box;
        color: transparent;
      
        background-image:linear-gradient(to right,
        #462523 0,
        #cb9b51  22% ,
        #f6e27a 45%,
        #f6f2c0 50%,
        #f6e27a 55%,
        #cb9b51 78%,
        #462523 100%
        );
        -webkit-background-clip:text;

        }
        p{
        margin-top:30px;
        font-size:clamp(1rem,8vw,1.5rem);
        padding: 20px;
        color: transparent;  
        background-image:linear-gradient(to right,
        #462523 0,
        #cb9b51  22% ,
        #f6e27a 45%,
        #f6f2c0 50%,
        #f6e27a 55%,
        #cb9b51 78%,
        #462523 100%
        );
        -webkit-background-clip:text;
        }
`;
const ColumnRight = styled.div`
    
    order:${({reverse}) =>(reverse ? '1':'2')};

    
    @media screen and (max-width:770px){
        order:${({reverse}) =>(reverse ? '2':'1')};
        }
     
    img{
        width:130vh;
        height:130vh;
        object-fit:contain;
        
     
     @media screen and(max-width:770px){
            width:90%;
            height:90%;            
        }
    }
    h1{
        margin-top:30px;
        font-size:clamp(3.5rem,10vw,2rem);
        
        
        }
        p{
        margin-top:30px;
        font-size:clamp(1rem,8vw,1.5rem);
        color:white;
        }

`;

const InfoSection = ({heading,paragraphOne,paragraphTwo,reverse,image}) => {
    
    useEffect(() =>{
        Aos.init({duration:3000});
      },[]);
    return (
        <Section>
         <Container>
             <ColumnLeft data-aos="fade-right">
            
             <h1>
                {heading}
             </h1>
             <p> 
                 {paragraphOne}
             </p>
             <p>
                 {paragraphTwo}
             </p>
             
            
             </ColumnLeft>
                <ColumnRight reverse ={reverse}  data-aos="fade-left">
                <img src={image} alt="home" />
                
                </ColumnRight>

             </Container>
                
        </Section>
    );
  
}

export default InfoSection;
