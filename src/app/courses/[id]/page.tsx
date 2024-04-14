import { Courses } from "@/constants";
import Image from "next/image";

export const revalidate = 0;

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const course = Courses[parseInt(id) - 1];

    console.log(course);

    return (
        <div className={"min-h-screen"}>
            <section
                title="First Impression"
                className={"min-h-[50vh] bg-slate-800 pt-1 text-white lg:px-10"}
            >
                <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 py-8 lg:mt-16 lg:flex-row">
                    <div className="mx-auto w-[90%] sm:w-[60%]">
                        <div>
                            <h1
                                className={"mb-5 text-2xl font-bold text-white"}
                            >
                                {course.title}
                            </h1>
                            <p className="mb-5 text-lg">{course.description}</p>
                        </div>
                    </div>
                    <div className="order-first flex-1 sm:order-none sm:w-[30%]">
                        <Image
                            className="mt-12 w-full sm:mt-0"
                            height={720}
                            width={1360}
                            src={course.imgSrc!}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section
                title="course-content"
                className="mx-auto w-[90%] max-w-[1200px] py-10"
            >
                <div className="w-full border-2 border-gray-300 p-5 lg:w-1/2">
                    <h2 className="mb-4 text-xl font-bold text-neutral-800">
                        What you&apos;ll learn
                    </h2>
                    <ul className="grid list-disc grid-flow-row grid-cols-2 gap-3 text-sm text-gray-700">
                        {course.keyFeatures?.map((item, i) => (
                            <li className="ms-3" key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default page;
