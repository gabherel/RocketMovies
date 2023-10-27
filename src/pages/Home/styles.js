import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-columns: 25rem auto;
	grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
	grid-template-areas:
		"header header"
		"content content"
		"content content";

	background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

	.titleMovie {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 5rem;
	}

	.titleMovie h1 {
    font-family: 'Roboto Slab', sans-serif;
		font-size: 3.2rem;
		font-weight: 400;
	}

	.titleMovie Button {
    font-family: 'Roboto Slab', sans-serif;
		width: 20.7rem;
		height: 4.8rem;
		margin: 0;
	}

	Section button {
		background-color: ${({theme}) => theme.COLORS.GRAY_NEW};

		height: 20.8rem;
	}

	Section h2 {
		display: none;
	}

	Section p {
		margin-top: 1.5rem;
	}

	Section span {
		background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
		color: ${({theme}) => theme.COLORS.WHITE};
	}
`

export const Content = styled.div`
	grid-area: content;
	padding: 0 6.4rem;
	overflow-y: auto;

	padding: 0 12.3rem;
`
