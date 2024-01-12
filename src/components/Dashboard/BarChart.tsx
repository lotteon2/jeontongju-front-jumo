import React, { useEffect, useState } from 'react';
import { BarChart as RechartBarchart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from './useWindowDimensions';

interface BarChartInterface {
	chartName?: string;
	data: { name: string; num: number }[];
}

const BarChart: React.FC<BarChartInterface> = ({ chartName, data }) => {
	const [chartWidth, setChartWidth] = useState<number>(700);
	const { width } = useWindowDimensions();
	useEffect(() => {
		if (!width) return;
		if (width < 640) {
			setChartWidth(250);
		} else if (width < 768) {
			setChartWidth((width - 150) / 2);
		} else if (width < 1024) {
			setChartWidth((width - 150) / 2);
		} else {
			setChartWidth(700);
		}
	}, [width]);
	return (
		<div>
			<div>{chartName}</div>
			<RechartBarchart width={chartWidth} height={300} data={data}>
				<Bar dataKey="num" radius={[5, 5, 0, 0]} barSize={25} />
				<XAxis dataKey="name" />
				<YAxis />
			</RechartBarchart>
		</div>
	);
};

export default React.memo(BarChart);
