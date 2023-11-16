import { Input } from 'antd';
import styled from '@emotion/styled';
import Button from './Button';

declare global {
	interface Window {
		daum: any;
	}
}

interface IAddr {
	address: string;
	zonecode: string;
}

const DaumAddress = () => {
	const onClickAddr = () => {
		new window.daum.Postcode({
			oncomplete(data: IAddr) {
				(document.getElementById('addr') as HTMLInputElement).value = data.address;
				(document.getElementById('zipNo') as HTMLInputElement).value = data.zonecode;
				document.getElementById('addrDetail')?.focus();
			},
		}).open();
	};
	return (
		<StyledDaumAddress>
			<StyledAddr>
				<Input id="addr" type="text" readOnly onClick={onClickAddr} />
				<Button Key="searchAddrBtn" type="positive" handleClick={onClickAddr} content="검색" />
			</StyledAddr>
			<Input id="zipNo" type="text" readOnly />
			<Input id="addrDetail" type="text" />
		</StyledDaumAddress>
	);
};

export default DaumAddress;

const StyledAddr = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
`;

const StyledDaumAddress = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	margin: 1rem 0;
`;
