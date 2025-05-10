'use client'

import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const TitleHeader = styled.header`
	text-align: center;
    height: 100%;
    position: relative;
    padding: 4rem;

	h1 {
        font-size: 3rem;
        text-shadow: 2px 2px 4rem ${colors.main};
    }

	h5 {
        color: ${colors.main};
    }
`

export const Header: React.FC = () => (
	<TitleHeader>
		<h4>Hellow I&apos;m</h4>
		<h1>João Pinho</h1>
		<br />
		<h5>Backend Developer</h5>
	</TitleHeader>
)