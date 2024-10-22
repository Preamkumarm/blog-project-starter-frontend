import P1 from "../src/assets/p1.jpg"
import P2 from "../src/assets/lunch.png"
import P3 from "../src/assets/skin.webp"
import pic1 from "../src/assets/pic1.jpg"
import farm from "../src/assets/farm.webp"
import f from "../src/assets/f.jpg"
import pic2 from "../src/assets/pic1.png"
import pic5 from "../src/assets/pic5.jpg"
import pic6 from "../src/assets/pic6.webp"

export const  portfolio = [
    {
        title: "Todo List",
        stack: "Full Stack MERN",
        image: P1,
        category: ['all', 'Java EE', 'Spring boot', 'Spring Security', 'ReactJS', 'PostgreSQL', 'Git'],
        description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
        link: 'https://miolapfe.herokuapp.com ',
    },
    {
        title: "Lunch Mate",
        stack: "Full Stack MERN",
        image: P2,
        category: ['all', 'ReactJS'],
        description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
        link: 'https://github.com/ilyasstrh/React_Portfolio',
    },
    {
        title: 'Dermalyze',
        stack: "Python, ReactJS & ML",
        image: P3,
        category: ['all', 'Java', 'JavaFX', 'Maven', 'Git'],
        description: "The main purpose of our application is to allow users to minimize travel time to restaurants and enjoy their home food in a short time by viewing the progress of their order, thus facilitating the task of order management for restaurants, thus offering an optimal path for deliveries, with several IoT-based functionalities.",
        link: 'https://github.com/ilyasstrh/FOOD_SYSTEM',
    },
    {
        title: 'Car service Booking',
        stack: "Full Stack MERN",
        image: pic1,
        category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
        description: "A mobile application that facilitates making appointments and monitoring patients",
        link: 'https://github.com/ilyasstrh/Health_Care_App',
    },
    {
        title: 'Farm Connect',
        stack: "ReactJS",
        image: farm,
        category: ['all', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mongoose', 'UI/UX'],
        description: "An online car rental and management platform",
        link: 'https://github.com/ilyasstrh/OnlineStore',
    },
    {
        title: 'Femi-products',
        stack: "Full Stack MERN",
        image: f,
        category: ['all', 'PHP', 'Javascript', 'HTML', 'CSS', 'MySQL'],
        description: "An online car rental and management platform",
    },
]; 

export const herobg=[{
    id:1,
    imageSrc:pic2
},
{
    id:2,
    imageSrc:pic5
}
,
{
    id:3,
    imageSrc:pic6
}]