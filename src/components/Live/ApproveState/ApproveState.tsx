import styled from '@emotion/styled';
import { APPROVE, translateApproveState } from '../../../constants/ApproveType';

const ApproveState = ({ approveState }: { approveState: keyof typeof APPROVE }) => {
	return <StyledApproveState approveState={approveState}>{translateApproveState(approveState)}</StyledApproveState>;
};
export default ApproveState;

const StyledApproveState = styled.div<{ approveState: keyof typeof APPROVE }>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	text-align: center;
	color: ${(props) => (props.approveState === 'WAIT' ? 'black' : '#F92525')};
`;
