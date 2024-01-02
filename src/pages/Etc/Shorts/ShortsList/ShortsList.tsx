import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import ShortsContainer from '../../../../components/Shorts/ShortsContainer';
import { useShortsList } from './ShortsList.hooks';
import Button from '../../../../components/common/Button';

const ShortsList = () => {
	const { data } = useShortsList();
	const navigate = useNavigate();

	return (
		<StyledShortsListPage>
			<h2>SHORTS</h2>
			<StyledShortsHeader>
				<div>쇼츠를 누르면 상세페이지로 이동해요.</div>
				<Button content="등록하기" Key="addShorts" handleClick={() => navigate('/etc/shorts/register')} />
			</StyledShortsHeader>
			<StyledShortsContainer>
				{data?.data.content?.map((it) => (
					<ShortsContainer
						key={it.shortsId}
						shortsTitle={it.shortsTitle}
						shortsId={it.shortsId}
						shortsThumbnailUrl={it.shortsThumbnailUrl}
						shortsHits={it.shortsHits}
						isActivate={it.isActivate}
						shortsDescription={it.shortsDescription}
						targetId={it.targetId}
						shortsLink={it.targetId}
					/>
				))}
			</StyledShortsContainer>
		</StyledShortsListPage>
	);
};
export default ShortsList;

const StyledShortsListPage = styled.div``;

const StyledShortsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledShortsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 2rem;
`;
