import { ColumnsType } from "antd/es/table";
import { Avatar, Dropdown } from "antd";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import { UpdateProductTableDataType } from "../../../constants/TableDataType/UpdateProductTableDataType";
import { Alert } from "../../../components/common/Alert";
import { Toast } from "../../../components/common/Toast";
import { useUpdateProductStore } from "../../../stores/UpdateProduct/UpdateProductStore";

export const useProductUpdateModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [
    setProductDetailImg,
    setProductName,
    setProductPrice,
    setProductStock,
    setProductThumbnail,
    setProductVisibility,
    clearValues,
  ] = useUpdateProductStore((state) => [
    state.dispatchProductDetailImg,
    state.dispatchProductName,
    state.dispatchProductPrice,
    state.dispatchProductStock,
    state.dispatchProductThumbnail,
    state.dispatchProductVisibility,
    state.clear,
  ]);

  const showModal = (row: UpdateProductTableDataType) => {
    setIsModalOpen(() => true);
    console.log(row);
    setProductDetailImg(row.productDetailImg);
    setProductName(row.productName);
    setProductPrice(row.productPrice);
    setProductStock(row.productStock);
    setProductThumbnail(row.productThumbnail);
    setProductVisibility(row.productVisibility);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    console.log("here");
    // TODO: 상품 수정 api 연동
    clearValues();
    Toast(true, "상품 수정이 완료되었어요.");
  };

  return {
    isModalOpen,
    showModal,
    isDisabled,
    setIsDisabled,
    isLoading,
    setIsLoading,
    handleCancel,
    handleOk,
  };
};

export const useProductListTable = () => {
  const {
    showModal,
    isModalOpen,
    isDisabled,
    isLoading,
    handleCancel,
    handleOk,
  } = useProductUpdateModal();
  const handleDelete = (id: string) => {
    // productId
    Alert({
      title: "상품을 삭제하시겠어요?",
      text: "삭제하시면 되돌릴 수 없어요.",
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: API 연동
        console.log("삭제됨");

        Toast(true, "상품 정보가 삭제되었어요.");
      }
    });
  };

  const columns: ColumnsType<UpdateProductTableDataType> = [
    {
      title: "대표 이미지",
      dataIndex: "productThumbnail",
      key: "productThumbnail",
      width: "5%",
      render: (text) => <Avatar src={text || null} size="large" />,
    },
    {
      title: "상품 번호",
      dataIndex: "productId",
      key: "productId",
      align: "center",
    },
    {
      title: "상품 이름",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "누적 판매개수",
      dataIndex: "productSumCount",
      key: "productSumCount",
      align: "center",
    },
    {
      title: "판매금액(정가)",
      dataIndex: "productPrice",
      key: "productPrice",
      align: "center",
    },
    {
      title: "재고",
      dataIndex: "productStock",
      align: "center",
    },
    {
      title: "리뷰",
      dataIndex: "productReviewCount",
      key: "productReviewCount",
      align: "center",
    },
    {
      title: "등록한 쇼츠",
      dataIndex: "productShortsId",
      key: "productShortsId",
      align: "center",
    },
    {
      title: "공개 여부",
      dataIndex: "productVisibility",
      key: "productVisibility",
      render: (text, row) => (
        <div>{row.productVisibility ? "공개" : "비공개"}</div>
      ),
      align: "center",
    },
    {
      title: "",
      dataIndex: "key",
      key: "delete",
      align: "center",
      render: (text, row) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "updateProduct",
                label: (
                  <button type="button" onClick={() => showModal(row)}>
                    <EditOutlined /> 수정
                  </button>
                ),
              },
              {
                key: "deleteProduct",
                label: (
                  <button
                    type="button"
                    onClick={() => handleDelete(row.productId as string)}
                  >
                    <DeleteOutlined /> 삭제
                  </button>
                ),
              },
            ],
          }}
        >
          <MoreOutlined />
        </Dropdown>
      ),
    },
  ];

  // onClick={() => handleDelete(row.productId as string)}

  const productData: UpdateProductTableDataType[] = [
    {
      key: 1,
      productId: "P10123",
      productThumbnail: "https://avatars.githubusercontent.com/u/79967044?v=4",
      productName: "복순도가",
      productPrice: 3000,
      productSumCount: 100,
      productStock: 5,
      productReviewCount: 3,
      productShortsId: 12,
      productVisibility: true,
      productDetailImg: "https://avatars.githubusercontent.com/u/79967044?v=4",
    },
    {
      key: 2,
      productId: "P10124",
      productThumbnail: "https://avatars.githubusercontent.com/u/79967044?v=4",
      productName: "안동소주",
      productPrice: 5000,
      productSumCount: 1,
      productStock: 2,
      productReviewCount: 2,
      productShortsId: 10,
      productVisibility: false,
      productDetailImg: "https://avatars.githubusercontent.com/u/79967044?v=4",
    },
  ];
  return {
    columns,
    productData,
    isModalOpen,
    isDisabled,
    isLoading,
    handleCancel,
    handleOk,
  };
};
