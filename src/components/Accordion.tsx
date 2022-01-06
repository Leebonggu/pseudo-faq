import { ReactNode } from 'react';
import { AiFillCaretUp } from 'react-icons/ai'
import { Container, IconWrapper, AccodianTitle, AccodianContents } from './Accordion.style';

interface AccordionProps {
  chidlren?: ReactNode;
  summary: string;
  selected: boolean;
  onClick: (value: number) => void;
  value: number | string;
}

function Accordion(props: AccordionProps) {
  const { chidlren, summary, selected, onClick, value } = props;
  return (
    <>
      <Container onClick={() => onClick(Number(value))}>
        <AccodianTitle>{summary}</AccodianTitle>
        <IconWrapper selected={selected}>
          <AiFillCaretUp />
        </IconWrapper>
      </Container>
      {selected && <AccodianContents>{chidlren}</AccodianContents>}
    </>
  );
}

export default Accordion;

