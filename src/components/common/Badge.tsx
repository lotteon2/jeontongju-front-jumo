import styled from '@emotion/styled';

interface BadgeProps {
	content: string;
}
const Badge: React.FC<BadgeProps> = ({ content }) => <StyledBadge>{content}</StyledBadge>;
export default Badge;

const StyledBadge = styled.div`
	width: 5rem;
	text-align: center;
	border-radius: 8px;
	border: none;
	background-color: #99dc79;
	color: white;
	font-weight: bold;
	padding: 0.3rem;
`;
