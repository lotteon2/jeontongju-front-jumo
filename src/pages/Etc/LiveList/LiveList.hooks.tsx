import { ColumnsType } from "antd/es/table";
import { LiveListTableDataType } from "../../../constants/TableDataType/LiveListTableDataType";

export const useLiveTable = () => {
  const columns: ColumnsType<LiveListTableDataType> = [
    {
      title: "경매이름",
      dataIndex: "liveId",
      key: "liveId",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "방송일",
      dataIndex: "liveId",
      key: "liveId",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "상품이름",
      dataIndex: "a",
      key: "a",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "낙찰가격",
      dataIndex: "b",
      key: "b",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "시작가",
      dataIndex: "c",
      key: "c",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "참여자수",
      dataIndex: "d",
      key: "d",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
    },
  ];

  const liveData: LiveListTableDataType[] = [
    { liveId: 1, productId: 2, a: 1, b: 1, c: 1, d: 1, key: 1 },
  ];

  return {
    columns,
    liveData,
  };
};
