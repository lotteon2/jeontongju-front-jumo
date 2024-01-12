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
				{params.reviewContents.length > 15 ? `${params.reviewContents.slice(0, 14)}...` : params.reviewContents}
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
