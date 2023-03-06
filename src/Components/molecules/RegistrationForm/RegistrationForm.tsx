import React, { useEffect } from 'react';

import { Button, Caption, Heading3, Input } from 'Components/atoms';
import { INPUTS, STAGES } from 'Constants/Constants';
import { valueProps } from 'Constants/types';
import { avenueApi } from 'utils/api';
import { AuthContext } from 'utils/AuthContext';

import { ButtonContainer, Form, Wrapper } from './styles';

const RegistrationForm: React.FC = () => {
	const [values, setValues] = React.useState(INPUTS({}));
	const [stage, setStage] = React.useState(STAGES.TYPE_OF_USER);
	const [verified, setVerified] = React.useState(false);
	const { user } = React.useContext(AuthContext);

	const setInputValue = (type: string, value = '') => {
		setValues((prev) => ({
			...prev,
			[type]: {
				...(prev as valueProps)[type],
				value,
			},
		}));
	};

	const verifyZimbra = async () => {
		const { password, rollNumber } = values;

		try {
			const { status } = await avenueApi.get('/zimbra-login', {
				params: {
					username: rollNumber.value,
					password: password.value,
				},
			});

			if (status == 200) {
				setVerified(true);
			}
		} catch (error) {
			return error;
		}
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { id, value } = e.target;
		setValues((prev) => ({
			...prev,
			[id]: {
				...(prev as valueProps)[id],
				value,
			},
		}));
	};

	const onBlurInput = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { id, value } = e.target;
		if (value.length < ((values as valueProps)[id].minLength ?? 0) && value.length !== 0) {
			setValues((prev) => ({
				...prev,
				[id]: {
					...(prev as valueProps)[id],
					value,
					errorVisibility: true,
					errorMessage: `Minimum ${(values as valueProps)[id].minLength} characters required`,
				},
			}));
		} else if (value.length > ((values as valueProps)[id].maxLength ?? 100)) {
			setValues((prev) => ({
				...prev,
				[id]: {
					...(prev as valueProps)[id],
					value,
					errorVisibility: true,
					errorMessage: `Maximum ${(values as valueProps)[id]?.maxLength} characters allowed`,
				},
			}));
		} else {
			setValues((prev) => ({
				...prev,
				[id]: {
					...(prev as valueProps)[id],
					value,
					errorVisibility: false,
					errorMessage: '',
				},
			}));
		}
	};

	useEffect(() => {
		setInputValue('name', user?.displayName || '');
		setInputValue('email', user?.email || '');
	}, [user]);

	const renderStage = () => {
		switch (stage) {
			case STAGES.TYPE_OF_USER:
				return (
					<>
						<Heading3 bold>{stage}</Heading3>
						<Caption>Registration for NITR students is free!</Caption>
						<ButtonContainer margin="5rem">
							<Button filled btnText="YES" onClick={() => setStage(STAGES.NITR_STUDENT_FORM)} />
							<Button btnText="NO" onClick={() => setStage(STAGES.NON_NITR_STUDENT_FORM)} />
						</ButtonContainer>
					</>
				);

			case STAGES.NITR_STUDENT_FORM:
				return (
					<>
						<Wrapper>
							<Heading3 bold>{stage}</Heading3>
							<Form>
								{Object.keys(values)
									.filter((key) => ['both', 'nitr'].includes((values as valueProps)[key].show))
									.map((key) => (
										<Input key={key} objectKey={key} onChange={onChangeInput} onBlur={onBlurInput} values={values} />
									))}
							</Form>
						</Wrapper>
						<ButtonContainer margin="2rem">
							<Button filled btnText="Back" onClick={() => setStage(STAGES.TYPE_OF_USER)} />
							<Button btnText="Verify" onClick={verifyZimbra} />
							<Button filled btnText="Register" disabled={!verified} />
						</ButtonContainer>
					</>
				);

			case STAGES.NON_NITR_STUDENT_FORM:
				return (
					<>
						<Wrapper>
							<Heading3 bold>{stage}</Heading3>
							<Form>
								{Object.keys(values)
									.filter((key) => ['both', 'non-nitr'].includes((values as valueProps)[key].show))
									.map((key) => (
										<Input key={key} objectKey={key} onChange={onChangeInput} onBlur={onBlurInput} values={values} />
									))}
							</Form>
						</Wrapper>
						<ButtonContainer margin="2rem">
							<Button btnText="Back" onClick={() => setStage(STAGES.TYPE_OF_USER)} />
							<Button filled btnText="Register" />
						</ButtonContainer>
					</>
				);

			default:
				return <div>Loading...</div>;
		}
	};

	return renderStage();
};

export default RegistrationForm;
