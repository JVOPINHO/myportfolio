import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors'

/**
 * 
 * .image {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        
        .backgroundColor {
            width: 250px;
            height: 250px;
            background: linear-gradient(45deg, transparent, $pinhoColorMain, transparent);
            border-radius: 2rem;
            margin-right: 25px;

            img {
        width: 100%;
                height: 100%;
                border-radius: 2rem;
                transform: rotate(15deg);
                transition-duration: 0.5s;
                transition-property: transform;

                &:hover {
                    transform: rotate(0deg);
                    transition-duration: 0.5s;
                    transition-property: transform;
                }
            }
        }
    }
 */

const IntroImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 250px;
    height: 250px;
    background: linear-gradient(45deg, transparent, ${colors.main}, transparent);
    border-radius: 2rem;
    margin-right: 25px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        transform: rotate(15deg);
        transition-duration: 0.5s;
        transition-property: transform;

        &:hover {
            transform: rotate(0deg);
            transition-duration: 0.5s;
            transition-property: transform;
        }
    }
`

export const IntroImage: React.FC = () => {
    return (
        <IntroImageWrapper>
            <img src={'/me.png'} />
        </IntroImageWrapper>
    )
}