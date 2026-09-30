export type Workout = {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  description: string;
  image: string;
  muscle: string;
  equipment: string;
  instructions: string[];
};

export const workouts: Workout[] = [
  {
    id: 1,
    name: "Barbell Bench Press",
    category: "Chest",
    difficulty: "Intermediate",
    description:
      "The barbell bench press is a compound upper-body exercise that primarily targets the chest while also working the shoulders and triceps.",
    image: "/workout.image",
    muscle: "Chest",
    equipment: "Barbell",
    instructions: [
      "Lie flat on the bench with your feet firmly on the floor.",
      "Grip the bar slightly wider than shoulder width.",
      "Lower the bar slowly toward the middle of your chest.",
      "Press the bar upward until your arms are extended.",
      "Repeat the movement with controlled form.",
    ],
  },

  {
    id: 2,
    name: "Pull-Up",
    category: "Back",
    difficulty: "Intermediate",
    description:
      "Pull-ups are a bodyweight exercise that primarily target the back and also work the biceps and shoulders.",
    image: "/workout-card.png",
    muscle: "Back",
    equipment: "Pull-Up Bar",
    instructions: [
      "Grip the pull-up bar with your palms facing away.",
      "Hang from the bar with your arms fully extended.",
      "Pull your chest toward the bar.",
      "Keep your body controlled throughout the movement.",
      "Lower yourself slowly to the starting position.",
    ],
  },

  {
    id: 3,
    name: "Back Squat",
    category: "Legs",
    difficulty: "Advanced",
    description:
      "The back squat is a compound lower-body exercise that develops the quadriceps, hamstrings, and glutes.",
    image: "/workout-card.png",
    muscle: "Legs",
    equipment: "Barbell",
    instructions: [
      "Place the barbell securely across your upper back.",
      "Stand with your feet approximately shoulder width apart.",
      "Brace your core and begin lowering your hips.",
      "Lower until your thighs are approximately parallel to the floor.",
      "Drive through your feet to return to standing.",
    ],
  },

  {
    id: 4,
    name: "Deadlift",
    category: "Back",
    difficulty: "Advanced",
    description:
      "The deadlift is a full-body compound movement that primarily develops the posterior chain.",
    image: "/workout-card.png",
    muscle: "Back",
    equipment: "Barbell",
    instructions: [
      "Stand with the barbell over the middle of your feet.",
      "Bend your knees and hinge at your hips.",
      "Grip the bar firmly with both hands.",
      "Keep your back neutral while lifting the bar.",
      "Stand tall and lower the bar under control.",
    ],
  },
];