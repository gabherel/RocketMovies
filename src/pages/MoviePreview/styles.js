import styled from "styled-components";


export const Container = styled.div`
   main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    padding: 4rem 12.3rem;

    overflow: auto;

    .back a {
      display: flex;

      align-items: center;

      font-size: 1.6rem;

      color: ${({ theme }) => theme.COLORS.PINK};

      gap: .8rem;
    }

    .titleWrapper {
      display: flex;
      align-items: center;

      margin-top: 2.4rem;
      gap: 1.9rem; 

      width: 36.8rem;
      height: 4.7rem;
    }

    .titleWrapper h1 {
      font-family: 'Roboto Slab', sans-serif;

      font-size: 3.6rem;
    }

    .titleWrapper svg {
      width: 1.8rem;
      height: 1.7rem;
    }

    > .statusWrapper {
      display: flex;
      gap: .8rem;

      margin-top: 2.4rem;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }

    }

    .tagAndDescription footer {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }

    .tagAndDescription p{
      font-family: 'Roboto Slab', sans-serif;

      width: 111.3rem;

      text-align: justify;
    }

  }

`
export const Avatar = styled.div`

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
`
