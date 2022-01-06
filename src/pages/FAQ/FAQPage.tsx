import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as λ from 'ramda'
import { changeTab, initializeFaqData } from "@modules/faq";
import { RootState } from '@modules/rootReducer';

import { Container, Title, InputContainer, Input, Icon } from './FAQPage.style';
import Tab from '@components/Tab';
import Accordion from '@components/Accordion';
import { FAQTabType } from '@typings/index';


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
  const dispatch = useDispatch();
  const { faq_tab_list, tab } = useSelector(((state: RootState) => state.faq))
  const { isLoading } = useSelector(((state: RootState) => state.loading))
  useEffect(() => {
    dispatch(initializeFaqData())
  }, [dispatch]);

  const onChangeTab = (value: number) => {
    console.log(value)
    dispatch(changeTab(value))
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
          <Accordion />
        </FaqBody>
      </FaqTable>
    </Container>
  );
}

export default FAQPages;
