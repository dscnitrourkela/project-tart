import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';

import { Button, Caption, Heading3, Input } from 'Components/atoms';
import { INPUTS, STAGES } from 'Constants/Constants';
import { valueProps } from 'Constants/types';
import { toast } from 'react-toastify';
import { avenueApi } from 'utils/api';
import { AuthContext } from 'utils/AuthContext';
import getURLparameter from 'utils/getURLParameter';

import { ButtonContainer, Form, Wrapper } from './styles';

const RegistrationForm: React.FC = () => {
	const { user, userData, setUserData, accessToken } = React.useContext(AuthContext);
	const [values, setValues] = React.useState(INPUTS(userData));
	const [stage, setStage] = React.useState(STAGES.TYPE_OF_USER);
	const [verified, setVerified] = React.useState(false);

	useEffect(() => {
		const paymentStatus = getURLparameter('payment_status');
		const paymentId = getURLparameter('payment_id');
		const paymentRequestId = getURLparameter('payment_request_id');

		if (paymentStatus === 'Credit' && paymentId && paymentRequestId) {
			toast.success('Payment Successful');
			window.location.assign('/profile');
		} else if (paymentStatus === 'Failed') {
			toast.error('Payment Failed');
		}
	}, []);

	useEffect(() => {
		const paymentStatus = getURLparameter('paymentStatus');

		if (paymentStatus === 'credit') {
			toast.success('Payment Successful');
			window.location.assign('/profile');
		}

		if (userData?.id) {
			if (userData?.rollNumber) {
				window.location.assign('/profile');
			} else if (userData?.festID?.includes('nitrutsav-2023')) {
				window.location.assign('/profile');
			}
		}
	}, [userData]);

	useEffect(() => {
		setValues(INPUTS(userData));
	}, [userData]);

	const setInputValue = (type: string, value = '') => {
		setValues((prev) => ({
			...prev,
			[type]: {
				...(prev as valueProps)[type],
				value,
			},
		}));
	};

	const nonNitrFormSubmit = async () => {
		try {
			handleVerify();
			if (verified && userData?.id) {
				await handlePayment();
			} else if (verified) {
				await handleSave();
				await handlePayment();
			}
		} catch (error) {
			toast.error((error as Error).message || 'Something went Wrong, please try again');
		}
	};

	const handlePayment = async () => {
		await toast.promise(initiatePayment, {
			pending: 'Generating PaymentLink...',
			success: 'Payment Link Generated',
		});
	};

	const initiatePayment = async () => {
		try {
			const { data: generatedLink } = await avenueApi.post(
				'/payment/instamojo',
				{
					amount: 800,
					purpose: 'NITRUTSAV-2023 | REGISTRATION',
					buyerName: values.name.value,
					email: values.email.value,
					phone: values.mobile.value,
					redirectUrl: 'https://nitrutsav.live/register',
					// redirectUrl: 'http://localhost:3000/register',
					webhook: 'https://avenue-api.nitrkl.in/payment/webhook',
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			if (!generatedLink) {
				throw new Error('Something went Wrong: failed to generate payment link');
			}

			window.location.assign(generatedLink);
		} catch (error) {
			toast.error((error as Error).message || 'Something went Wrong, please try again');
		}
	};

	const handleSave = async () => {
		await toast.promise(saveUser, {
			pending: 'Registering...',
			success: 'Registered!',
			error: 'Please try again!',
		});
	};

	const saveUser = async () => {
		let payload;

		if (stage === STAGES.NITR_STUDENT_FORM) {
			payload = Object.keys(values)
				.filter((key) => key !== 'password')
				.reduce((currObj, key) => {
					return {
						...currObj,
						[key]: (values as valueProps)[key].value,
					};
				}, {});
		} else {
			payload = Object.keys(values)
				.filter((key) => ['both', 'non-nitr'].includes((values as valueProps)[key].show))
				.reduce((currObj, key) => {
					return {
						...currObj,
						[key]: (values as valueProps)[key].value,
					};
				}, {});
		}

		(payload as { uid: string | undefined }).uid = user?.uid;

		try {
			const { data: savedUser } = await avenueApi.post('/user', payload, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			if (savedUser) {
				setUserData(savedUser);
			} else throw new Error();
		} catch (error) {
			throw new Error('Error saving user');
		}
	};

	const handleVerify = () => {
		if (
			Object.keys(values)
				.filter((key) =>
					['both', 'non-nitr', stage === STAGES.NITR_STUDENT_FORM && 'nitr'].includes((values as valueProps)[key].show),
				)
				.find((key) => (values as valueProps)[key].value?.length === 0)
		) {
			toast.error('All fields are required');
			return;
		}
		if (stage === STAGES.NITR_STUDENT_FORM) {
			toast.promise(verifyZimbra, {
				pending: 'Verifying...',
				success: 'Verified!',
				error: 'Invalid credentials',
			});
		} else {
			setVerified(true);
		}
	};

	const setStageNITR = () => {
		setStage(STAGES.NITR_STUDENT_FORM);
		setInputValue('city', 'Rourkela');
		setInputValue('state', 'Odisha');
		setInputValue('college', 'NITR');
	};

	const verifyZimbra = async (): Promise<void> => {
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
			} else {
				throw new Error('Invalid credentials');
			}
		} catch (error) {
			throw new Error('ERROR');
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
		Object.values(values).forEach(({ errorVisibility, minLength, key, value }) => {
			if (
				errorVisibility &&
				value?.length >= (minLength ?? 0) &&
				value?.length <= ((values as valueProps)[key].maxLength ?? 50)
			) {
				setValues((current) => ({
					...current,
					[key]: {
						...current[key],
						errorVisibility: false,
						errorMessage: '',
					},
				}));
			}
		});
	}, [values]);

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
							<Button filled btnText="YES" onClick={setStageNITR} />
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
							<Button btnText="Verify" onClick={() => handleVerify()} />
							<Button filled btnText="Register" disabled={!verified} onClick={handleSave} />
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
							<Button filled btnText="Register" onClick={nonNitrFormSubmit} />
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
