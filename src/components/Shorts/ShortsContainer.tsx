import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface ShortsContainerProps {
  shortsId: number;
  shortsThumbnailUrl: string;
  shortsHits: number;
  shortsLink: string;
  isActivate: boolean;
}
const ShortsContainer: React.FC<ShortsContainerProps> = ({
  shortsId,
  shortsThumbnailUrl,
  isActivate,
  shortsHits,
}) => {
  const navigate = useNavigate();
  return (
    <StyledShortsContainer
      onClick={() => navigate(`/etc/shorts/detail/${shortsId}`)}
    >
      <StyledImgContainer isActivate={isActivate}>
        <StyledImgItem shortsThumbnailUrl={shortsThumbnailUrl} />
        {!isActivate && <StyledInvisibleText>비공개</StyledInvisibleText>}
      </StyledImgContainer>
      <h3>복순이가 복순복순</h3>
      <div>
        조회수
        {shortsHits}
        {' '}
        회
      </div>
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
  width: 10vw;
  height: 30vh;
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

const StyledInvisibleText = styled.h2`
  position: absolute;
  font-size: 6rem;
  top: 40%;
  left: 10%;
  width: 100%;
  font-weight: 900;
  color: var(--secondary-pink);
`;
