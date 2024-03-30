export default interface Course {
    id: string;
    name: string;
    summary: string;
    rating: number;
    ratingsCount: number;
    studentCount: number;
    createdBy: string;
    preview: {format: "video" | "image"; url: string};
    learn: string[];
}
