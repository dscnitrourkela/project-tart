import styled from 'styled-components';
import tw from 'twin.macro';

import Caption from '../Typography/Caption';
import { LabelProps } from './types';

export const CustomInput = styled.div`
	position: relative;
	max-width: 364px;
	width: 100%;
`;

export const RegisterInput = styled.input`
	${tw`
    border-2
    border-gray-300
    font-Poppins
    font-light
    text-base
    pb-1
    pt-4
    px-3
    rounded-xl
    w-full
  `}
	&:focus,
  &:focus-visible {
		border-color: #6a6a6a;
		outline: none !important;
	}
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		display: none;
	}
	background-color: ${(props) => (props.readOnly ? '#f2f2f2ac' : '#fff')};
	color: ${(props) => (props.readOnly ? '#898686' : '#000')};
`;

export const RegisterLabel = styled.label<LabelProps>`
	${tw`
    absolute
    left-2
    text-gray-400
    [font-weight: 400]
  `}
	font-size: ${({ focus }) => (focus ? '0.7rem' : '1.25rem')};
	top: ${({ focus }) => (focus ? '0.15rem' : '0.6rem')};
	left: ${({ focus }) => (focus ? '0.9rem' : '1rem')};
	transition: all 0.2s ease-in-out;
`;

export const CustomSelect = styled.select`
	${tw`
    max-w-[364px]
    w-full
    border-2
    border-gray-300
    text-color-secondary
    font-Poppins
    font-light
    text-lg
    p-2
    rounded-xl
  `}
`;

export const Error = styled(Caption)`
	position: absolute;
	bottom: -1.5rem;
	left: 1rem;
	color: #ff0000;
	@media (max-width: 768px) {
		font-size: 0.8rem;
		bottom: -1.2rem;
	}
`;

export const ShowPassword = styled.button<{ show: boolean }>`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-90%);
	width: 25px;
	height: 25px;
	background: #aaa;
	border-radius: 50%;
	cursor: pointer;
	border: none;
	-webkit-appearance: none;

	&:before {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 17px;
		height: 17px;
		background: #e3e3e3;
		z-index: 1;
		border-radius: 50%;
	}

	&:after {
		content: '';
		display: ${({ show }) => (show === true ? 'none' : 'block')};
		position: absolute;
		top: 6px;
		left: 6px;
		width: 13px;
		height: 13px;
		background: #aaa;
		z-index: 2;
		border-radius: 50%;
	}
`;
