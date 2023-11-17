import Table from "../../../components/common/Table";
import { useOrderList } from "./OrderList.hooks";

const OrderList = () => {
  const { orderListData, columns } = useOrderList();
  return (
    <div>
      <Table data={orderListData} columns={columns} />
    </div>
  );
};
export default OrderList;
