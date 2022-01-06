import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as λ from 'ramda'

import { changeTab, initializeFaqData } from "@modules/faq";
import { RootState } from '@modules/rootReducer';
import Tab from '@components/Tab';
import Accordion from '@components/Accordion';
import { FAQTabType, FAQContentType} from '@typings/index';
import { Container, Title, InputContainer, Input, Icon } from './FAQPage.style';


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

interface FAQContentTypeWithSelected extends FAQContentType {
  selected: boolean;
}

function FAQPages() {
  const dispatch = useDispatch();
  const { faq_list, faq_tab_list, tab } = useSelector(((state: RootState) => state.faq))
  const { isLoading } = useSelector(((state: RootState) => state.loading))
  const { contents } = faq_list;

  const [list, setList] = useState<FAQContentTypeWithSelected[]>([])
  useEffect(() => {
    dispatch(initializeFaqData())
  }, [dispatch]);

  useEffect(() => {
    setList(contents.map((e: FAQContentType) => ({ ...e, selected: false })))
  }, [contents])

  const onChangeTab = (value: number) => {
    dispatch(changeTab(value))
  }

  const onClickFaqContents = (value: number) => {
    const isEqual = λ.equals(true);
    const reuslt = λ.map((l) => ({
      ...l,
      selected: λ.ifElse(
        isEqual,
        () => !l.selected,
        () => l.selected
      )(l.id === value)
    }), list);
    setList(reuslt);
  }


  if (isLoading) return <div>loading...</div>

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
          {λ.map(
            (t: FAQTabType) => 
              <Tab
                key={`${t.title}-${t.id}`}
                tabName={t.title}
                selected={tab === Number(t.id)}
                value={t.id}
                onClick={onChangeTab}
              />,
          )(faq_tab_list)}
        </FaqTabs>
        <FaqBody>
          {λ.map(
            (category: FAQContentTypeWithSelected) =>
              <Accordion
                key={category.id}
                value={category.id}
                summary={category.summary}
                chidlren={category.details}
                selected={category.selected}
                onClick={onClickFaqContents}
              />
          )(list)}
        </FaqBody>
      </FaqTable>
    </Container>
  );
}

export default FAQPages;
