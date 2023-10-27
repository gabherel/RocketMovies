import {Link} from "react-router-dom"

import styled from "styled-components"

export const Container = styled.header`
	grid-area: header;

	top: 0;

	height: 10.5rem;
	width: 100%;

	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

	display: flex;
	justify-content: space-between;

	padding: 3rem 12.3rem;

	gap: 6.4rem;
`

export const Search = styled.div`
	display: flex;
	align-items: center;

	width: 63rem;
`

export const Profile = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
	display: flex;
	align-items: center;

	> img {
		width: 5.6rem;
		height: 5.6rem;
		border-radius: 50%;
	}

	> div {
		display: flex;
		flex-direction: column;
		margin-right: 1.6rem;
		line-height: 2.4rem;

		span {
			font-size: 1.4rem;
			color: ${({theme}) => theme.COLORS.GRAY_100};
			margin-left: 10.6rem;
		}

		strong {
			font-size: 1.8rem;
			color: ${({theme}) => theme.COLORS.WHITE};
		}
	}
`
export const TitleHeader = styled.button`
	border: none;
	background: none;

	color: ${({theme}) => theme.COLORS.PINK};
	font-size: 2.4rem;
	font-weight: bold;
`
