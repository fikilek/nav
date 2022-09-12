import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DbdBarChart = ({ totals }) => {
	const state = {
		labels: totals && totals.map(item => item.name),
		datasets: [
			{
				label: "Assets",
				backgroundColor: [
					"#ddd",
					"beige",
					"#bce",
					"#abc",
					"lightBlue",
					"aqua",
					"orange",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 2,
				data: totals && totals.map(item => item.asts_quantities),
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: "iREPS Assets",
			fontSize: 20,
		},
		layout: {
			padding: 20,
		},
		// legend: {
		// 	display: true,
		// 	// position: "left",
		// },
		Response: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: 'left',
				labels: {
					// color: "rgb(255, 99, 132)",
				},
			},
		},
	};

	return (
		<div className="chart">
			<Doughnut data={state} options={options} />
		</div>
	);
};

export default DbdBarChart;
