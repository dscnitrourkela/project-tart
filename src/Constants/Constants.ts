export const NavListItems = [
	{
		index: 1,
		src: '#',
		name: 'Events',
	},
	{
		index: 2,
		src: '#',
		name: 'Events',
	},
	{
		index: 3,
		src: '#',
		name: 'Events',
	},
];

export const AboutContent = {
	title: 'NITRUTSAV 2023',
	description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
	aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
	Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
	dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
	amet, consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
	laudantium, totam rem aperiam.`,
	trailerLink: 'https://www.youtube.com/embed/AY1Hxf5_hiE',
};

export const FAQs = [
	{
		question: 'What is Innovision?',
		answer: 'Innovision is a fest',
	},
	{
		question: 'What is Innovision1?',
		answer: 'Innovision is a fest',
	},
	{
		question: 'What is Innovision2?',
		answer: 'Innovision is a fest',
	},
	{
		question: 'What is Innovision3?',
		answer: 'Innovision is a fest',
	},
	{
		question: 'What is Innovision4?',
		answer: 'Innovision is a fest',
	},
];

export const footer = {
	Logo: {
		title: 'NITRUTSAV 2023',
		alt: 'logo',
	},
	ImpLinks: {
		title: 'Quick Links',
		impLinks: [
			// { text: 'LOGIN/REGISTER', href: '#' },
			{ text: 'PRO SHOW', href: '#' },
			{ text: 'FLAGSHIP EVENTS', href: '#' },
			{ text: 'MAIN EVENTS', href: '#' },
			{ text: 'LECTURES & WORKSHOPS', href: '#' },
			{ text: 'FUN EVENTS', href: '#' },
			{ text: 'EXHIBITION', href: '#' },
		],
	},
	Timings: {
		title: 'Opening Hours',
		weekends: 'Timings',
		weekdays: 'Timings',
	},

	CopyRight: 'Designed and Developed with 💙 by GDSC NIT, Rourkela',
};

export const Events = [
	{
		slugName: 'technical',
		title: 'Technical',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
	{
		slugName: 'pro',
		title: 'Pro Show',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
	{
		slugName: 'fun',
		title: 'Fun',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
	{
		slugName: 'workshops',
		title: 'Workshops',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
	{
		slugName: 'exhibitions',
		title: 'Exhibitions',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
];

export const INIT_STATE = {
	value: '',
	errorVisibility: false,
	errorMessage: '',
};

export const INPUTS = ({
	name = '',
	email = '',
	mobile = '',
	gender = '',
	state = '',
	city = '',
	college = '',
	stream = '',
	rollNumber = '',
}) => ({
	name: {
		...INIT_STATE,
		value: name,
		placeholder: 'Name',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'name',
		show: 'both',
		maxLength: 50,
		minLength: 1,
	},
	email: {
		...INIT_STATE,
		value: email,
		placeholder: 'Email (same as your gmail)',
		readOnly: true,
		type: 'text',
		inputMode: 'email',
		key: 'email',
		show: 'both',
		maxLength: 50,
		minLength: 1,
	},
	mobile: {
		...INIT_STATE,
		value: mobile,
		placeholder: 'Mobile Number (10 digits)',
		readOnly: false,
		type: 'number',
		inputMode: 'number',
		key: 'mobile',
		show: 'both',
		maxLength: 10,
		minLength: 10,
	},
	gender: {
		...INIT_STATE,
		value: gender,
		placeholder: 'Gender',
		readOnly: false,
		type: 'select',
		inputMode: 'select',
		regex: '',
		key: 'gender',
		show: 'both',
		options: ['Male', 'Female', 'Prefer not to say'],
		maxLength: 50,
		minLength: 1,
	},
	state: {
		...INIT_STATE,
		value: state,
		placeholder: 'State',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'state',
		show: 'non-nitr',
		maxLength: 50,
		minLength: 1,
	},
	city: {
		...INIT_STATE,
		value: city,
		placeholder: 'City',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'city',
		show: 'non-nitr',
		maxLength: 50,
		minLength: 1,
	},
	college: {
		...INIT_STATE,
		value: college,
		placeholder: 'College',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'college',
		show: 'non-nitr',
		maxLength: 50,
		minLength: 1,
	},
	stream: {
		...INIT_STATE,
		value: stream,
		placeholder: 'Stream',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'stream',
		show: 'both',
		maxLength: 50,
		minLength: 1,
	},
	rollNumber: {
		...INIT_STATE,
		value: rollNumber,
		placeholder: 'Roll Number',
		readOnly: false,
		type: 'text',
		inputMode: 'text',
		key: 'rollNumber',
		show: 'nitr',
		maxLength: 9,
		minLength: 9,
	},
	password: {
		value: '',
		placeholder: 'Zimbra Password',
		readOnly: false,
		type: 'password',
		inputMode: 'text',
		key: 'password',
		show: 'nitr',
		caption: 'Stay assured, we will not save your password.',
	},
});

export const STAGES = {
	TYPE_OF_USER: 'Are you an NITR Student?',
	NITR_STUDENT_FORM: 'NITR Student Register',
	NON_NITR_STUDENT_FORM: 'Register',
};
