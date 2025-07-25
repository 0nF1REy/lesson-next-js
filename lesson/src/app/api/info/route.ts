import { NextResponse } from "next/server";

const profileData = {
  name: "Alan Ryan da Silva Domingues",
  age: 21,
  gender: "male",
  city: "Itapeva",
  state: "SP",
  country: "Brazil",
  occupations: [
    "Certified Nursing Assistant",
    "Certified Chemistry Technician",
    "Nursing Technician Student",
    "Systems Development Student",
  ],
  languages: ["Portuguese", "English"],
  education: {
    elementarySchool: {
      school: "Prof. Hélio de Morais Municipal School",
      period: "2010–2014",
      notes: "Positive experience with lasting friendships",
    },
    highSchool: {
      school: "Prof. Zulmira de Oliveira State School",
      period: "2015–2021",
    },
    technicalCourses: [
      { name: "Nursing Assistant", status: "graduated" },
      { name: "Chemistry Technician", status: "graduated" },
      { name: "Nursing Technician", status: "in progress" },
      { name: "Systems Development Technician", status: "in progress" },
    ],
  },
  interests: [
    "Health",
    "Technology",
    "Programming",
    "Music",
    "Music Production",
    "Reading",
  ],
  music: {
    favoriteArtists: [
      "Suzi Quatro",
      "Joan Jett",
      "Rita Lee",
      "AC/DC",
      "The Beatles",
      "Led Zeppelin",
    ],
    softwareUsed: ["FL Studio"],
    projectYears: ["2021", "2022"],
  },
  favoriteBooks: ["Works of Machado de Assis", "Dialogues of Plato"],
  personalityTraits: [
    "Introverted",
    "Critical",
    "Attentive",
    "Observant",
    "Enjoys studying",
    "Physically active",
    "Dislikes noise",
  ],
  socialLinks: {
    github: "https://github.com/0nF1REy",
    gitlab: "https://gitlab.com/alanryan619",
    linkedin: "https://www.linkedin.com/in/alan-ryan-b115ba228/",
    youtube: "https://youtube.com/@0nF1REy",
    rateYourMusic: "https://rateyourmusic.com/~0nF1REy",
    myAnimeList: "https://myanimelist.net/profile/0nF1REy",
  },
  certificates: [
    {
      name: "Introduction to Front End Development",
      issueDate: "2025-07-15",
      certificateCode: "8626969",
      provider: "simpl-learn-skillup",
      durationHours: 12,
      holder: "Alan R. Silva Domingues",
    },
    {
      name: "JavaScript for Beginners",
      issueDate: "2025-07-13",
      certificateCode: "8617091",
      provider: "simpl-learn-skillup",
      durationHours: 5,
      holder: "Alan R. Silva Domingues",
    },
    {
      name: "Java Programming for Beginners",
      issueDate: "2025-07-12",
      certificateCode: "8616127",
      provider: "simpl-learn-skillup",
      durationHours: 4,
      holder: "Alan R. Silva Domingues",
    },
    {
      name: "Introduction to Object-Oriented Programming (OOP)",
      originalTitle: "Introdução à Programação Orientada a Objetos (POO)",
      holder: "Alan Ryan da Silva Domingues",
      startDate: "2025-07-02",
      endDate: "2025-07-05",
      durationHours: 5,
      authenticityCode: "8C3EFC5E-5DC5-473D-8930-2E68A4050C65",
      issuerLocation: "Osasco",
      issuerDate: "2025-07-05",
      issuerSignature: "Alan Ryan da Silva Domingues",
      authenticationPortal: "EV portal (QR Code available)",
    },
    {
      name: "Cloud DevOps Immersion",
      originalTitle: "Imersão Cloud DevOps",
      holder: "Alan Ryan Da Silva Domingues",
      completionDate: "2025-07-14",
      durationHours: 2,
      issuerRole: "Chief Vision Officer",
      issuerName: "Alan Ryan Da Silva Domingues",
      certificateType: "Participation Certificate",
    },
  ],
};

export async function GET() {
  return NextResponse.json(profileData, { status: 200 });
}
