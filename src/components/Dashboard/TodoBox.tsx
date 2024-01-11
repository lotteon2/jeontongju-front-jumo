import styled from '@emotion/styled';

const TodoBox = ({
	trackingNumberNotEntered,
	stockUnderFive,
}: {
	trackingNumberNotEntered: number;
	stockUnderFive: number;
}) => {
	return (
		<StyledTodoBox>
			<h2>오늘의 할 일</h2>
			<div>운송장 미입력 {trackingNumberNotEntered}</div>
			<div>재고 5개 미만 {stockUnderFive}</div>
		</StyledTodoBox>
	);
};

export default TodoBox;

const StyledTodoBox = styled.div`
	border-radius: 12px;
	background-color: #cccc;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	cursor: pointer;
	padding: 1rem;
	flex: 1;
	justify-content: center;
	align-items: center;
`;
