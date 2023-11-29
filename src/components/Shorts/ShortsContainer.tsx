import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useUpdateShortsStore } from '../../stores/Product/UpdateShorts/UpdateShortsStore';

interface ShortsContainerProps {
	shortsTitle: string;
	shortsId: number;
	shortsThumbnailUrl: string;
	shortsHits: number;
	shortsLink: string;
	isActivate: boolean;
	shortsExplanation: string;
	targetId: string;
}
const ShortsContainer: React.FC<ShortsContainerProps> = ({
	shortsTitle,
	shortsId,
	shortsThumbnailUrl,
	isActivate,
	shortsHits,
	shortsExplanation,
	targetId,
}) => {
	const navigate = useNavigate();
	const LIMIT_LENGTH = 9;

	const [setShortsThumbnail, setIsActive, setShortsExplanation, setShortTitle, setShortsId, setTargetId] =
		useUpdateShortsStore((state) => [
			state.dispatchSelectedShortsThumbnail,
			state.dispatchSelectedIsActive,
			state.dispatchSelectedShortsExplanation,
			state.dispatchSelectedShortsTitle,
			state.dispatchSelectedShortsId,
			state.dispatchSelectedTargetId,
		]);

	const handleClick = () => {
		setIsActive(isActivate);
		setShortTitle(shortsTitle);
		setShortsId(shortsId);
		setTargetId(targetId);
		setShortsExplanation(shortsExplanation);
		setShortsThumbnail(shortsThumbnailUrl);
		navigate(`/etc/shorts/detail/${shortsId}`);
	};

	return (
		<StyledShortsContainer onClick={handleClick}>
			<StyledImgContainer isActivate={isActivate}>
				<StyledImgItem shortsThumbnailUrl={shortsThumbnailUrl} />
				{!isActivate && <StyledInvisibleText>비공개</StyledInvisibleText>}
			</StyledImgContainer>
			<h3>{shortsTitle.length > LIMIT_LENGTH ? `${shortsTitle.substring(0, LIMIT_LENGTH - 1)}...` : shortsTitle}</h3>
			<div>조회수 {shortsHits} 회</div>
		</StyledShortsContainer>
	);
};
export default ShortsContainer;

const StyledShortsContainer = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;

const StyledImgContainer = styled.div<{ isActivate: boolean }>`
	position: relative;
	width: 10rem;
	height: 20rem;
	background: var(${(props) => (props.isActivate ? '--primary-violet' : '--primary-gray')});
	border-radius: 12px;
`;

const StyledImgItem = styled.div<{ shortsThumbnailUrl: string }>`
	width: 100%;
	height: 100%;
	margin: 0 auto;

	background-image: url(${(props) => props.shortsThumbnailUrl});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
`;

const StyledInvisibleText = styled.h2`
	position: absolute;
	font-size: 3rem;
	top: 40%;
	left: 10%;
	width: 100%;
	font-weight: 900;
	color: var(--secondary-pink);
`;
