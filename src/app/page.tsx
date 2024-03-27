import Image from "next/image";
import clsx from "clsx";

import { Courses, WhyChooseTalkReady } from "@/constants";

export default function Home() {
    return (
        <main>
            <div className="mb-5 h-screen bg-[url('../../public/home-page-hero-section.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="flex size-full items-center justify-center bg-[rgba(0,0,0,0.25)]">
                    <div className="max-w-[90%] rounded-xl bg-[rgba(0,0,0,0.2)] p-10 text-center text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                        Learn English Online from Certified Native Experts
                    </div>
                </div>
            </div>

            <section
                id="our-courses"
                className="mx-auto mb-5 w-[90%] max-w-[1200px] py-8"
            >
                <h2 className="mb-2 text-3xl">Our Courses</h2>
                <p className="mb-10 text-lg sm:mb-5">
                    Select the Perfect Course for You and Begin the Learning
                    Journey Today!
                </p>
                <div className="grid grid-flow-row grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-5 md:grid-cols-3">
                    {Courses.map(
                        (course) =>
                            course.available && (
                                <div
                                    key={`course-${course.imgSrc}`}
                                    className="col-span-1"
                                >
                                    <div className="relative mb-2">
                                        <Image
                                            className="w-full"
                                            src={course.imgSrc}
                                            alt="test"
                                            width={280}
                                            height={280}
                                        />
                                        {course.hasDiscount && (
                                            <span className="absolute bottom-4 left-4 rounded-xl bg-blue-600 px-3 py-1 font-bold text-white">
                                                Sale
                                            </span>
                                        )}
                                    </div>
                                    <p className="mb-2">{course.title}</p>
                                    <span
                                        className={clsx("text-sm", {
                                            "mr-2 line-through":
                                                course.hasDiscount,
                                        })}
                                    >
                                        {course.price} GBP
                                    </span>
                                    {course.hasDiscount && (
                                        <span className="text-sm">
                                            {course.priceAfterDiscount} GBP
                                        </span>
                                    )}
                                </div>
                            ),
                    )}
                </div>
            </section>

            <section
                id="why-choose-talkready"
                className="mx-auto mb-10 w-[90%] max-w-[1200px] py-8"
            >
                <h2 className="mb-10 text-4xl sm:mb-8">
                    Why Choose TalkReady?
                </h2>
                <div className="grid grid-flow-row grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-5 md:grid-cols-3">
                    {WhyChooseTalkReady.map((post) => (
                        <div
                            key={`post-${post.imgSrc}`}
                            className="col-span-1 rounded-md bg-gray-200"
                        >
                            <div className="p-5">
                                <Image
                                    className="mb-6 w-full rounded-md"
                                    src={post.imgSrc}
                                    width={280}
                                    height={280}
                                    alt="post-image"
                                />
                                <h3 className="mb-1 text-lg font-bold text-gray-800">
                                    {post.title}
                                </h3>
                                <p>{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
