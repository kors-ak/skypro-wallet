export const getChartData = (expenses, categories) => {
	return categories.map((category) => {
		const amount = expenses
			.filter((expense) => expense.category === category.api)
			.reduce((sum, expense) => sum + expense.sum, 0);

		return {
			category: category.name,
			amount,
			displayAmount: amount,
			chartAmount: amount === 0 ? 1 : amount,
			color: category.color,
		};
	});
};
