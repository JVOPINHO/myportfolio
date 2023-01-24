export const timeline = [
	{
		title: 'The Start - 2019',
		content: 'In 2019 I participated in the robotics group at my school, but among the members there was no one who knew how to work with an arduino, so I, who already liked logical questions, started my C++ studies'
	},
	{
		title: '2020',
		content: 'With the arrival of the COVID-19 pandemic in 2020 and without the possibility of leaving home, I started using Discord to chat with my friends, and one thing on the platform fascinated me, which was the creation of bots, so in November of same year **I created my own bot called [Lunary](https://lunary.space/)**'
	},
	{
		title: '2021',
		content: 'In August 2021, content creator [Rafaella Ballerini](https://www.youtube.com/@rafaellaballerini), who talks about programming, opened vacancies for her [discord community](https://discord.gg/wagxzStdcR) team and **I applied to develop bots and systems**, internally called R2D2, and was accepted into the team'
	},
];

export const skills = [
	formatSkill('TypeScript', true),
	formatSkill('Node', true),
	formatSkill('GraphQL', true),
	formatSkill('JavaScript', true),
	formatSkill('Prisma', true, 'https://raw.githubusercontent.com/leonardssh/vscord/main/assets/icons/prisma.png'),
	formatSkill('PostgreSQL', true),
	formatSkill('Redis', true),
	formatSkill('ReactJs', true),
	formatSkill('NextJs', true),
	formatSkill('HTML5', true),
	formatSkill('CSS3', true),
	formatSkill('Firebase', true, '/firebase.svg'),
	formatSkill('Lua'),
	formatSkill('MongoDB'),
	formatSkill('MySQL'),
];

function formatSkill(name: string, favorite: boolean = false, image: string = `https://xesque.rocketseat.dev/platform/tech/${name.replace(/\s/g, '_').toLowerCase()}.svg`) {
	return {
		name,
		favorite,
		image
	};
}