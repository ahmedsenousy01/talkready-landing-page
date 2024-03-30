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
                className={"min-h-[50vh] bg-slate-800 pt-1 text-white lg:px-10"}
            >
                <div className="lg:mt-16 mx-auto flex max-w-[1200px] flex-col items-center py-8 lg:flex-row gap-10">
                    <div className="mx-auto w-[90%] lg:w-[60%]">
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
                    <div className="order-first flex-1 lg:order-none lg:w-[30%]">
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
            <section
                title="course-content"
                className="mx-auto w-[90%] max-w-[1200px] py-10"
            >
                <div
                    className="border-2 border-gray-300 p-5 w-full lg:w-1/2"
                >
                    <h2 className="text-xl font-bold text-neutral-800 mb-4">
                        What you&apos;ll learn
                    </h2>
                    <ul
                        className="grid grid-flow-row grid-cols-2 gap-3 text-gray-700 text-sm list-disc"
                    >
                        {course.learn.map((item, i) => <li className="ms-3" key={i}>{item}</li>)}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default page;
