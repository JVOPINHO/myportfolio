"use client"

import React from "react";
import styled from "styled-components";
import { IntroImage } from "./image";

const IntroContainer = styled.section`
    background-color: red;
    width: 90%;
    height: auto;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    display: flex;
`

const IntroImageWrapper = styled.div`
    width: 270px;
    display: flex;
`

const IntroTextWrapper = styled.div`
    width: calc(100% - 270px);
    display: flex;
    margin-left: 30px;

    p {
        font-size: 18px;
        font-weight: 500;
        color: $pinhoColorLight;
    }
`

export const Intro: React.FC = () => {
    return (
        <IntroContainer>
            <IntroImageWrapper>
                <IntroImage />
            </IntroImageWrapper>
            <IntroTextWrapper>
                <p>
                    Test
                </p>
            </IntroTextWrapper>
        </IntroContainer>
    )
}