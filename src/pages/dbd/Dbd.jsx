import React, { useState } from "react";
import "./dbd.css";

import DbdHeader from "./DbdHeader";
import DbdTotals from "./DbdTotals";
import { useParams } from "react-router-dom";
import useDbd from "./useDbd";

const Dbd = () => {

	const { totals } = useDbd()
	console.log(`totals`,totals)

	const { ml2 } = useParams();
	// console.log(`ml2: ${ml2}`);
	return (
		<div className="dbd">
			<DbdHeader title={ml2 ? ml2 : "Dashboard"} />
			<div className="dbd-body">
				<DbdTotals totals={totals} />
				<div className="dbd-graphs">
					<div className="dbd-graph dbd-graph-line-chart">Line graph</div>
					<div className="dbd-graph dbd-graph-bar-chart">Bar graph</div>
					<div className="dbd-graph dbd-graph-pie-chart">Pie graph</div>
					<div className="dbd-graph dbd-date-filters">Date Filters</div>
				</div>
			</div>
		</div>
	);
};

export default Dbd;
