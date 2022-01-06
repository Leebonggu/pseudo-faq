import { ReactNode } from 'react';
import { AiFillCaretUp } from 'react-icons/ai'
import { Container, IconWrapper, AccodianTitle, AccodianContents } from './Accordion.style';

interface AccordionProps {
  chidlren?: ReactNode;
}

function Accordion(props: AccordionProps) {
  const { chidlren } = props;
  return (
    <>
      <Container>
        <AccodianTitle>title</AccodianTitle>
        <IconWrapper selected={false}>
          <AiFillCaretUp />
        </IconWrapper>
      </Container>
      <AccodianContents>
        {chidlren}
      </AccodianContents>
    </>
  );
}

export default Accordion;

