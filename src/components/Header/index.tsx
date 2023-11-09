import { HeaderContainer } from './style'

import logoIgnite from '../../assets/logoIgnite.png'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="hisotry">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
