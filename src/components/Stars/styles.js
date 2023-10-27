import styled from "styled-components"

export const Star = styled.div`
	display: flex;

	margin-top: 0.8rem;


	color: ${({theme}) => theme.COLORS.PINK};
	fill: ${({theme}) => theme.COLORS.PINK};

	gap: 0.6rem;

	svg {
		height: 1.2rem;
		width: 1.2rem;
		fill: ${({theme}) => theme.COLORS.PINK};
	}

	.last {
		fill: ${({theme}) => theme.COLORS.BACKGROUND_700};
	}
`
