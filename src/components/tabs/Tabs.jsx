import React, { useState } from "react";
import "./tabs.css";
import TabsTable from "./tabsTable/TabsTable";
import TabsMap from "./tabsMap/TabsMap";
import TabsTree from "./tabsTree/TabsTree";

const Tabs = ({ tableData, tabName, ml1, ml2, ml3}) => {
	const [active, setActive] = useState("tabs-table");
	console.log(`tableData`, tableData)

	const handleTabClick = e => {
		console.log(`e.target.id`, e.target.id)
		setActive(e.target.id)
	}

	return (
		<div className="tabs">
			<div className="tabs-header">
				<div
					className={`tabs-header-table ${
						active === "tabs-table" ? "tab-active" : ""
					} tabs-tab`}
					id="tabs-table"
					onClick={handleTabClick}
				>
					Table
				</div>
				<div
					className={`tabs-header-map ${
						active === "tabs-map" ? "tab-active" : ""
					} tabs-tab`}
					id="tabs-map"
					onClick={handleTabClick}
				>
					Map
				</div>
				<div
					className={`tabs-header-tree ${
						active === "tabs-tree" ? "tab-active" : ""
					} tabs-tab`}
					id="tabs-tree"
					onClick={handleTabClick}
				>
					Tree
				</div>
				<div className="tab-name">{tabName}</div>
			</div>
			<div className="tabs-body">
				<div
					className={`tabs-body-content tabs-table ${
						active === "tabs-table" ? "tabs-show" : "tabs-hide"
					}  `}
					id="tabs-table"
				>
					<TabsTable tableData={tableData} ml1={ml1} ml2={ml2} ml3={ml3} />
				</div>
				<div
					className={`tabs-body-content tabs-map ${
						active === "tabs-map" ? "tabs-show" : "tabs-hide"
					} `}
					id="tabs-map"
				>
					<TabsMap tableData={tableData} ml1={ml1} ml2={ml2} ml3={ml3} />
				</div>
				<div
					className={`tabs-body-content tabs-tree ${
						active === "tabs-tree" ? "tabs-show" : "tabs-hide"
					} `}
					id="tabs-tree"
				>
					<TabsTree tableData={tableData} ml1={ml1} ml2={ml2} ml3={ml3} />
				</div>
			</div>
		</div>
	);
};

export default Tabs;
