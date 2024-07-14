import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.size.MAIN_WIDTH_MOBILE};
  background: none;
  height: 75vh;
  overflow-y: auto;
  display: grid;
  place-content: start;
  text-align: justify;

  &::-webkit-scrollbar {
    width: 0;
    -ms-overflow-style: none;
  }

  #aboutContainer {
    background: none;
  }

  section + section {
    margin-top: 1.6rem;
  }

  section {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    h4::before {
      content: "●";
      font-size: 1.2rem;
      margin-right: 0.4rem;
    }

    p {
      font-size: 1.4rem;
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.colors.LIGHT200};

      a {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.PRIMARY500};
        text-decoration: underline;
      }
    }
  }

  li {
    margin-top: 1.6rem;
  }

  @media (min-width: 768px) {
    max-width: ${({ theme }) => theme.size.MAIN_WIDTH_DESKTOP};
    height: 65vh;
    padding-right: 2.4rem;

    &::-webkit-scrollbar {
      width: 0.75rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.DARK200};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.LIGHT200};
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.LIGHT400};
    }

    section + section {
      margin-top: 2.4rem;
    }

    section {
      h2 {
        font-size: 2.4rem;
      }

      h3 {
        font-size: 2rem;
      }

      h4 {
        font-size: 1.6rem;
      }

      h4::before {
        font-size: 1.4rem;
        margin-right: 0.8rem;
      }

      p {
        margin-top: 1.6rem;
        font-size: 1.6rem;

        a {
          font-size: 1.6rem;
        }
      }
    }

    li {
      margin-top: 2.4rem;
    }
  }
`;
