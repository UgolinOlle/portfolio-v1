import { Transition } from "@/components/Transition";
import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";

export default function GetNextLine() {
	return (
		<>
			<Title title="get_next_line | Ugolin Ollé" />
			<Transition>
				<div className="flex flex-col gap-16 md:gap-24">
					<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight">
						get_next_line
					</h1>
					<h4 className="animate-in text-secondary text-1xl md:text-2xl tracking-tight pb-10">
						42 Project
					</h4>
				</div>
				<div className="flex flex-col gap-8">
					<Section heading="About">
						This project, get_next_line, is part of the 42 School
						curriculum and focuses on reading a line from a file
						descriptor (such as a text file or standard input) using
						a function called get_next_line. <br /> <br />
						The get_next_line function reads a line from the
						specified file descriptor until it reaches a newline
						character (\n) or the end of the file (EOF). It stores
						the line in a buffer and returns it as a string. The
						function is designed to be called in a loop to read
						multiple lines from a file.
					</Section>
					<div className="border border-t-[0.5px] border-secondary"></div>
					<Section heading="How ?" className="flex md:flex-col gab-5">
						<p className="text-secondary">
							La création de get_next_line (GNL) nécessite une
							compréhension approfondie de la manipulation des
							chaînes de caractères, de la gestion de la mémoire
							et des appels système pour la lecture de fichiers.
						</p>
						<p className="text-primary">
							<span className="font-bold text-blue text-1xl md:text-2xl">
								1. Initialisation :
							</span>
							<br /> Buffer : Allouez un espace mémoire pour un
							buffer qui stockera temporairement les données lues
							depuis le fichier. La taille du buffer est
							généralement définie par une macro BUFFER_SIZE.
							Stockage statique : Utilisez une variable statique
							pour stocker les restes de lecture entre les appels
							à la fonction. Cela permet de conserver les données
							entre les différents appels à GNL.
						</p>
						<p className="text-primary">
							<span className="font-bold text-blue text-1xl md:text-2xl">
								2. Lecture du fichier :
							</span>
							<br /> Utilisez l&apos;appel système read pour lire
							le fichier dans le buffer. La quantité de données
							lues est déterminée par BUFFER_SIZE.
						</p>
						<p className="text-primary">
							<span className="font-bold text-blue text-1xl md:text-2xl">
								3. Traitement des données :
							</span>
							<br />
							Après chaque lecture, vérifiez si une nouvelle ligne
							(\n) est présente dans le buffer. Si une nouvelle
							ligne est trouvée, découpez la chaîne jusqu&apos;à
							cette nouvelle ligne et ajoutez-la à la variable
							statique. La partie après la nouvelle ligne est
							conservée pour le prochain appel à GNL. Si aucune
							nouvelle ligne n&apos;est trouvée, ajoutez tout le
							contenu du buffer à la variable statique.
						</p>
						<p className="text-primary">
							4. Retour de la ligne : Si une nouvelle ligne est
							trouvée (ou si la fin du fichier est atteinte),
							retournez la ligne accumulée jusqu&apos;à présent.
							Assurez-vous de gérer correctement la mémoire en
							allouant de l&apos;espace pour la ligne retournée et
							en libérant tout espace inutilisé.
						</p>
						<p className="text-primary">
							5.Gestion des erreurs : Gérez les cas d&apos;erreur,
							comme une erreur de lecture ou une allocation
							mémoire échouée, en renvoyant -1. Assurez-vous de
							libérer toute mémoire allouée en cas d&apos;erreur
							pour éviter les fuites de mémoire.
						</p>

						<p className="text-primary">
							6. Fin de fichier : Si la fin du fichier est
							atteinte (c&apos;est-à-dire que l&apos;appel système
							read renvoie 0), retournez 0 pour indiquer
							qu&apos;il n&apos;y a plus de lignes à lire.
						</p>
					</Section>
				</div>
			</Transition>
		</>
	);
}
