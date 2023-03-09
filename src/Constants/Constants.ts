import {
	userData,
	valueProps,
} from './types';

export const NavListItems = [
	{
		index: 1,
		src: '/',
		name: 'Home',
	},
	{
		index: 2,
		src: '/event/flagship',
		name: 'Flagship',
	},
	{
		index: 3,
		src: '/event/pro',
		name: 'Pro Shows',
	},
	{
		index: 4,
		src: '/event/main',
		name: 'Main',
	},
	{
		index: 5,
		src: '/event/fun',
		name: 'Fun',
	},
	{
		index: 6,
		src: '/event/exhibitions',
		name: 'Exhibitions',
	},
	{
		index: 7,
		src: '/event/workshops',
		name: 'Workshops',
	},
];

export const AboutContent = {
	title: 'NITRUTSAV 2023',
	description: `National Institute of Technology, Rourkela, enunciate the "offline" 
	edition of its very own literary and cultural festival, NITRUTSAV 2023.
	Nitrutsav works to give students a creative outlet to commemorate 
	and introspectively explore their creative freedom with pioneering 
	ideas, celebrating the creative goodwill of a mind filled with ingenuity 
	and innovation. With a plethora of fascinating cultural events, it also 
	provides students with a gateway to showcase their creative zeal and 
	appreciate their artistic aspects and willingness to discover hidden 
	talents. With the hackneyed breakdown of academia and constant 
	improvisation of grades, NITRUTSAV delivers different experiences to 
	lure your mind to relaxation and enthusiasm.
	In the bizarre outbreak of the COVID-19 pandemic, Nitrusav was 
	hosted on your screens last year. The essence of Nitrusav is restored 
	to its complete form to captivate you through your eyes and into your 
	mind.This time with the theme of "An Indian Filmic Fete", this 
	impeccable beauty will mesmerise right through the windows of your 
	soul.`,
	trailerLink: 'https://www.youtube.com/embed/AY1Hxf5_hiE',
};

export const FAQs = [
	{
		question: 'What is NITRUTSAV?',
		answer:
			'It is Eastern India’s one of most engrossing and intriguing student-held literary and cultural fest in which college students from all over the country can participate to outcast their creative zeal and skills.',
	},
	{
		question: 'Who can participate?',
		answer:
			'Any active and enthusiastic student who wills to present his/her skills and talent in dance, drama, music and many more, from any college/university.',
	},
	{
		question: 'How to participate?',
		answer: 'One can visit our website for registration, and you will be provided with all the details there.',
	},
	{
		question: 'What is the goal of the fest?',
		answer:
			'To provide interested students with the best platform to showcase their skills in the field of literature and culture and to encourage the sense of pride for the same.',
	},
	{
		question: 'What is the mode of conduction of the fest?',
		answer: 'NITRUSAV comes with a bang after 3 years in its offline edition. This time it is purely offline.',
	},
	{
		question: 'What’s the cost of participation?',
		answer:
			'There is Rs.800 per head for participation. This also includes for accommodation and facilities and they can register for any event as per their choice. Note that this amount is Non-Refundable. ',
	},
	{
		question: 'Is there any accommodation facility?',
		answer:
			'Yes, for participants and students from different college will be accommodated in the campus’s own hostels and facilities will also be provided accordingly.',
	},
	{
		question: 'Any recognition for the events?',
		answer: 'The winners will be provided with certificates and exciting gifts or cash prizes.',
	},
	{
		question: 'When will the accommodation start for participants?',
		answer: 'The accommodation will start on 16th March’23 from 2 PM onwards.',
	},
];

export const footer = {
	Logo: {
		title: 'NITRUTSAV 2023',
		alt: 'logo',
		about:
			'NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their mind filled with ingenuity and innovation.',
	},
	ImpLinks: {
		title: 'Quick Links',
		impLinks: [
			{ text: 'FLAGSHIP EVENTS', href: 'flagship' },
			{ text: 'PRO SHOWS', href: 'pro' },
			{ text: 'MAIN EVENTS', href: 'main' },
			{ text: 'FUN EVENTS', href: 'fun' },
			{ text: 'EXHIBITIONS', href: 'exhibitions' },
			{ text: 'WORKSHOPS', href: 'workshops' },
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
		slugName: 'flagship',
		title: 'Flagship Events',
		description: `These events hold the highest substance in the fest, with maximum participation witnessed in each one. These events set the tone and create the vibe for the fest, showcasing the best talent and creativity on offer. The spotlight events of the fest shine bright with a colourful array of activities, showcasing the best of art, culture, music, dance, and theatre. From the foot-tapping beats of the Battle of Bands to the soulful melodies of Voice of NU, these events create a lively and vibrant atmosphere that's hard to resist. Whether it's the dramatic performances of Nukkad or the electrifying dance moves of Footloose, there's something for everyone.`,
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678310137/Nitrutsav-23/Categories/event4_dhotvy.svg',
	},
	{
		slugName: 'pro',
		title: 'Pro Shows',
		description: `Nitrutsav presents an exclusive opportunity to break from the monotonous nexus of academia and is all set to instill exhilaration and verve in each one of you!! Come grab a friend or two, and experience the cardinal juncture of culture and innovation like never before!! Groove to your favourite music, by the musical maestros of your favourite bands, dance to the tunes of the best DJs, and savour the memories of laughing at the antics of the stand-up comedians. Boost your spirits, meet and interact with new people, and don't miss this once-in-a-lifetime opportunity to see the revered artists perform!!`,
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678310141/Nitrutsav-23/Categories/event6_wurxsy.svg',
	},
	{
		slugName: 'main',
		title: 'Main Events',
		description: `The main events are the heart of Nitrutsav, they are planned accordingly to give minds surprising thoughts. It includes a wide range of cultural and literary events that shows the cultural legacy of Odisha, Some massive dance performances, club events, and acts that show the reality on the stage, a poetic glimpse and a day for love, and fashion-related events too that are worth experiencing.`,
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678310146/Nitrutsav-23/Categories/event2_gnttjn.svg',
	},
	{
		slugName: 'fun',
		title: 'Fun Events',
		description:
			'Fun events help to broaden the scope of the festival by providing a sense of excitement and enlightenment. We at NITRUSAV bring you a variety of fun events ranging from neon football to Mario for your enjoyment. Participating in enjoyable activities can also foster creativity and personal growth. Fun events are an important part of the festival because they bring together many people with a positive attitude and create a healthy environment in which to build.',
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678310154/Nitrutsav-23/Categories/event5_k8gqbr.svg',
	},
	{
		slugName: 'exhibitions',
		title: 'Exhibitions',
		description:
			'Exhibitions are not a mere display of artifacts but serve as a channel of communication between the art and the viewers. They quench the thirst for extensive knowledge while also raising the curiosity levels. Building out the connections in between and making yourself feel enlightened with art pieces and pictures is a complete different feel. Brace yourselves for some breath-taking exhibitions that are going to leave you spellbound.',
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678340578/Nitrutsav-23/Categories/event7_pqurpl.svg',
	},
	{
		slugName: 'workshops',
		title: 'Workshops',
		description: `Guest Lectures and Workshops are learning methods to polish a new skill or gain one. It is optimal opportunity to meet prominent personalities or creators who will come and may share their experiences which will be beneficial to all of us. Workshops provide learners with a new perspective and a different way of thinking and elaborating on issues. Prepare to witness such thrilling sessions that will leave no stone unturned in your quest to become professionals.`,
		image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678310136/Nitrutsav-23/Categories/event1_wzny88.svg',
	},
	{
		slugName: 'workshops',
		title: 'Workshops',
		description: `Guest Lectures and Workshops are learning methods to polish a new skill or gain one. It is optimal opportunity to meet prominent personalities or creators who will come and may share their experiences which will be beneficial to all of us. Workshops provide learners with a new perspective and a different way of thinking and elaborating on issues. Prepare to witness such thrilling sessions that will leave no stone unturned in your quest to become professionals.`,
		image:
			'https://res.cloudinary.com/dujqfyato/image/upload/v1677910284/TART/Marble_sculpture_of_historical_figure_with_medical_mask_haxidf.svg',
	},
];

export const INIT_STATE = {
	value: '',
	errorVisibility: false,
	errorMessage: '',
};

export const INPUTS: (arg0: userData) => valueProps = ({
	name = '',
	email = '',
	mobile = '',
	gender = '',
	state = '',
	city = '',
	college = '',
	stream = '',
	rollNumber = '',
}): valueProps => ({
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
		key: 'gender',
		show: 'both',
		optionValues: ['MALE', 'FEMALE', 'OTHERS'],
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

export const RegisteredEventExample = {
	id: '6360ceec1c74891efe6bed48',
	name: '{"heading":"Euphony Live","subHeading":"euphony","prizeAmount":""}',
	description:
		'[{"id":0,"desc":"Euphony, the rock band of NITR, presents its once-a-year sonic experience: EuphonyLive! EuphonyLive is a rock concert consisting of covers and original songs, performed by the talented members of NITR’s oldest music club. Including contemporary rock as well as reinvented crowd favourites, EuphonyLive is sure to have something for everyone. Let the music be your master!"}]',
	poster:
		'https://res.cloudinary.com/donmjeufi/image/upload/v1666834722/Innovision%202k22/Event%20Posters/euphonylive_euphony_rtz4u0.jpg',
	locationID: '635e1c662e3082fe09bc498e',
	startDate: '2022-11-12T19:30:00.000Z',
	endDate: '2022-11-14T21:00:00.000Z',
	orgID: ['635c04868e47acb9dd1ba92d'],
	orgType: 'FEST',
	notes: [],
	pocID: [],
	weekly: false,
	repeatDay: null,
	priority: 0,
	status: 'ACTIVE',
	type: 'PRO',
	createdAt: '2022-11-01T07:46:52.300Z',
	updatedAt: '2022-11-01T07:46:52.300Z',
};
