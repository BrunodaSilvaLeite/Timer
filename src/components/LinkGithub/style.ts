import styled from 'styled-components'

export const StyledLinkGithub = styled.div`
  div {
    position: absolute;
    top: 0;
    padding: 2rem;
    left: 0;
  }
  div a {
    color: var(--gray-300);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  div span {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['gray-800']};
    border-radius: 50%;
    padding: 0.5rem;
  }

  div a:hover {
    color: ${(props) => props.theme['green-500']};
    fill: var(--purple-dark);
  }
`
