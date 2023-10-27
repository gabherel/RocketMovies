import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 10.5rem auto;
	grid-template-areas:
		"header"
		"content";

	> main {
		grid-area: content;
		overflow-y: auto;
	}

	.tags {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`

export const Form = styled.form`
	max-width: 113.7rem;
	margin: 3.8rem auto;

	.icon-wrapper {
		display: flex;
		align-items: center;
		gap: .8rem;

		> svg {
			color: ${({theme}) => theme.COLORS.PINK};
		}
		
		> a {
			color: ${({theme}) => theme.COLORS.PINK};
			font-size: 1.6rem;
		}
	}


	> header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 2.4rem;
		margin-bottom: 3.6rem;
	}


	Section {
		> .tags {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			height: 8.8rem;

			background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

			align-items: center;
			gap: 2.4rem;

			padding: 1.6rem;

			border-radius: 8px;

			> div:nth-child(1) {
				background-color: ${({theme}) => theme.COLORS.GRAY_400};
				width: 11.3rem;
				height: 5.6rem;

				svg {
					color: ${({theme}) => theme.COLORS.PINK};
				}
			}

			> div:nth-child(2) {
				background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
				width: 18rem;
				height: 5.6rem;

				border-radius: 10px;
				border: 2px dashed ${({theme}) => theme.COLORS.GRAY_200};
			}
		}
	}

	.inputWrapper {
		display: flex;
		gap: 4rem;
	}

	Textarea {
		height: 27.4rem;
	}

	.buttonWrapper {
		display: flex;
		gap: 4rem;

		> button {
			width: 53.6rem;
		}

		> .delete {
			background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
			color: ${({theme}) => theme.COLORS.PINK};
		}
	}
`
