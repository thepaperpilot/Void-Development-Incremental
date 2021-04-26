import { getDisplayName } from './utils.js';

export const welcomeMessages = [
	// Extended list from https://gist.github.com/fourjr/0f47ce8a000c29cd4e24f8aeb7edd8e0
	"[!!{username}!!](usernameOnClick) just joined the server - glhf!",
	"[!!{username}!!](usernameOnClick) just joined. Everyone, look busy!",
	"[!!{username}!!](usernameOnClick) just joined. Can I get a heal?",
	"[!!{username}!!](usernameOnClick) joined your party.",
	"[!!{username}!!](usernameOnClick) joined. You must construct additional pylons.",
	"Ermagherd. [!!{username}!!](usernameOnClick) is here.",
	"Welcome, [!!{username}!!](usernameOnClick). Stay awhile and listen.",
	"Welcome, [!!{username}!!](usernameOnClick). We hope you brought pizza.",
	"Welcome [!!{username}!!](usernameOnClick). Leave your weapons by the door.",
	"A wild [!!{username}!!](usernameOnClick) appeared.",
	"Swoooosh. [!!{username}!!](usernameOnClick) just landed.",
	"Brace yourselves. [!!{username}!!](usernameOnClick) just joined the server.",
	"[!!{username}!!](usernameOnClick) just joined. Hide your bananas.",
	"[!!{username}!!](usernameOnClick) just arrived. Seems OP - please nerf.",
	"[!!{username}!!](usernameOnClick) just slid into the server.",
	"A [!!{username}!!](usernameOnClick) has spawned in the server.",
	"Big [!!{username}!!](usernameOnClick) showed up!",
	"Where's [!!{username}!!](usernameOnClick)? In the server!",
	"[!!{username}!!](usernameOnClick) hopped into the server. Kangaroo!!",
	"[!!{username}!!](usernameOnClick) just showed up. Hold my beer.",
	"Challenger approaching - [!!{username}!!](usernameOnClick) has appeared!",
	"It's a bird! It's a plane! Nevermind, it's just [!!{username}!!](usernameOnClick).",
	"It's [!!{username}!!](usernameOnClick)! Praise the sun! \\[T]/",
	"Never gonna give [!!{username}!!](usernameOnClick) up. Never gonna let [!!{username}!!](usernameOnClick) down.",
	"Ha! [!!{username}!!](usernameOnClick) has joined! You activated my trap card!",
	"Cheers, love! [!!{username}!!](usernameOnClick)'s here!",
	"Hey! Listen! [!!{username}!!](usernameOnClick) has joined!",
	"We've been expecting you [!!{username}!!](usernameOnClick)",
	"It's dangerous to go alone, take [!!{username}!!](usernameOnClick)!",
	"[!!{username}!!](usernameOnClick) has joined the server! It's super effective!",
	"Cheers, love! [!!{username}!!](usernameOnClick) is here!",
	"[!!{username}!!](usernameOnClick) is here, as the prophecy foretold.",
	"[!!{username}!!](usernameOnClick) has arrived. Party's over.",
	"Ready player [!!{username}!!](usernameOnClick)",
	"[!!{username}!!](usernameOnClick) is here to kick butt and chew bubblegum. And [!!{username}!!](usernameOnClick) is all out of gum.",
	"Hello. Is it [!!{username}!!](usernameOnClick) you're looking for?",
	"[!!{username}!!](usernameOnClick) has joined. Stay a while and listen!",
	"Roses are red, violets are blue, [!!{username}!!](usernameOnClick) joined this server with you",
].map(message => id => message.replaceAll('[!!{username}!!](usernameOnClick)', `<b>${getDisplayName(id)}</b>`));
