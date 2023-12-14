import { UpdateProductTableDataType } from '../../../constants/TableDataType/UpdateProductTableDataType';

export interface UpdateProductStateDispatcher extends UpdateProductTableDataType {
	dispatchProductId: (value: string) => void;
	dispatchProductThumbnail: (value: string) => void;
	dispatchProductDetailImg: (value: string) => void;
	dispatchProductStock: (value: number) => void;
	dispatchProductName: (value: string) => void;
	dispatchProductPrice: (value: number) => void;
	dispatchProductVisibility: (value: boolean) => void;
	clear: () => void;
}
