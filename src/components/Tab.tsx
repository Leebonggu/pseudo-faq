import { FaqTab, WhiteBar } from "./Tab.style";

interface TabProps {
  tabName: string;
  selected: boolean;
  style?: any;
  value: number;
  onClick: (value: number) => void
}

function Tab(props: TabProps) {
  const { tabName, selected, style, value, onClick } = props;
  console.log(selected)
  return (
    <FaqTab style={style} selected={selected} onClick={() => onClick(value)}>
      {tabName}
      {selected && <WhiteBar />}
    </FaqTab>
  );
}

export default Tab;

