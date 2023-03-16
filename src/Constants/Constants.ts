import { userDataType, valueProps } from './types';

export const NavListItems = [
	{
		index: 1,
		src: '/',
		name: 'Home',
	},
	{
		index: 2,
		src: '/event/flagship',
		name: 'Flagship Events',
	},
	{
		index: 3,
		src: '/event/pro',
		name: 'Pro Shows',
	},
	{
		index: 4,
		src: '/event/main',
		name: 'Main Events',
	},
	{
		index: 5,
		src: '/event/fun',
		name: 'Fun Events',
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
	trailerLink: 'https://www.youtube.com/embed/lbIV_6hfeYU',
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
			{ text: 'Flagship Events', href: 'flagship' },
			{ text: 'Pro Shows', href: 'pro' },
			{ text: 'Main Events', href: 'main' },
			{ text: 'Fun Events', href: 'fun' },
			{ text: 'Exhibitions', href: 'exhibitions' },
			{ text: 'Workshops', href: 'workshops' },
		],
	},
	Timings: {
		title: 'Opening Hours',
		weekends: '08:00 - 22:00',
		weekdays: '11:00 - 20:00',
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
];

export const INIT_STATE = {
	value: '',
	errorVisibility: false,
	errorMessage: '',
};

export const INPUTS: (arg0: userDataType) => valueProps = ({
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

export const sponsors = {
	title: [
		{
			src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/past_rv4xvj.png',
			name: 'Devfolio',
			size: '90%',
			link: 'https://devfolio.co/',
			width: '150px',
			alt: 'Devfolio',
		},
		{
			src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/MLH_xejp6v.png',
			name: 'Major League Hacking',
			size: '90%',
			link: 'https://mlh.io/',
			width: '170px',
			alt: 'Major League Hacking',
		},
		{
			src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/polygon_vvmhvg.png',
			name: 'Polygon',
			size: '90%',
			link: 'https://polygon.technology/',
			width: '180px',
			alt: 'Polygon',
		},
	],
	gold: [
		{
			src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1672153500/Sponsors/white_e5gwsk.svg',
			name: 'Quine',
			size: '90%',
			link: 'https://quine.sh/',
			width: '170px',
			alt: 'Quine',
		},
		{
			src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667587758/hn/Solana_Dark_wmguj1.svg',
			name: 'Solana',
			size: '90%',
			link: 'https://solana.com',
			width: '170px',
			alt: 'Solana',
		},
		{
			src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667588043/hn/Filecoin_Coloured_White_Text-1_q7q08w.png',
			name: 'Filecoin',
			size: '90%',
			link: 'https://filecoin.io',
			width: '170px',
			alt: 'Filecoin',
		},
		{
			src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg',
			name: 'Replit',
			size: '90%',
			link: 'https://replit.com',
			width: '170px',
			alt: 'Replit',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028465/HackNITR/Shardeum_Logo_Light_thajcd_zsfpax.svg',
			name: 'shardeum',
			size: '90%',
			link: 'https://shardeum.org/',
			width: '170px',
			alt: 'shardeum',
		},
		{
			src: 'https://assets.devfolio.co/hackathons/63b3a379347c43328212ef6618c1aaa3/sponsors/71d81da18cfa4892a24f0cb7d9b0ea18/854.png',
			name: 'digitalocean',
			size: '90%',
			link: 'https://digitalocean.com/',
			width: '170px',
			alt: 'digitalocean',
		},
	],
	silver: [
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027909/HackNITR/apyhub-logo-negative-tm_hncnyj_m2segf.svg',
			name: 'Apyhub',
			size: '100%',
			link: 'https://apyhub.com/',
			alt: 'Apyhub',
		},
		{
			src: 'https://assets.devfolio.co/hackathons/63b3a379347c43328212ef6618c1aaa3/sponsors/2989606dfb894c4b8df46a5e7f71a24f/202.jpeg',
			name: 'Tezos',
			size: '100%',
			link: 'https://tezos.com/',
			alt: 'Tezos',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027915/HackNITR/logo_lifi_horizontal_dark_theme_efwedc_muzkpc.svg',
			name: 'LIFI',
			size: '100%',
			link: 'https://li.fi/',
			alt: 'LIFI',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027910/HackNITR/download_6_ooswsx_d9idrb.png',
			name: 'earthhacks',
			size: '100%',
			link: 'https://earthhacks.io/',
			alt: 'earthhacks',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673792160/HackNITR/BuidlersTribe-Logo-White_w0hh5f.png',
			name: 'buidlerstribe',
			size: '100%',
			link: 'https://buidlerstribe.com/',
			alt: 'buidlerstribe',
		},
	],
	delta: [
		{
			src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1671869547/Sponsors/StreamYard_-_Horz_2_kisme6.png',
			name: 'StreamYard',
			size: '100%',
			link: 'https://streamyard.com/',
			alt: 'StreamYard',
		},
		{
			src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1671869548/Sponsors/Voiceflow_Logo_White_pre3ml.png',
			name: 'Voiceflow',
			size: '100%',
			link: 'https://www.voiceflow.com/',
			alt: 'Voiceflow',
		},
		{
			src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/wolfram_sid6kv.png',
			name: 'Wolfram',
			size: '100%',
			link: 'https://www.wolfram.com/',
			alt: 'Wolfram',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028465/HackNITR/Screenshot_from_2022-12-27_18-20-16_zuupj6_nu8pzj.png',
			name: 'CockRoachDB',
			size: '11 0%',
			link: 'https://www.cockroachlabs.com/',
			alt: 'CockRoachDB',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027913/HackNITR/GoDaddy-White-Logo.wine_w2zbub_gtns7e.svg',
			name: 'GoDaddy',
			size: '100%',
			link: 'https://www.godaddy.com/en-in',
			alt: 'GoDaddy',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028465/HackNITR/unnamed_ckyvcj_ur8rue.png',
			name: 'Twilio',
			size: '100%',
			link: 'https://www.twilio.com/',
			alt: 'Twilio',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027909/HackNITR/brand_evolution_logo_Auth0_white_m8hcor_rl1thh.svg',
			name: 'auth0',
			size: '100%',
			link: 'https://auth0.com/',
			alt: 'auth0',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027910/HackNITR/download_qjusxz_dccnpa.png',
			name: 'velo',
			size: '90%',
			link: 'https://www.wix.com/velo',
			alt: 'velo',
		},
		{
			src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1671868833/Sponsors/white-logo-fueler_k177pt.png',
			name: 'Fueler',
			size: '100%',
			link: 'https://fueler.io/',
			alt: 'Fueler',
		},
		{
			src: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052019/axure_logo_4001x.png?bkzcT4rEHbOSEpTxkZdEi6G3aoPwy1xH&itok=eVx3xGaP',
			name: 'Axure',
			size: '100%',
			link: 'https://www.axure.com/',
			alt: 'Axure',
		},
		{
			src: 'https://assets.devfolio.co/hackathons/63b3a379347c43328212ef6618c1aaa3/sponsors/efcc5c3e75dd4ce0976f22714a3537c3/141.png',
			name: 'hoverrobotix',
			size: '100%',
			link: 'https://hoverrobotix.com/',
			alt: 'hoverrobotix',
		},
		{
			src: 'https://www.echo3d.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecho3D_logo.b341e4a8.png&w=1080&q=75',
			name: 'echo3d',
			size: '100%',
			link: 'https://www.echo3d.com/',
			alt: 'echo3d',
		},
		{
			src: 'https://assets.devfolio.co/hackathons/63b3a379347c43328212ef6618c1aaa3/sponsors/4b7188f587ce4aefb4857f80ccc4f361/281.jpeg',
			name: 'interviewbuddy',
			size: '100%',
			link: 'https://interviewbuddy.in/',
			alt: 'interviewbuddy',
		},
		{
			src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028466/HackNITR/xyz-logo-white_uc8th5_kxldjo.svg',
			name: 'xyz',
			size: '100%',
			link: 'https://gen.xyz/',
			alt: 'xyz',
		},
		{
			src: 'https://onehacks.org/assets/images/Leading_Learners_White_Logo_Full_Text_PNG.png',
			name: 'leadlearners',
			size: '100%',
			link: 'https://www.leadlearners.ca/',
			alt: 'leadlearners',
		},
	],
};
