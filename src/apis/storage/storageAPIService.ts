import APIService from '../../libs/core/api/APIService';
import { UploadS3Response } from './storageAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/storage-service/api`;

class StorageAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async uploadS3(fileName: string) {
		const { data } = await this.post<UploadS3Response>(`/file/${fileName}`);
		return data;
	}
}

export const storageApi: StorageAPIService = StorageAPIService.shared();
