import Button from "../Button/Button";
import Category from "../Category/Category";
import { SInput } from "../Input/Input.styled";
import { SGroup, SContent, SForm, STitle, SCategories } from "./Form.styled";
import { categories } from "../../data";
import { useExpenses } from "../../context/ExpensesContext";
import { useState } from "react";

export const Form = () => {
	const { addExpense } = useExpenses();
	const [expenseName, setExpenseName] = useState("");
	const [expenseCategory, setExpenseCategory] = useState("");
	const [expenseDate, setExpenseDate] = useState("");
	const [expenseSum, setExpenseSum] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [formError, setFormError] = useState({
		description: false,
		category: false,
		date: false,
		sum: false,
	});

	const isValidDate = (value) => {
		const regex = /^\d{4}-\d{2}-\d{2}$/;

		if (!regex.test(value)) {
			return false;
		}

		const [year, month, day] = value.split("-").map(Number);

		const date = new Date(year, month - 1, day);

		return (
			date.getFullYear() === year &&
			date.getMonth() === month - 1 &&
			date.getDate() === day
		);
	};

	const handleDateChange = (e) => {
		const value = e.target.value;

		setExpenseDate(value);

		const newErrors = {
			...formError,
			date: !isValidDate(value),
		};

		setFormError(newErrors);
		checkErrors(newErrors);
	};

	const handleSumChange = (e) => {
		const value = e.target.value;

		setExpenseSum(value);

		const newErrors = {
			...formError,
			sum: value === "" || Number(value) <= 0,
		};

		setFormError(newErrors);
		checkErrors(newErrors);
	};

	const validate = () => {
		const newErrors = {
			description: expenseName.trim() === "",
			category: expenseCategory === "",
			date: !isValidDate(expenseDate),
			sum: expenseSum === "" || Number(expenseSum) <= 0,
		};

		setFormError(newErrors);

		return !Object.values(newErrors).some(Boolean);
	};

	const handleSubmit = async () => {
		const isValid = validate();

		if (!isValid) {
			setIsButtonDisabled(true);
			return;
		}

		await addExpense({
			description: expenseName,
			category: expenseCategory,
			date: expenseDate,
			sum: Number(expenseSum),
		});
		setExpenseName("");
		setExpenseCategory("");
		setExpenseDate("");
		setExpenseSum("");

		setFormError({
			description: false,
			category: false,
			date: false,
			sum: false,
		});
		setIsButtonDisabled(false);
	};
	const checkErrors = (errors) => {
		const hasErrors = Object.values(errors).some(Boolean);
		setIsButtonDisabled(hasErrors);
	};
	return (
		<SForm>
			<SContent>
				<STitle>Новый расход</STitle>
				<SGroup>
					<h3>
						Описание{" "}
						{formError.description && <span style={{ color: "red" }}>*</span>}
					</h3>
					<SInput
						type="text"
						placeholder="Введите описание"
						name="description"
						value={expenseName}
						$error={formError.description}
						$status={
							formError.description
								? "error"
								: expenseName.trim()
									? "success"
									: ""
						}
						onChange={(e) => {
							setExpenseName(e.target.value);

							const newErrors = {
								...formError,
								description: e.target.value.trim() === "",
							};

							setFormError(newErrors);
							checkErrors(newErrors);
						}}
					/>
				</SGroup>
				<SGroup>
					<h3>
						Категория{" "}
						{formError.category && <span style={{ color: "red" }}>*</span>}
					</h3>
					<SCategories>
						{categories.map((cat) => (
							<Category
								category={cat}
								key={cat.api}
								$selected={expenseCategory}
								onSelect={(value) => {
									setExpenseCategory(value);

									const newErrors = {
										...formError,
										category: false,
									};

									setFormError(newErrors);
									checkErrors(newErrors);
								}}
							/>
						))}
					</SCategories>
				</SGroup>
				<SGroup>
					<h3>
						Дата {formError.date && <span style={{ color: "red" }}>*</span>}
					</h3>
					<SInput
						type="date"
						placeholder="Выберите дату"
						name="date"
						id="date"
						value={expenseDate}
						$error={formError.date}
						$status={formError.date ? "error" : expenseDate ? "success" : ""}
						onChange={handleDateChange}
					/>
				</SGroup>
				<SGroup>
					<h3>
						Сумма {formError.sum && <span style={{ color: "red" }}>*</span>}
					</h3>
					<SInput
						type="number"
						placeholder="Введите сумму"
						name="sum"
						id="sum"
						value={expenseSum}
						$error={formError.sum}
						$status={
							formError.sum ? "error" : Number(expenseSum) > 0 ? "success" : ""
						}
						onChange={handleSumChange}
					/>
				</SGroup>
				<Button $onClick={handleSubmit} disabled={isButtonDisabled}>
					Добавить новый расход
				</Button>
			</SContent>
		</SForm>
	);
};

export default Form;