import styled from '@emotion/styled';
import { Form, Input } from 'antd';
import Button from '../../../../components/common/Button';

const ShortsDetail = ({
  isActivate = true,
  shortsThumbnailUrl = 'https://github.com/lotteon2/jeontongju-front-jumo/assets/72402747/18ba0bcc-b3a2-4369-be11-fdaf9b30e5ef',
}) => (
  <StyledShortsDetailPage>
    <div>
      <StyledImgContainer isActivate={isActivate}>
        <StyledImgItem shortsThumbnailUrl={shortsThumbnailUrl} />
      </StyledImgContainer>
      <div>해당 상품 보러가기</div>
      <div>해당 쇼츠 보러가기</div>
      <StyledEditBtn>
        <Button content="수정하기" Key="editShorts" />
      </StyledEditBtn>
    </div>
    <StyledRightInfoContainer>
      <StyledShortsInfoContainer>
        <Form>
          <Form.Item
            label="쇼츠 이름"
            name="sweet"
            rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="쇼츠 짧은 설명"
            name="sweet"
            rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="누적 조회수"
            name="sweet"
            rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </StyledShortsInfoContainer>
    </StyledRightInfoContainer>
  </StyledShortsDetailPage>
);
export default ShortsDetail;
const StyledShortsDetailPage = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const StyledImgContainer = styled.div<{ isActivate: boolean }>`
  flex-grow: 1;
  position: relative;
  width: 30vw;
  height: 50vh;
  background: var(
    ${(props) => (props.isActivate ? '--primary-violet' : '--primary-gray')}
  );
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
