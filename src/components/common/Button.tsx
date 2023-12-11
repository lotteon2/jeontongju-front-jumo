import { Button as AntdBtn } from 'antd';
import styled from '@emotion/styled';

interface ButtonInterface {
	content: string;
	handleClick?: () => void;
	loading?: boolean;
	htmlType?: 'button' | 'submit' | 'reset' | undefined;
	btntype?: 'positive' | 'negative' | 'cancel' | 'disabled';
	Key: string;
	disabled?: boolean;
	width?: string;
	isfull?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
	content,
	handleClick,
	loading,
	btntype = 'positive',
	Key,
	htmlType = 'button',
	disabled = false,
	isfull = false,
	width,
}) => (
	<StyledAntdButton
		disabled={disabled}
		key={Key}
		htmlType={htmlType}
		onClick={handleClick}
		loading={loading}
		width={isfull ? '100%' : width}
		btntype={btntype}
	>
		{content}
	</StyledAntdButton>
);
export default Button;

const StyledAntdButton = styled(AntdBtn)<{
	width: string;
	btntype: 'positive' | 'negative' | 'cancel' | 'disabled';
}>`
	color: ${(props) => (props.btntype === 'positive' ? 'white' : 'black')};
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	text-align: center;
	font-weight: 800;
	border-radius: 10px;
	border: none;
	cursor: ${(props) => (props.btntype === 'disabled' ? 'none' : 'pointer')};
	background: ${(props) =>
		props.btntype === 'positive'
			? '#99dc79'
			: props.btntype === 'negative'
			  ? '#F92525'
			  : props.btntype === 'disabled'
			    ? '#ccc'
			    : '#F3F3F3'};
`;
