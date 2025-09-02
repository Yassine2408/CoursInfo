window.__BI_CONTENT__ = {
	courses: [
		{
			id: 'bureautique-word-debutant',
			title: 'Word – Mise en forme et mise en page (Débutant)',
			category: 'Bureautique',
			level: 'Débutant',
			duration: '3h',
			tags: ['Word', 'Mise en forme', 'Bureautique'],
			summary: 'Apprenez à créer et structurer des documents professionnels : styles, listes, en-têtes/pieds de page et export PDF.',
			content: [
				{
					title: 'Découvrir l’interface et les styles',
					explanation: 'Présentation du ruban, des panneaux latéraux, et des styles de paragraphe/caractère pour uniformiser la mise en forme.',
					examples: ['Appliquer un style Titre 1 à un en-tête', 'Utiliser Normal + Emphase pour un paragraphe'],
					exercises: ['Créer un document avec 3 titres et un paragraphe chacun', 'Modifier un style pour changer toute la mise en forme']
				},
				{
					title: 'Listes, interlignes et alignements',
					explanation: 'Gérer l’alignement (gauche, centré, justifié), l’interligne, et les listes à puces/numérotées pour améliorer la lisibilité.',
					examples: ['Transformer un paragraphe en liste numérotée en 2 niveaux', 'Ajuster l’interligne à 1,15'],
					exercises: ['Créer une liste à puces avec sous-puces', 'Mettre en forme un texte en justifié avec espacements']
				},
				{
					title: 'Mise en page et export',
					explanation: 'Gérer marges, orientation, sauts de page/section, en-têtes/pieds de page, et exporter en PDF.',
					examples: ['Ajouter un numéro de page', 'Créer un saut de section avant une annexe'],
					exercises: ['Préparer un document A4 avec marges 2,5 cm', 'Insérer un en-tête personnalisé et exporter en PDF']
				}
			]
		},
		{
			id: 'bureautique-excel-intermediaire',
			title: 'Excel – Tableaux, formules et graphiques (Intermédiaire)',
			category: 'Bureautique',
			level: 'Intermédiaire',
			duration: '4h',
			tags: ['Excel', 'Formules', 'Graphiques'],
			summary: 'Structurez des données en tableaux, maîtrisez les formules essentielles et créez des graphiques pertinents.',
			content: [
				{
					title: 'Tableaux et validation de données',
					explanation: 'Convertir des plages en tableaux, filtres, tris, formats, et lister des choix via validation de données.',
					examples: ['Créer un tableau avec en-têtes et filtres', 'Ajouter une liste déroulante pour la colonne Catégorie'],
					exercises: ['Nettoyer une liste de ventes et activer les filtres', 'Contrôler la saisie avec une liste de valeurs']
				},
				{
					title: 'Formules clés',
					explanation: 'Somme, Moyenne, Nb.Si, RechercheX/RECHERCHEV, Si conditionnel, concaténation et références absolues/relatives.',
					examples: ['=SOMME(B2:B20)', '=SI(C2>1000, "Prime", "—")', '=RECHERCHEX(A2; Feuil2!A:B; 2)'],
					exercises: ['Calculer total et moyenne par catégorie', 'Créer une formule Si pour classer des montants']
				},
				{
					title: 'Graphiques et mise en forme conditionnelle',
					explanation: 'Choisir le bon type de graphique, ajouter titres/étiquettes, et mettre en évidence des valeurs clés avec règles conditionnelles.',
					examples: ['Graphique en colonnes avec étiquettes de données', 'Barres de progression via MFC'],
					exercises: ['Créer un graphique comparant 3 catégories', 'Colorer en rouge les montants > 1000']
				}
			]
		},
		{
			id: 'bureautique-powerpoint-debutant',
			title: 'PowerPoint – Présentations impactantes (Débutant)',
			category: 'Bureautique',
			level: 'Débutant',
			duration: '2h30',
			tags: ['PowerPoint', 'Design', 'Présentation'],
			summary: 'Construisez des diaporamas clairs : structure, thèmes, images, icônes, transitions et export.',
			content: [
				{ title: 'Structure de la présentation', explanation: 'Plan, hiérarchie, diapositives types et règles de lisibilité (taille de police, contraste).', examples: ['Utiliser une diapo Titre + Contenu', 'Limiter le texte à l’essentiel'], exercises: ['Créer un plan en 6 diapositives', 'Appliquer un thème cohérent'] },
				{ title: 'Visuels et transitions', explanation: 'Insertion d’images/icônes, alignement, espaces, et transitions discrètes.', examples: ['Aligner des éléments avec le magnétisme', 'Transition Fondu'], exercises: ['Créer une diapo avec 3 icônes alignées', 'Ajouter des transitions sobres'] },
				{ title: 'Export et partage', explanation: 'Exporter en PDF/vidéo, intégrer des polices et préparer au partage.', examples: ['Exporter en PDF', 'Tester la lecture de la présentation'], exercises: ['Exporter le diaporama au format PDF', 'Vérifier l’intégration des polices'] }
			]
		},
		{
			id: 'informatique-initiation-systemes',
			title: 'Informatique – Initiation aux systèmes et réseaux',
			category: 'Informatique',
			level: 'Débutant',
			duration: '3h30',
			tags: ['Systèmes', 'Réseaux', 'Internet'],
			summary: 'Comprendre le système d’exploitation, les fichiers, le réseau local et Internet, adresses IP et sécurité de base.',
			content: [
				{ title: 'Systèmes d’exploitation', explanation: 'Rôle du système, fichiers, permissions, installation de logiciels.', examples: ['Naviguer dans l’arborescence', 'Créer/gérer des dossiers'], exercises: ['Classer des fichiers par type/date', 'Installer un logiciel en toute sécurité'] },
				{ title: 'Réseaux et IP', explanation: 'LAN, WAN, routeur, DNS, IP privée/publique, ping et dépannage réseau.', examples: ['Identifier l’IP locale', 'Tester la connectivité'], exercises: ['Trouver la passerelle par défaut', 'Expliquer le rôle du DNS'] },
				{ title: 'Sécurité de base', explanation: 'Mises à jour, antivirus, mots de passe, phishing, sauvegardes.', examples: ['Créer un mot de passe robuste', 'Reconnaître un mail frauduleux'], exercises: ['Configurer l’authentification à 2 facteurs', 'Planifier une sauvegarde hebdomadaire'] }
			]
		},
		{
			id: 'informatique-prise-en-main-python',
			title: 'Programmation Python – Bases pratiques',
			category: 'Informatique',
			level: 'Débutant',
			duration: '5h',
			tags: ['Python', 'Algorithmes', 'Programmation'],
			summary: 'Variables, conditions, boucles, fonctions, listes et dictionnaires avec exemples concrets et petits projets.',
			content: [
				{ title: 'Syntaxe et variables', explanation: 'Types de base, affectations, conversions.', examples: ['age = 25', 'int("42")'], exercises: ['Demander un nom et l’afficher', 'Convertir une chaîne en nombre'] },
				{ title: 'Conditions et boucles', explanation: 'if/elif/else, for, while, bonnes pratiques.', examples: ['for i in range(5):', 'while n > 0:'], exercises: ['Jeu: deviner un nombre', 'Afficher les nombres pairs de 1 à 50'] },
				{ title: 'Fonctions et structures', explanation: 'Définir des fonctions, listes, dictionnaires, itérations.', examples: ['def somme(a,b):', '[1,2,3]', '{"clé": "valeur"}'], exercises: ['Calculer la moyenne d’une liste', 'Compter les occurrences de mots'] }
			]
		},
		{
			id: 'informatique-bases-web',
			title: 'Web – HTML, CSS, Accessibilité',
			category: 'Informatique',
			level: 'Intermédiaire',
			duration: '4h',
			tags: ['HTML', 'CSS', 'Accessibilité'],
			summary: 'Construire des pages web sémantiques, utiliser Flex/Grid et respecter l’accessibilité de base.',
			content: [
				{ title: 'HTML sémantique', explanation: 'Balises structurantes, textes, listes, liens, images avec alt.', examples: ['<header>, <main>, <footer>', '<nav aria-label="…">'], exercises: ['Créer une page avec sections sémantiques', 'Ajouter des attributs alt pertinents'] },
				{ title: 'CSS moderne', explanation: 'Variables, Flexbox, Grid, breakpoints, responsivité.', examples: ['display: grid;', 'grid-template-columns: repeat(3, 1fr);'], exercises: ['Créer une grille responsive', 'Mettre en page un header sticky'] },
				{ title: 'Accessibilité', explanation: 'Labels, contrastes, focus, lecture clavier, aria.', examples: ['aria-label, role', 'focus visible'], exercises: ['Rendre un menu accessible', 'Tester le site au clavier'] }
			]
		}
	],
	program: [
		{ title: 'Prise en main & objectifs', objectives: 'Installer les outils, définir vos objectifs et découvrir l’interface des logiciels.', activities: ['Installer LibreOffice ou Microsoft 365', 'Prendre en main Word et Excel', 'Lister vos objectifs d’apprentissage'] },
		{ title: 'Documents professionnels', objectives: 'Styles, listes, mises en page avancées.', activities: ['Créer un rapport avec styles', 'Numérotation automatique des titres', 'Exporter en PDF'] },
		{ title: 'Données & formules', objectives: 'Tableaux structurés, formules essentielles et validation de données.', activities: ['Nettoyer un jeu de données', 'Formules SOMME, MOYENNE, SI', 'Listes déroulantes'] },
		{ title: 'Visualisation & présentations', objectives: 'Graphiques, mises en forme conditionnelles et diaporamas.', activities: ['Créer 2 graphiques pertinents', 'Mettre en forme conditionnelle', 'Construire un plan de présentation'] },
		{ title: 'Réseaux & sécurité', objectives: 'Bases réseaux, IP, sécurité du quotidien.', activities: ['Identifier votre IP', 'Simuler un phishing et le déjouer', 'Mettre à jour vos logiciels'] },
		{ title: 'Programmation Python', objectives: 'Variables, boucles, fonctions, structures de données.', activities: ['Mini-projet: calculatrice', 'Lire/écrire des fichiers simples', 'Exercices de boucles'] },
		{ title: 'Web de base', objectives: 'HTML sémantique, CSS Grid/Flex, accessibilité.', activities: ['Coder une page sémantique', 'Créer une grille responsive', 'Tester l’accessibilité clavier'] },
		{ title: 'Consolidation & projet', objectives: 'Révision, QCM, projet de synthèse et plan de progression personnel.', activities: ['QCM de révision', 'Projet: mini-portfolio', 'Plan d’autoformation pour 4 semaines'] }
	]
};
