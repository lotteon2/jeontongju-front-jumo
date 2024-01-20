import styled from '@emotion/styled';
import DefaultImg from '../../assets/images/defaultImg.png';
import { GetReviewsForDashBoardResponseData } from '../../apis/review/reviewAPIService.types';

const ReviewBox = ({ params }: { params: GetReviewsForDashBoardResponseData }) => {
	return (
		<StyledReviewBox>
			<StyledUserBox>
				<img src={params.profileImageUrl || DefaultImg} alt="profile" width="20" height="20" />
				<div>{params.name}</div>
			</StyledUserBox>
			<div>
				{params.reviewContents}
				{params.reviewContents.length > 30 ? `${params.reviewContents.slice(0, 29)}...` : params.reviewContents}
			</div>
		</StyledReviewBox>
	);
};
export default ReviewBox;

const StyledReviewBox = styled.div`
	border-radius: 12px;
	box-shadow: 3px 3px 1px 1px #c0c0c0;
	padding: 1rem;
	margin-bottom: 0.5rem;

	@media only screen and (min-width: 200px) and (max-width: 480px) {
		width: 100vw;
		div {
			white-space: normal;
		}
	}
`;
const StyledUserBox = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: dark-gray;
	margin-bottom: 0.5rem;

	img {
		border-radius: 50%;
	}
`;
