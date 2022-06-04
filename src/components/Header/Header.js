import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiTwotoneMail, AiFillLinkedin, AiTwotoneFile } from 'react-icons/ai'; /*icons for socials*/ 
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '20px;' }}>
           <Span>Portfolio</Span>
            </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Noah0217">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/noah-mejia-b05952212/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href= "mailto: noahm0217@gmail.com">
          <AiTwotoneMail size="3rem"/>
        </SocialIcons>
        <SocialIcons href= "https://docs.google.com/document/d/1fKAy3e2gS0TpRoYT0uMgJAchfg5Se5CD212T1RcVp5c/edit?usp=sharing" alt="Resume">
          <AiTwotoneFile size="3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
  
);

export default Header;
