"use client"

import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const _Section = styled.div`
	width: 80vw;
	height: fit-content;
	margin: 20px auto 40px auto;
	padding: 12px;
	border-radius: 6px / 6px;
	
	h2 {
		height: 100%;
		text-align: center;
		margin-bottom: 10px;

		strong {
			color: #FC9D03;
		}
	}
`

export const Section: React.FC<PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = props => <_Section {...props} className={`${props?.className || ''}`.trim()} />;
