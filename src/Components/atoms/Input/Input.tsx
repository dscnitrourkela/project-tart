import React from 'react';

import Caption from '../Typography/Caption';
import { CustomInput, CustomSelect, Error, RegisterInput, RegisterLabel } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ objectKey, onBlur, onChange, values }) => {
	const { placeholder, errorVisibility, errorMessage, value, inputMode, type, options, caption } = values[objectKey];
	const [focused, setFocused] = React.useState(value ? true : false);

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
							type={type}
							value={value}
							onFocus={() => setFocused(true)}
							onChange={onChange}
							onBlur={onBlur}
							required
						/>
						{caption && <Caption>{caption}</Caption>}
						{errorVisibility && <Error>{errorMessage}</Error>}
					</CustomInput>
				</>
			)}
		</>
	);
};

export default Input;
