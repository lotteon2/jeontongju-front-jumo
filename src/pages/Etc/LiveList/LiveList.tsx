import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import LiveContainer from "../../../components/Live/LiveContainer";
import Table from "../../../components/common/Table";
import { useLiveTable } from "./LiveList.hooks";

const LiveList = () => {
  const { liveData, columns } = useLiveTable();
  return (
    <StyledLivePage>
      <StyledLiveTable>
        <h3>나의 경매 참여 내역</h3>
        <Table data={liveData} columns={columns} />
      </StyledLiveTable>
      <div>
        <StyledInfoContainer>
          <h3>라이브 경매 예정 리스트</h3>
          <Tooltip title="경매 예정 리스트를 눌러 경매 신청을 해보세요.">
            <InfoCircleOutlined />
          </Tooltip>
        </StyledInfoContainer>
        <LiveContainer id={1} title="11/20 오늘의 경매" />
      </div>
    </StyledLivePage>
  );
};
export default LiveList;

const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 1;
  flex-grow: 1;
`;

const StyledLiveTable = styled.div`
  flex-shrink: 2;
  flex-grow: 2;
`;

const StyledLivePage = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;
`;
