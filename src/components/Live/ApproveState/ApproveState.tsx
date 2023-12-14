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
	background-color: ${(props) =>
		props.approveState === 'DENY' ? '#F92525' : props.approveState === 'ALLOW' ? '#99dc79' : '#F3F3F3'};
	color: ${(props) => (props.approveState === 'WAIT' ? 'black' : 'white')};
`;
