import react, { useRef } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { DatePicker, DatePickerProps } from 'antd';
import Badge from '../../../components/common/Badge';
import { useCashUpStore } from '../../../stores/Cash/CashUp/CashUpStore';
import { useGetMyCashUpImageQuery } from '../../../queries/useGetMyCashUpImageQuery';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';

const CashUp = () => {
	const monthFormat = 'YYYY-MM';
	const { MonthPicker } = DatePicker;
	const [searchMonth, setSearchMonth, searchYear, setSearchYear] = useCashUpStore((state) => [
		state.searchMonth,
		state.dispatchSearchMonth,
		state.searchYear,
		state.dispatchSearchYear,
	]);

	const storeName = useMyInfoStore((state) => state.storeName);

	const ref = useRef();
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		setSearchYear(dateString.split('-')[0]);
		setSearchMonth(dateString.split('-')[1]);
	};

	const { data } = useGetMyCashUpImageQuery();

	return (
		<div>
			<StyledCashUpHeader>
				<MonthPicker onChange={onChange} format={monthFormat} placeholder={`${searchYear}-${searchMonth}`} />
				<Badge content={`${searchMonth}월`} />
				<div>
					{storeName} 주모님의 {searchYear} - {searchMonth} 정산내역이에요.
				</div>
				<button type="button" onClick={handlePrint}>
					인쇄하기
				</button>
			</StyledCashUpHeader>
			{data?.data ? (
				<StyledImgWrapper>
					<img
						ref={componentRef}
						src={data ? data.data.settlementImgUrl : null}
						width="100%"
						height="100%"
						alt="정산 이미지"
					/>
					<img
						src="https://jeontongju-dev-bucket2.s3.ap-northeast-2.amazonaws.com/QR/99d6235e-3b4f-4a56-8a74-a1028600rd44.png"
						alt="플친 QR"
					/>
				</StyledImgWrapper>
			) : (
				<div>정산 내역이 없어요.</div>
			)}
		</div>
	);
};
export default CashUp;

const StyledCashUpHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledImgWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
