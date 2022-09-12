import React, { useEffect, useState } from "react";
import "./dbd.css";

import DbdHeader from "./DbdHeader";
import DbdTotals from "./DbdTotals";
import { useParams } from "react-router-dom";
import useDbd from "./useDbd";
import DbdBarChart from "./dbdCharts/DbdBarChart";
import DbdLineChart from "./dbdCharts/DbdLineChart";
import DbdPieChart from "./dbdCharts/DbdPieChart";
import { DbdContextProvider } from "../../contexts/DbdContext";

const Dbd = () => {

	const { totals} = useDbd()
	// console.log(`totals`,totals)

	const { ml2 } = useParams();
	// console.log(`ml2: ${ml2}`);
	return (
		// <DbdContextProvider>
			<div className="dbd">
				{/* <DbdHeader title={ml2 ? ml2 : "Dashboard"} /> */}
				<div className="dbd-body">
					<DbdTotals totals={totals} />
					<div className="dbd-graphs">
						{/* asts bar chart */}
						<div className="dbd-graph dbd-graph-asts-bar-chart">
							<DbdBarChart totals={totals} />
						</div>
						{/* asts pie chart */}
						<div className="dbd-graph dbd-graph-asts-pie-chart">
							<DbdPieChart totals={totals} />
						</div>
						{/* trns bar chart */}
						<div className="dbd-graph dbd-graph-trns-bar-chart">
							{/* <DbdBarChart /> */}
						</div>
						<div className="dbd-graph dbd-date-filters">Date Filters</div>
					</div>
				</div>
			</div>
		// </DbdContextProvider>
	);
};

export default Dbd;
