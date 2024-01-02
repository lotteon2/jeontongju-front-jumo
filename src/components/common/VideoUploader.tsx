import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Avatar, message, Upload } from 'antd';
import styled from '@emotion/styled';
import { AxiosRequestConfig } from 'axios';
import { Toast } from './Toast';
import { UploadShortsResponse, UploadShortsResponseData } from '../../apis/storage/storageAPIService.types';

interface VideoUploaderInterface {
	videoUrl: string;
	setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
	previewUrl: string;
	setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
}

const VideoUploader: React.FC<VideoUploaderInterface> = ({ videoUrl, setVideoUrl, previewUrl, setPreviewUrl }) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const uploadImgBtn = useCallback(() => {
		inputRef.current?.click();
	}, []);

	const handleChangeFile = async (event: any) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('shorts', event.target.files[0]);
		const blob = new Blob([JSON.stringify(event.target.files[0])], {
			type: 'application/json',
		});
		formData.append('shorts', blob);
		const reader = new FileReader();
		reader.readAsArrayBuffer(event.target.files[0]);
		try {
			console.log('HERE!');
			fetch('https://jeontongju-dev.shop/storage-service/api/upload/shorts', {
				method: 'POST',
				body: formData,
			})
				.then((res) => {
					return res.text();
				})
				.then((res) => {
					setPreviewUrl(JSON.parse(res).data.previewUrl);
					setVideoUrl(JSON.parse(res).data.dataUrl);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			Toast(false, '동영상 업로드에 실패했어요');
		}
	};

	return (
		<StyledButton onClick={uploadImgBtn} type="button">
			<input
				type="file"
				name="video"
				accept="video/mp4,video/mkv, video/x-m4v,video/*"
				ref={inputRef}
				id="imgFile"
				onChange={handleChangeFile}
			/>
		</StyledButton>
	);
};

export default VideoUploader;

const StyledButton = styled.button`
	width: 100%;
	height: 10rem;
	background: none;
`;
