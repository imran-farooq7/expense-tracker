import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
	const dataPointsValues = props.datapoints.map((datapoint) => datapoint.value);
	const totalMaximum = Math.max(...dataPointsValues);
	return (
		<div className="chart">
			{props.datapoints.map((datapoint) => (
				<ChartBar
					value={datapoint.value}
					maxValue={totalMaximum}
					label={datapoint.label}
					key={datapoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
