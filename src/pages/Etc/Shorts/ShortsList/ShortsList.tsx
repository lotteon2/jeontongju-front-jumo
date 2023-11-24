import styled from '@emotion/styled';
import ShortsContainer from '../../../../components/Shorts/ShortsContainer';

const ShortsList = () => (
	<StyledShortsListPage>
		<h2>SHORTS</h2>
		<StyledShortsContainer>
			<ShortsContainer
				shortsThumbnailUrl="https://github.com/lotteon2/jeontongju-front-jumo/assets/72402747/18ba0bcc-b3a2-4369-be11-fdaf9b30e5ef"
				shortsId={1}
				shortsLink="li23"
				shortsHits={100}
				isActivate
			/>
			<ShortsContainer shortsThumbnailUrl="" shortsId={2} shortsLink="li23" shortsHits={100} isActivate={false} />
		</StyledShortsContainer>
	</StyledShortsListPage>
);
export default ShortsList;

const StyledShortsListPage = styled.div``;

const StyledShortsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 2rem;
`;
