import { GITHUB_URL_API } from "@/utils/constants";
import type { NextApiRequest, NextApiResponse } from "next";

async function fetchGitHubData(endpoint: string) {
	const url = `${GITHUB_URL_API}${endpoint}`;
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
	});
	return await response.json();
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		// -- Repos
		const reposUrl = `/users/UgolinOlle/repos?per_page=100`;
		const responseRepos = await fetchGitHubData(reposUrl);

		if (Array.isArray(responseRepos)) {
			const stars = responseRepos.reduce(
				(acc: number, curr: { stargazers_count: number }) =>
					acc + curr.stargazers_count,
				0,
			);

			// -- User
			const userUrl = `/users/UgolinOlle`;
			const responseUser = await fetchGitHubData(userUrl);
			const repos = responseUser.public_repos - 1;
			const followers = responseUser.followers;

			// -- Commits
			let commits = 0;
			// for (let i = 0; i <= repos; i++) {
			//   let repoUrl = `/users/UgolinOlle/${responseRepos[i].name}/commits`;
			//   let responseRepo = await fetchGitHubData(repoUrl);
			//   console.log(responseRepo);
			//   commits += responseRepo.length;
			// }

			res.status(200).json({ stars, repos, followers, commits });
		} else {
			res.status(500).json({
				stars: 0,
				repos: 0,
				followers: 0,
				commits: 0,
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ stars: 0, repos: 0, followers: 0, commits: 0 });
	}
}
