import react, { useRef } from "react";
import styled from "@emotion/styled";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { DatePicker, DatePickerProps } from "antd";
import Badge from "../../../components/common/Badge";

const CashUp = () => {
  const ref = useRef();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <StyledCashUpHeader>
        <DatePicker
          onChange={onChange}
          picker="month"
          placeholder="연월을 선택해주세요"
        />
        <Badge content="11월" />
        <h3>000주모님의 11월 정산내역이에요.</h3>
        <button type="button" onClick={handlePrint}>
          인쇄하기
        </button>
      </StyledCashUpHeader>

      <img
        ref={componentRef}
        src="https://github.com/lotteon2/jeontongju-front-jumo/assets/72402747/61ddaee8-dd62-42e2-ba45-aa50ec7c9804"
        width="100%"
        alt="정산 이미지"
      />
    </div>
  );
};
export default CashUp;

const StyledCashUpHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
