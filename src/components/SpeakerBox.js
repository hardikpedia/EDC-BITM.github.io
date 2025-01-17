import React from 'react'
import styled from 'styled-components'


const SpeakerBox = (props) => {
    return (
            <LinkWrap href={props.data.link}>
                <MainContainer>
                    <ImageContainer>
                        <Image src={props.data.Image} />
                        <Overlay></Overlay>
                    </ImageContainer>
                    <TextContainer>
                        <Name>{props.data.Name}</Name>
                        <Designation>{props.data.Desc}</Designation>
                        <Designation special padded>{props.data.alumni}</Designation>
                    </TextContainer>
                </MainContainer>
            </LinkWrap>

    )
}

export default SpeakerBox


const LinkWrap = styled.a`
    text-decoration:none;
`

const MainContainer = styled.div`
    background-color:#151629;
    border-radius:20px;
    padding:30px;
    margin:10px;
    border:2px solid rgba(247, 108, 108,0);
    transition: border 0.4s;
    &:hover{
        border:2px solid rgba(247, 108, 108,1);
    }
    @media screen and (max-width: 1002px) {
        padding:20px;
        margin:10px;
    }
`

const ImageContainer = styled.div`
    position:relative;
    overflow:hidden;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
`

const Image = styled.img`
    width:250px;
    filter:grayscale(80%);
    @media screen and (max-width: 1002px) {
        width:180px;
    }
`

const Overlay = styled.div`
    transition: all 0.4s;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-image: linear-gradient(to left bottom, rgba(247, 108, 108,0.3), rgba(194, 78, 120,0.4), rgba(130, 61, 116,0.5), rgba(65, 47, 94,0.6), rgba(4, 28, 59,0.7));
    &:hover{
        background-image:none;
        transition: all 0.4s;
    }
`

const TextContainer = styled.div`
    padding-top:20px;
`

const Name = styled.h3`
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    text-align:center;
    font-size:28px;
    text-decoration:none;
    @media screen and (max-width: 1002px) {
        font-size:24px;
    }
`

const Designation = styled.p`
    text-align:center;
    font-size:14px;
    text-decoration:none;
    color:${props => { if (props.special) { return '#f76c6c' } else { return "#fff" } }};
    padding-top:${props => { if (props.padded) { return '5px' } else { return "0px" } }};
    @media screen and (max-width: 1002px) {
        font-size:12px;
    }
`
