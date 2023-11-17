import { Button as AntdBtn } from "antd";
import styled from "@emotion/styled";

interface ButtonInterface {
  content: string;
  handleClick?: () => void;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  type?: "positive" | "negative" | "cancel";
  Key: string;
  disabled?: boolean;
  isfull?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  content,
  handleClick,
  loading,
  type = "positive",
  Key,
  htmlType = "button",
  disabled = false,
  isfull = false,
}) => {
  return (
    <StyledAntdButton
      disabled={disabled}
      key={Key}
      htmlType={htmlType}
      onClick={handleClick}
      loading={loading}
      width={isfull ? "100%" : "4rem"}
    >
      {content}
    </StyledAntdButton>
  );
};
export default Button;

const StyledAntdButton = styled(AntdBtn)<{ width: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
