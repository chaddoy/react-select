import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options: SelectOption[] = [
	{
		label: "First",
		value: 1,
	},
	{
		label: "Second",
		value: 2,
	},
	{
		label: "Third",
		value: 3,
	},
	{
		label: "Fourth",
		value: 4,
	},
	{
		label: "Fifth",
		value: 5,
	},
	{
		label: "Sixth",
		value: 6,
	},
	{
		label: "Seventh",
		value: 7,
	},
	{
		label: "Eigth",
		value: 8,
	},
];

function App() {
	const [singleValue, setSingleValue] = useState<SelectOption | undefined>(
		options[0]
	);
	const [multiValue, setMultiValue] = useState<SelectOption[]>([options[0]]);
	return (
		<div>
			<Select
				options={options}
				value={singleValue}
				onChange={(value) => setSingleValue(value)}
			/>

			<br />

			<Select
				multiple
				options={options}
				value={multiValue}
				onChange={(value) => setMultiValue(value)}
			/>
		</div>
	);
}

export default App;
