import { Button as AntdBtn } from "antd";
import styled from "@emotion/styled";

interface ButtonInterface {
  content: string;
  handleClick?: () => void;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  btntype?: "positive" | "negative" | "cancel";
  Key: string;
  disabled?: boolean;
  isfull?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  content,
  handleClick,
  loading,
  btntype = "positive",
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
      btntype={btntype}
    >
      {content}
    </StyledAntdButton>
  );
};
export default Button;

const StyledAntdButton = styled(AntdBtn)<{
  width: string;
  btntype: "positive" | "negative" | "cancel";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  text-align: center;
  font-weight: 900;
  border-radius: 10px;
  border: none;
  background: ${(props) =>
    props.btntype === "positive"
      ? "#ffa1a1"
      : props.btntype === "negative"
      ? "#F92525"
      : "#F3F3F3"};
`;
