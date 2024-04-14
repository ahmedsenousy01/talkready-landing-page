import { KidsCourseImg, WomenCourseImg, WhyChooseTalkReady1, WhyChooseTalkReady2, WhyChooseTalkReady3, PriceTagEuro, AdultsCourseImg, Books, TalkReadyPerks2 } from "./images";
export const Courses = [
    {
        id: 1,
        title: "20 premium SAT English reading and writing preparation classes",
        imgSrc: null,
        price: "€306",
        hasDiscount: true,
        available: false,
        priceAfterDiscount: "€139"
    },
    {
        id: 2,
        title: "Adults English Course 2 Session per week",
        imgSrc: AdultsCourseImg,
        price: "$110",
        hasDiscount: true,
        available: true,
        priceAfterDiscount: "From $59.99",
        description: "Refine your English skills to an expert level with our Advanced English Language Proficiency course. Led by certified native speakers, this immersive program focuses on fluency, accuracy, and cultural nuances. Through interactive sessions, practical exercises, and personalized learning plans, participants will gain the expertise and confidence to excel in diverse contexts, whether in business, academia, or social interactions.",
        keyFeatures: ["Interactive sessions led by certified native English speakers.", "Comprehensive coverage of advanced grammar, vocabulary, and pronunciation."
            , "Practical exercises and simulations to develop fluency and confidence.", "Emphasis on cultural understanding and effective communication in diverse contexts.", "Customized learning plans to suit individual goals and learning styles."]
    },
    {
        id: 3,
        title: "Kids English Course 2 Session per week",
        imgSrc: KidsCourseImg,
        price: "$110",
        hasDiscount: true,
        available: true,
        priceAfterDiscount: "From $59.99",
        description: "Welcome to our Fun and Engaging English for Kids course, where children embark on an exciting journey to learn English in a dynamic and supportive environment. Led by certified native English-speaking instructors, this course is specially designed to ignite children's curiosity and enthusiasm for language learning.",
        keyFeatures: ["Interactive lessons led by certified native English-speaking instructors.", "Engaging activities and games to make learning fun and memorable.", "Focus on building essential language skills: listening, speaking, reading, and writing.", "Creative projects and storytelling to encourage imagination and expression.", "Supportive environment where children feel encouraged to participate and learn.", "Regular progress assessments and feedback to track development and celebrate achievements."]
    },
    {
        id: 4,
        title: "Placement Test",
        imgSrc: null,
        price: "€8",
        hasDiscount: false,
        available: false,
        priceAfterDiscount: null
    },
    {
        id: 5,
        title: "Women-Only English Course 2 Session per week",
        imgSrc: WomenCourseImg,
        price: "€94",
        hasDiscount: true,
        available: false,
        priceAfterDiscount: "From €51"
    },
];

export const WhyChooseTalkReady = [
    {
        title: "Expertise and Customized Learning",
        description: "Elevate your language learning with TalkReady. Our certified instructors bring expert knowledge to the table, ensuring tailored education that fits your unique requirements. Whether you're an adult aiming for professional growth, a parent looking for the best for your child, or seeking a woman-only course, we've got you covered. With TalkReady, you're not just learning English, you're experiencing a supportive environment that nurtures your individual journey.",
        imgSrc: WhyChooseTalkReady1,
    },
    {
        title: "Engaging and Flexible Approach",
        description: "Experience language learning like never before with TalkReady. Our courses are designed to be interactive and enjoyable, encouraging participation and real-world application. With our online platform, you have the convenience to learn at own pace and from any location. Engage in dynamic activities, connect with fellow learners, and immerse yourself in an enriching community that makes learning coth fun and effective.",
        imgSrc: WhyChooseTalkReady2,
    },
    {
        title: "Empowerment Beyond Language",
        description: "Opting for TalkReady means gaining more than language skills - it's all about empowerment. English proficiency open doors to global communication, career advancements, and unforgettable experiences. Our commitment extends to your personal growth, building confidence that transcends linguistic boundaries. Join TalkReady today and embark on a journey that not only enhance your language abilities but also empowers you for a brighter future. Your journey to fluency begins here.",
        imgSrc: WhyChooseTalkReady3,
    },
];

export const TalkReadyPerks = [
    {
        title: "An enriching curriculum tailored for success",
        paragraphText: `Our exceptional curriculum is seamlessly integrated
        into our classes, ensuring students derive maximum
        benefit. Immense yourself in a learning experience
        designed for success, and watch as your skills
        flourish with TalkReady.`,
        img: {
            src: Books,
            width: 1000,
            height: 750,
            alt: "TalkReady books"
        }
    },
    {
        title: "Exclusive classes with an average of just 2 students",
        paragraphText: `With an average of just two students, TalkReady
        guarantees an intimate and personalized learning
        environment, fostering optimal engagement, and
        accelerated progress.`,
        img: {
            src: TalkReadyPerks2,
            width: 1000,
            height: 750,
            alt: "TalkReady books"
        }
    },
    {
        title: "Learn affordably, excel endlessly.",
        paragraphText: `At TalkReady, we prioritize affordability without
        compromising quality. Our commitment is to provide
        exceptional English language courses at a price that
        ensures accessibility for all, without sacrificing
        the excellence of our curriculum or the the
        personalized attention offered in our small classes.
        We believe that learning should be enriching,
        effective, and within reach for everyone.`,
        img: {
            src: PriceTagEuro,
            width: 1000,
            height: 1000,
            alt: "Price Tag in euros"
        }
    },
]