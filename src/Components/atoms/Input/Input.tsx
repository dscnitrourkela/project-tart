import React from 'react';

import Caption from '../Typography/Caption';
import { CustomInput, CustomSelect, Error, RegisterInput, RegisterLabel, ShowPassword } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ objectKey, onBlur, onChange, values }) => {
	const {
		placeholder,
		errorVisibility,
		errorMessage,
		value,
		inputMode,
		type,
		options,
		optionValues,
		caption,
		readOnly,
	} = values[objectKey];
	const [focused, setFocused] = React.useState(value ? true : false);
	const [showPassword, setShowPassword] = React.useState(false);

	const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowPassword((prev) => !prev);
	};

	return (
		<>
			{inputMode == 'select' ? (
				<CustomSelect value={value} onChange={onChange} id={objectKey}>
					<option value={''}>{placeholder}</option>
					{options?.map((option, index) => (
						<option key={option} value={optionValues ? optionValues[index] : option}>
							{option}
						</option>
					))}
				</CustomSelect>
			) : (
				<>
					<CustomInput>
						<RegisterLabel htmlFor={objectKey} focus={!!(focused || value)}>
							{placeholder}
						</RegisterLabel>
						<RegisterInput
							id={objectKey}
							type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
							value={value}
							onFocus={() => setFocused(true)}
							onChange={onChange}
							onBlur={onBlur}
							readOnly={readOnly}
							required
						/>
						{type === 'password' && (
							<ShowPassword show={showPassword} title="Show Password" onClick={handlePasswordVisibility}></ShowPassword>
						)}
						{caption && <Caption style={{ paddingLeft: '10px' }}>{caption}</Caption>}
						{errorVisibility && <Error>{errorMessage}</Error>}
					</CustomInput>
				</>
			)}
		</>
	);
};

export default Input;
