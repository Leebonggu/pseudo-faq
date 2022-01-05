import { FaqTab, WhiteBar } from "./Tab.style";

interface TabProps {
  tabName: string;
  selected: boolean;
  style?: any;
}

function Tab(props: TabProps) {
  const { tabName, selected, style } = props;
  return (
    <FaqTab style={style} selected={selected}>
      {tabName}
      {selected && <WhiteBar />}
    </FaqTab>
  );
}

export default Tab;

