import React from 'react';
import { Table as AntdTable } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

interface TableInterface<T> {
	columns: ColumnsType<T>;
	data: T[];
	pagination?: TablePaginationConfig | false;
}

const Table = <T,>({ data, columns, pagination }: TableInterface<T>) => (
	<div role="none">
		<AntdTable key="1" columns={columns as ColumnsType<T>} dataSource={data} pagination={pagination} />
	</div>
);

export default React.memo(Table);
