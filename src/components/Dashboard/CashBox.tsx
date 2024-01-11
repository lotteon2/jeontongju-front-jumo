import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const CashBox = ({ monthSales, monthSettlement }: { monthSales: number; monthSettlement: number }) => {
	const navigate = useNavigate();
	return (
		<StyledCashBox>
			<div role="presentation" onClick={() => navigate('/cash/list')}>
				<h2>이번달 판매량</h2>
				<StyledDesc>2023-1-1 ~ 2023-1-5</StyledDesc>
				<div>{monthSales}원</div>
			</div>
			<div role="presentation" onClick={() => navigate('/cash/up')}>
				<h2>이번달 정산 금액</h2>
				<StyledDesc>* 예상 금액으로 바뀔 수 있어요</StyledDesc>
				<div>{monthSettlement}원</div>
			</div>
		</StyledCashBox>
	);
};

export default CashBox;

const StyledCashBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ccc;
	border-radius: 12px;
	padding: 2rem;
	gap: 2rem;
	h2 {
		cursor: pointer;
	}
`;

const StyledDesc = styled.div`
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;
