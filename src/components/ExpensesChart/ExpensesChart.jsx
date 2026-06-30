import {
	Bar,
	BarChart,
	Cell,
	LabelList,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import {
	SContent,
	SDate,
	SDescription,
	SExpensesChart,
	STitle,
} from "./ExpensesChart.styled";
import { data } from "../../data";
import { getChartData } from "../СhartData/СhartDataю";

const ExpensesChart = ({ categories }) => {
	const chartData = getChartData(data, categories);
	return (
		<SExpensesChart>
			<SContent>
				<STitle>9 581 ₽</STitle>
				<SDescription>
					Расходы за <SDate>10 июля 2024</SDate>
				</SDescription>
				<ResponsiveContainer width="100%" height={386}>
					<BarChart data={chartData}>
						<XAxis
							axisLine={false}
							tickLine={false}
							dataKey="category"
							tick={{
								fill: "#000000",
								fontSize: 12,
								fontWeight: 400,
							}}
						/>
						<YAxis hide />
						<Bar dataKey="chartAmount" radius={12} barSize={94}>
							{chartData.map((item) => (
								<Cell key={item.category} fill={item.color} />
							))}
							<LabelList
								dataKey="displayAmount"
								position="top"
								formatter={(value) => `${value.toLocaleString("ru-RU")} ₽`}
								fill="#000000"
								fontSize={16}
								fontWeight={600}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</SContent>
		</SExpensesChart>
	);
};

export default ExpensesChart;
