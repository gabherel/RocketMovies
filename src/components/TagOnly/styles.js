import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: transparent;
  
  border: none;


  margin-bottom: 1.6rem;


  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;

    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
      color: ${({ theme }) => theme.COLORS.WHITE_2};
    }
  }

`