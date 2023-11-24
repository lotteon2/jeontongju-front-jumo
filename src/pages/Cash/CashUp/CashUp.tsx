import react, { useRef } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { DatePicker, DatePickerProps } from 'antd';
import Badge from '../../../components/common/Badge';
import { useCashUpStore } from '../../../stores/Cash/CashUp/CashUpStore';

const CashUp = () => {
	const monthFormat = 'YYYY-MM';
	const { MonthPicker } = DatePicker;
	const [searchMonth, setSearchMonth, searchYear, setSearchYear] = useCashUpStore((state) => [
		state.searchMonth,
		state.dispatchSearchMonth,
		state.searchYear,
		state.dispatchSearchYear,
	]);

	const ref = useRef();
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString);
		setSearchYear(dateString.split('-')[0]);
		setSearchMonth(dateString.split('-')[1]);
		console.log(dateString.split('-')[0]);
	};

	return (
		<div>
			<StyledCashUpHeader>
				<MonthPicker onChange={onChange} format={monthFormat} placeholder={`${searchYear}-${searchMonth}`} />
				<Badge content={`${searchMonth}월`} />
				<h3>
					000주모님의 {searchYear}-{searchMonth} 정산내역이에요.
				</h3>
				<button type="button" onClick={handlePrint}>
					인쇄하기
				</button>
			</StyledCashUpHeader>

			<img
				ref={componentRef}
				src="https://github.com/lotteon2/jeontongju-front-jumo/assets/72402747/61ddaee8-dd62-42e2-ba45-aa50ec7c9804"
				width="100%"
				alt="정산 이미지"
			/>
		</div>
	);
};
export default CashUp;

const StyledCashUpHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
