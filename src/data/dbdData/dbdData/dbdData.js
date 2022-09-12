import feeder1 from "../../../images/feeder1.jpg";
import transformer2 from "../../../images/transformer2.png";
import pole1 from "../../../images/pole1.png";
import box2 from "../../../images/box2.png";
import meter1 from "../../../images/meter1.png";
import cb3 from "../../../images/cb3.png";
import seal2 from "../../../images/seal2.jpg";
import { randomNumber } from "../../../utils/utils";

export const totals = [
	{
		name: "feeders",
		asts_quantities: randomNumber(6, 9),
		trns_quantities: 0,
		astImg: feeder1,
	},
	{
		name: "transformers",
		asts_quantities: randomNumber(12, 18),
		trns_quantities: 0,
		astImg: transformer2,
	},
	{
		name: "poles",
		asts_quantities: randomNumber(20, 50),
		trns_quantities: 0,
		astImg: pole1,
	},
	{
		name: "boxes",
		asts_quantities: randomNumber(30, 60),
		trns_quantities: 0,
		astImg: box2,
	},
	{
		name: "meters",
		asts_quantities: randomNumber(50, 70),
		trns_quantities: 0,
		astImg: meter1,
	},
	{
		name: "cbs",
		asts_quantities: randomNumber(70, 80),
		trns_quantities: 0,
		astImg: cb3,
	},
	{
		name: "seals",
		asts_quantities: randomNumber(70, 80),
		trns_quantities: 0,
		astImg: seal2,
	},
];

export const trns_monthly_totals = [
	{
		year: 2020,
		month: "january",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "february",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "march",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "april",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "may",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "june",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "july",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "august",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "september",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "ocktober",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "november",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2020,
		month: "december",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
	{
		year: 2021,
		month: "january",
		data: {
			feeders: randomNumber(0, 1),
			transformers: randomNumber(0, 1),
			poles: randomNumber(0, 1),
			boxes: randomNumber(0, 1),
			meters: randomNumber(0, 1),
			cbs: randomNumber(0, 1),
			seals: randomNumber(0, 1),
		},
	},
];
