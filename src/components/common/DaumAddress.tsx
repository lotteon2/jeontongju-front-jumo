import { Input } from 'antd';
import styled from '@emotion/styled';
import Button from './Button';
import { useAddressStore } from '../../stores/Address/AddressStore';

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
	const [
		breweryAddressDetail,
		breweryZonecode,
		breweryAddress,
		setBreweryAddressDetail,
		setBreweryZonecode,
		setBreweryAddress,
	] = useAddressStore((state) => [
		state.breweryAddressDetail,
		state.breweryZonecode,
		state.breweryAddress,
		state.dispatchBreweryAddressDetail,
		state.dispatchBreweryZonecode,
		state.dispatchBreweryAddresss,
	]);
	const onClickAddr = () => {
		new window.daum.Postcode({
			oncomplete(data: IAddr) {
				setBreweryZonecode(data.zonecode);
				setBreweryAddress(data.address);
				document.getElementById('addrDetail')?.focus();
			},
		}).open();
	};
	return (
		<StyledDaumAddress>
			<StyledAddr>
				<Input type="text" readOnly onClick={onClickAddr} value={breweryAddress} />
				<Button Key="searchAddrBtn" btntype="positive" handleClick={onClickAddr} content="검색" />
			</StyledAddr>
			<Input type="text" readOnly value={breweryZonecode} />
			<Input
				id="addrDetail"
				type="text"
				value={breweryAddressDetail}
				onChange={(e) => {
					setBreweryAddressDetail(e.target.value);
				}}
			/>
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
