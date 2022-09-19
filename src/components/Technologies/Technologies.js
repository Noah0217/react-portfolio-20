import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on many projects that include technologies from front-end to back-end applications.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size = '3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            Express <br />
            SQL <br />
            NoSQL <br />
            OOP <br />
            MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = '3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            React <br />
            Redux <br />
            RESTful APIs <br />
            HTML5 <br />
            CSS3 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
