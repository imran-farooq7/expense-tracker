import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
	return (
		<div className="chart">
			{props.datapoints.map((datapoint) => (
				<ChartBar
					value={datapoint.value}
					maxValue={null}
					label={datapoint.label}
					key={datapoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
