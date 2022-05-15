import {
	LinearChartMoneyProps,
	LinearChartClassProps,
} from "../models/dashboard";

export interface DashboardChartProps {
	dataChart: LinearChartMoneyProps[] | LinearChartClassProps[];
}

export interface ChartProps {
	selected?: boolean;
}

export interface ProfessorAceptanceProps {
	name?: string;
	location?: string;
	image?: any;
	link?: string;
}
