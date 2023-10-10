import { Link } from "@/components/ui/Link";
import { Title } from "@/components/ui/Title";

export default function Custom404(): JSX.Element {
	return (
		<>
			<Title title="404 | Ugolin Ollé" />
			<div className="flex flex-col gap-6">
				<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-6">
					404 - Page not found!
				</h1>
				<p className="text-secondary">
					Uh oh! This page does not exists, maybe you clicked an old
					link or misspelled. Please try again…
				</p>
				<div className="h-2" />
				<Link href="/" underline>
					Return home
				</Link>
			</div>
		</>
	);
}
