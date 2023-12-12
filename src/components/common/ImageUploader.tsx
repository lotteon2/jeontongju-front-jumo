import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Avatar, message, Upload } from 'antd';
import styled from '@emotion/styled';
import { Toast } from './Toast';
import { storageApi } from '../../apis/storage/storageAPIService';

interface ImageUploaderInterface {
	imageUrl: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ImageUploader: React.FC<ImageUploaderInterface> = ({ imageUrl, setImageUrl }) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const uploadImgBtn = useCallback(() => {
		inputRef.current?.click();
	}, []);

	const handleChangeFile = async (event: any) => {
		event.preventDefault();
		const imageData = { image: event.target.files[0] };
		const formData = new FormData();
		formData.append('image', event.target.files[0]);

		console.log(event.target.files[0]);
		const contentType = event.target.files[0].mimeType;
		const binaryString = event.target.files[0].bin; // bin is a binary string

		// rebuild the file object as a Blob to send to Amazon
		const bytes = new Uint8Array(binaryString.length);

		for (let i = 0; i < binaryString.length; i += 1) {
			bytes[i] = binaryString.charCodeAt(i);
		}

		const file = new Blob([bytes], { type: contentType });

		try {
			const data = await storageApi.uploadS3(event.target.files[0].name);
			if (data.code === 200) {
				fetch(data.data.presignedUrl, {
					method: 'PUT',
					headers: {
						Accept: 'image/png',
						'Content-Type': 'image/png',
					},
					body: file,
				})
					.then((res) => {
						return res.text();
					})
					.then((value) => {
						setImageUrl(data.data.dataUrl);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		} catch (error) {
			Toast(false, '이미지 업로드에 실패했어요');
		}
	};

	return (
		<StyledButton onClick={uploadImgBtn} type="button">
			<input
				className="w-full h-full"
				type="file"
				name="image"
				accept="image/*"
				ref={inputRef}
				id="imgFile"
				onChange={handleChangeFile}
				style={{ display: 'none' }}
			/>
			<Avatar style={{ width: '10rem', height: '10rem' }} src={imageUrl || null} alt="프로필 이미지" />
		</StyledButton>
	);
};

export default ImageUploader;

const StyledButton = styled.button`
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
`;
