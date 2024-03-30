import get_course from "@/api/get_course";
import Stars from "@/components/stars/Stars";
import Image from "next/image";

export const revalidate = 0;

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const course = await get_course(id);

    console.log(course);

    return (
        <div className={"min-h-screen"}>
            <section
                title="First Impression"
                className={"min-h-[50vh] bg-slate-800 pt-1 text-white md:px-10"}
            >
                <div className="md:mt-16 mx-auto flex max-w-[1200px] flex-col items-center py-8 md:flex-row gap-10">
                    <div className="mx-auto w-[90%] md:w-[60%]">
                        <div>
                            <h1
                                className={"mb-5 text-2xl font-bold text-white"}
                            >
                                {course.name}
                            </h1>
                            <p className="mb-5 text-lg">{course.summary}</p>
                            <div className="mb-3">
                                <div
                                    className={
                                        "me-4 inline-flex gap-1 text-yellow-500"
                                    }
                                >
                                    {course.rating}
                                    <Stars rating={course.rating} />
                                    <span className={"text-gray-400"}>
                                        ({course.ratingsCount?.toLocaleString()}{" "}
                                        ratings)
                                    </span>
                                </div>
                                <span>
                                    {course.studentCount.toLocaleString()}{" "}
                                    students
                                </span>
                            </div>
                            <div>Created by: {course.createdBy}</div>
                        </div>
                    </div>
                    <div className="order-first flex-1 md:order-none md:w-[30%]">
                        {course.preview.format === "image" ? (
                            <Image
                                height={720}
                                width={1360}
                                src={course.preview.url}
                                alt=""
                            />
                        ) : (
                            <video src={course.preview.url}></video>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
