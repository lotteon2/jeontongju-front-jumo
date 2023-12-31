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
	const [imgSrc, setImgSrc] = useState<string>(imageUrl);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const uploadImgBtn = useCallback(() => {
		inputRef.current?.click();
	}, []);

	const handleChangeFile = async (event: any) => {
		event.preventDefault();
		const reader = new FileReader();
		reader.readAsArrayBuffer(event.target.files[0]);
		try {
			const data = await storageApi.uploadS3(event.target.files[0].name);
			if (data.code === 200) {
				setImageUrl(data.data.dataUrl);
				fetch(data.data.presignedUrl, {
					method: 'PUT',
					headers: {
						Accept: 'image/png',
						'Content-Type': 'image/png',
					},
					body: reader.result,
				})
					.then((res) => {
						setImgSrc(data.data.dataUrl);
						return res.text();
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
			<Avatar style={{ width: '10rem', height: '10rem' }} src={imgSrc} alt="프로필 이미지" />
		</StyledButton>
	);
};

export default ImageUploader;

const StyledButton = styled.button`
	width: 100%;
	height: 10rem;
	background: none;
`;
