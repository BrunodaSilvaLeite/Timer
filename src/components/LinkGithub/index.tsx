import { GithubLogo } from 'phosphor-react'
import { StyledLinkGithub } from './style'
export function LinkGithub() {
  return (
    <StyledLinkGithub>
      <div>
        <a
          href="https://github.com/BrunodaSilvaLeite/Timer"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <GithubLogo size={16} weight="bold" />
          </span>
          <p>Repositório no Github</p>
        </a>
      </div>
    </StyledLinkGithub>
  )
}
