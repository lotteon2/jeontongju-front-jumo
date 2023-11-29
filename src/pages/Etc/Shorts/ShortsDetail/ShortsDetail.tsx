import styled from '@emotion/styled';
import { Form, Input, Radio } from 'antd';
import Button from '../../../../components/common/Button';
import { useUpdateShortsStore } from '../../../../stores/Product/UpdateShorts/UpdateShortsStore';
import { useUpdateShortsMutation } from '../../../../mutations/product/useUpdateShortMutation';
import { Toast } from '../../../../components/common/Toast';

const ShortsDetail = () => {
	const [
		targetId,
		shortsThumbnail,
		shortsTitle,
		setShortsTitle,
		shortsDescription,
		setShortsDescription,
		isActive,
		setIsActive,
	] = useUpdateShortsStore((state) => [
		state.selectedTargetId,
		state.selectedShortsThumbnail,
		state.selectedShortsTitle,
		state.dispatchSelectedShortsTitle,
		state.selectedShortsDescription,
		state.dispatchSelectedShortsDescription,
		state.selectedIsActivate,
		state.dispatchSelectedIsActivate,
	]);
	const { mutateAsync } = useUpdateShortsMutation();

	const handleUpdateShorts = async () => {
		await mutateAsync()
			.then((res) => {
				Toast(true, '쇼츠 수정이 완료되었어요.');
			})
			.catch((err) => Toast(false, '쇼츠 수정에 실패했어요.'));
	};

	return (
		<StyledShortsDetailPage>
			<StyledShortsDetailHeader>
				<div>쇼츠 수정을 원하시면 수정 버튼을 눌러주세요.</div>
				<StyledEditBtn>
					<Button content="수정하기" Key="editShorts" handleClick={handleUpdateShorts} />
				</StyledEditBtn>
			</StyledShortsDetailHeader>
			<div>
				<div>
					<StyledImgContainer isActivate={isActive}>
						<StyledImgItem shortsThumbnailUrl={shortsThumbnail} />
					</StyledImgContainer>
					<a href={targetId}>유저들에게 보이는 페이지 보러가기</a>
					<div>해당 쇼츠 보러가기</div>
				</div>
				<StyledRightInfoContainer>
					<StyledShortsInfoContainer>
						<Form>
							<Form.Item label="쇼츠 이름">
								<Input value={shortsTitle} onChange={(e) => setShortsTitle(e.target.value)} />
							</Form.Item>
							<Form.Item label="쇼츠 짧은 설명">
								<Input value={shortsDescription} onChange={(e) => setShortsDescription(e.target.value)} />
							</Form.Item>
							<Form.Item>
								<div>공개 여부:</div>
								<Radio.Group name="isActive" value={isActive ? 'true' : 'false'}>
									<Radio
										value="true"
										checked={isActive === true}
										name="isActive"
										onChange={(e) => setIsActive(e.target.value === 'true')}
									>
										공개
									</Radio>
									<Radio
										value="false"
										checked={isActive === false}
										name="isActive"
										onChange={(e) => setIsActive(e.target.value === 'true')}
									>
										비공개
									</Radio>
								</Radio.Group>
							</Form.Item>
						</Form>
					</StyledShortsInfoContainer>
				</StyledRightInfoContainer>
			</div>
		</StyledShortsDetailPage>
	);
};
export default ShortsDetail;
const StyledShortsDetailPage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const StyledImgContainer = styled.div<{ isActivate: boolean }>`
	flex-grow: 1;
	position: relative;
	width: 20rem;
	height: 30rem;
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

const StyledShortsInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 0;
`;

const StyledEditBtn = styled.div`
	margin-right: 0;
	float: right;
`;

const StyledRightInfoContainer = styled.div`
	flex-grow: 1;
`;

const StyledShortsDetailHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
