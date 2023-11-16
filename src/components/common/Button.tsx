import { Button as AntdBtn } from "antd";
import styled from "@emotion/styled";

interface ButtonInterface {
  content: string;
  handleClick?: () => void;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  type?: "positive" | "negative" | "cancel";
  key: string;
  disabled?: boolean;
  isFull?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  content,
  handleClick,
  loading,
  type = "positive",
  key,
  htmlType = "button",
  disabled = false,
  isFull = false,
}) => {
  return (
    <StyledAntdButton
      disabled={disabled}
      key={key}
      htmlType={htmlType}
      onClick={handleClick}
      loading={loading}
      isFull={isFull}
    >
      {content}
    </StyledAntdButton>
  );
};
export default Button;

const StyledAntdButton = styled(AntdBtn)<{ isFull: boolean }>`
  width: ${(props) => (props.isFull ? "100%" : "2rem")};
`;
