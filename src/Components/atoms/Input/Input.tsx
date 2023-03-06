import React from 'react';

import Caption from '../Typography/Caption';
import { CustomInput, CustomSelect, Error, RegisterInput, RegisterLabel, ShowPassword } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ objectKey, onBlur, onChange, values }) => {
	const { placeholder, errorVisibility, errorMessage, value, inputMode, type, options, caption, readOnly } =
		values[objectKey];
	const [focused, setFocused] = React.useState(value ? true : false);
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<>
			{inputMode == 'select' ? (
				<CustomSelect defaultValue="">
					<option value={''}>{placeholder}</option>
					{options?.map((option) => (
						<option key={option} value={option}>
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
							<ShowPassword
								show={showPassword}
								title="Show Password"
								onClick={() => setShowPassword((prev) => !prev)}></ShowPassword>
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
