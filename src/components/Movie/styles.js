import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  > h1 {
    font-family: 'Roboto Slab', sans-serif;
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
  }


  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }

`