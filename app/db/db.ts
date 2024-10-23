interface Todo {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
  category: string;
}

export const todos: Todo[] = [
  {
    id: 0,
    title: "Acheter des légumes",
    description: "Acheter des carottes, pommes de terre et oignons.",
    priority: "medium",
    status: "pending",
    createdAt: "10 days ago",
    category: "travail",
  },
  {
    id: 1,
    title: "Nettoyer la voiture",
    description: "Laver l'extérieur et passer l'aspirateur à l'intérieur.",
    priority: "low",
    status: "in-progress",
    createdAt: "5 days ago",
    category: "loisir",
  },
  {
    id: 2,
    title: "Finaliser le projet de design",
    description: "Terminer la maquette pour le client et l'envoyer.",
    priority: "high",
    status: "in-progress",
    createdAt: "2 days ago",
    category: "travail",
  },
  {
    id: 3,
    title: "Lire un livre sur la gestion financière",
    description: "Terminer le chapitre sur les investissements.",
    priority: "medium",
    status: "pending",
    createdAt: "1 day ago",
    category: "éducation",
  },
  {
    id: 4,
    title: "Rendez-vous chez le médecin",
    description: "Contrôle de santé général.",
    priority: "high",
    status: "pending",
    createdAt: "3 days ago",
    category: "santé",
  },
  {
    id: 5,
    title: "Planifier les vacances d'été",
    description: "Chercher des destinations et des hébergements.",
    priority: "medium",
    status: "pending",
    createdAt: "1 week ago",
    category: "voyages",
  },
  {
    id: 6,
    title: "Faire du bénévolat au refuge",
    description: "Aider à la distribution de nourriture.",
    priority: "low",
    status: "pending",
    createdAt: "2 days ago",
    category: "bénévolat",
  },
  {
    id: 7,
    title: "Écrire un article pour le blog",
    description: "Rédiger sur les tendances technologiques.",
    priority: "medium",
    status: "in-progress",
    createdAt: "3 days ago",
    category: "travail",
  },
  {
    id: 8,
    title: "Participer à un cours de yoga",
    description: "Améliorer la flexibilité et la santé mentale.",
    priority: "medium",
    status: "pending",
    createdAt: "1 week ago",
    category: "santé",
  },
  {
    id: 9,
    title: "Préparer un dîner spécial pour la famille",
    description: "Préparer un plat de pâtes avec une salade.",
    priority: "low",
    status: "pending",
    createdAt: "2 hours ago",
    category: "loisir",
  },
];
