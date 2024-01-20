import styled from '@emotion/styled';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import ShortsContainer from '../../../../components/Shorts/ShortsContainer';
import { useShortsList } from './ShortsList.hooks';
import Button from '../../../../components/common/Button';
import { useGetShortsListStore } from '../../../../stores/Product/GetShortsList/GetShortsListStore';

const ShortsList = () => {
	const { data } = useShortsList();
	const [page, setPage] = useGetShortsListStore((state) => [state.page, state.dispatchPage]);
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
				{data?.data.content && (
					<Pagination
						onChange={setPage}
						current={page}
						total={data?.data?.totalElements}
						style={{ position: 'absolute', right: 0, bottom: '5rem' }}
					/>
				)}

				{data?.data.content?.length === 0 && (
					<StyledNoContentContainer>
						<div>쇼츠가 없어요.</div>
						<Button
							content="쇼츠를 등록해보세요!"
							handleClick={() => navigate('/etc/shorts/register')}
							Key="addShorts"
						/>
					</StyledNoContentContainer>
				)}
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

const StyledNoContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
