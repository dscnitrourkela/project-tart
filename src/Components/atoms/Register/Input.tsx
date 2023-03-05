import React from 'react';

import { CustomInput, CustomSelect, Error, RegisterInput, RegisterLabel } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ objectKey, onBlur, onChange, values }) => {
	const { placeholder, errorVisibility, errorMessage, value, readOnly, inputMode, options } = values[objectKey];
	const [focused, setFocused] = React.useState(false);

	return (
		<>
			{inputMode == 'select' ? (
				<CustomSelect defaultValue="Please choose one of them">
					<option value={''}>Please choose one of them</option>
					{options?.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</CustomSelect>
			) : (
				<>
					<CustomInput>
						<RegisterLabel htmlFor={objectKey} focus={focused}>
							{placeholder}
						</RegisterLabel>
						<RegisterInput
							id={objectKey}
							type={inputMode}
							value={value}
							onFocus={() => setFocused(true)}
							onChange={onChange}
							onBlur={onBlur}
							required
						/>
						{errorVisibility && <Error>{errorMessage}</Error>}
					</CustomInput>
				</>
			)}
		</>
	);
};

export default Input;
