import { MatchStatus, Set } from './../../generated/prisma';

import { Gender } from "@/generated/prisma";
import { hashPassword } from "../../lib";

export const users = [
  {
    username: 'ADMIN',
    password: hashPassword('123456'),
  },
]

export const news = [
  {
    title: 'Cillum reprehenderit commodo in laboris eu.',
    description: 'Irure aliqua est non exercitation deserunt qui et eiusmod exercitation. Do sit ex quis laboris reprehenderit. Nostrud duis excepteur quis incididunt anim qui. Proident magna enim laborum eiusmod consectetur eiusmod duis ex aliquip adipisicing sit ullamco dolor. Esse sint fugiat deserunt exercitation do deserunt nisi nisi est eiusmod irure eu laborum aliquip. Minim sint commodo non qui velit aliquip reprehenderit sunt cillum irure.',
    imageUrl: '',
  },
  {
    title: 'Esse eiusmod tempor incididunt ipsum occaecat.',
    description: 'Elit pariatur culpa est tempor pariatur do consectetur sit. Esse amet eu laborum aliquip pariatur adipisicing aliquip dolore velit nulla exercitation ullamco consectetur velit. Consectetur laborum veniam in incididunt excepteur aliquip velit sit in ipsum occaecat. Deserunt tempor esse reprehenderit esse aliquip elit culpa aute enim ullamco anim. Amet voluptate sint et aliquip nostrud adipisicing deserunt culpa aliqua ut duis Lorem deserunt.',
    imageUrl: '',
  },
  {
    title: 'Non ullamco nisi tempor quis.',
    description: 'Occaecat officia consectetur Lorem ut et. Fugiat ad voluptate amet est minim eiusmod anim non eiusmod irure irure nisi ad. Enim id elit ut officia nulla amet commodo incididunt mollit minim labore non nulla occaecat. Labore nisi voluptate officia labore. Labore eiusmod sunt laboris irure veniam. Ea eu nostrud quis ea quis ea magna voluptate sit eu velit et. Aliqua cillum commodo Lorem dolore elit consectetur.',
    imageUrl: '',
  },
];

export const league_levels = [
  { description: "A" },
  { description: "B" },
];

export const teams = [
  { description: "Los Dragones", gender: Gender.MASCULINO, levelId: 1 },
  { description: "Las Panteras Rosas", gender: Gender.FEMENINO, levelId: 1 },
  { description: "Los Titanes", gender: Gender.MASCULINO, levelId: 2 },
  { description: "Las Amazonas", gender: Gender.FEMENINO, levelId: 2 }
];

export const players =[
  { "fullname": "Juan Pérez", "dni": "12345678", "birthDate": "1995-01-15T00:00:00Z", "gender": Gender.MASCULINO, "teamId": 1 },
  { "fullname": "Martina Suárez", "dni": "87654321", "birthDate": "1998-05-20T00:00:00Z", "gender": Gender.FEMENINO, "teamId": 2 },
  { "fullname": "Carlos González", "dni": "11223344", "birthDate": "1990-11-10T00:00:00Z", "gender": Gender.MASCULINO, "teamId": 3 },
  { "fullname": "Sofía Rodríguez", "dni": "44332211", "birthDate": "2000-07-25T00:00:00Z", "gender": Gender.FEMENINO, "teamId": 4 }
];

export const matches = [
  { "matchDate": "2025-10-01T19:00:00Z", "matchHour": "2025-10-01T19:00:00Z", "status": MatchStatus.FINISHED, "teamAId": 1, "teamBId": 3 },
  { "matchDate": "2025-10-05T18:30:00Z", "matchHour": "2025-10-05T18:30:00Z", "status": MatchStatus.PENDING, "teamAId": 2, "teamBId": 4 }
]

export const setResults = [
  { "matchId": 1, "setNumber": Set.FIRST_SET, "scoreTeamA": 25, "scoreTeamB": 22 },
  { "matchId": 1, "setNumber": Set.SECOND_SET, "scoreTeamA": 20, "scoreTeamB": 25 },
  { "matchId": 1, "setNumber": Set.THIRD_SET, "scoreTeamA": 15, "scoreTeamB": 10 }
]