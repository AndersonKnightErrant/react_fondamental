const MySelect = ({options, defaultValue}) => {
  return (
		<select>
			<option value="">{defaultValue}</option>
			{options.map(option => 
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
    </select>
  );
};

export default MySelect;
