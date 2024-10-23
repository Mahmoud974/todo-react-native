interface Todo {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

export const todos: Todo[] = [
  {
    id: 0,
    title: "Acheter des légumes",
    description: "Acheter des carottes, pommes de terre et oignons.",
    priority: "medium",
    status: "pending",
    createdAt: "10 days ago",
  },
  {
    id: 1,
    title: "Nettoyer la voiture",
    description: "Laver l'extérieur et passer l'aspirateur à l'intérieur.",
    priority: "low",
    status: "in-progress",
    createdAt: "5 days ago",
  },
  {
    id: 2,
    title: "Finaliser le projet de design",
    description: "Terminer la maquette pour le client et l'envoyer.",
    priority: "high",
    status: "in-progress",
    createdAt: "2 days ago",
  },
  {
    id: 3,
    title: "Appeler le plombier",
    description: "Problème de fuite dans la salle de bain.",
    priority: "high",
    status: "completed",
    createdAt: "7 days ago",
  },
  {
    id: 4,
    title: "Envoyer des emails",
    description: "Répondre aux emails en attente pour le projet en cours.",
    priority: "medium",
    status: "pending",
    createdAt: "1 day ago",
  },

  {
    id: 5,
    title: "Préparer le dîner",
    description: "Faire des pâtes et une salade pour le dîner.",
    priority: "medium",
    status: "pending",
    createdAt: "3 hours ago",
  },
  {
    id: 6,
    title: "Faire du sport",
    description: "Aller à la salle de sport pour une séance d'entraînement.",
    priority: "low",
    status: "pending",
    createdAt: "1 hour ago",
  },
  {
    id: 7,
    title: "Lire un livre",
    description: "Finir le livre que j'ai commencé la semaine dernière.",
    priority: "medium",
    status: "in-progress",
    createdAt: "2 days ago",
  },
  {
    id: 8,
    title: "Planifier le week-end",
    description: "Organiser les activités pour le week-end prochain.",
    priority: "low",
    status: "pending",
    createdAt: "4 days ago",
  },
];
