import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Title, InputContainer, Input, Icon } from './FAQPage.style';
import Tab from '@components/Tab';
import Accordion from '@components/Accordion';

const FaqTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FaqTabs = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 25px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`;

const FaqBody = styled.div`
  width: 100%;
`;

function FAQPages() {
  return (
    <Container>
      <Title>안녕하세요! 무엇을 도와드릴까요</Title>
      <InputContainer>
        <Input placeholder='검색어를 입력해주세요'/>
        <Icon>
          <AiOutlineSearch />
        </Icon>
      </InputContainer>
      <FaqTable>
        <FaqTabs>
          <Tab tabName='tab1' selected={true}/>
        </FaqTabs>
        <FaqBody>
          <Accordion />
        </FaqBody>
      </FaqTable>
    </Container>
  );
}

export default FAQPages;
