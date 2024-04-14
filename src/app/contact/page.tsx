import CtaSocials from "@/components/cta-socials/CtaSocials";
import { TalkReadyPerks } from "@/constants";
import Image from "next/image";

const page = () => {
    return (
        <main>
            <CtaSocials />

            <section id="bailey" className="mb-24 py-5">
                <h2 className="mb-8 text-center text-3xl font-semibold">
                    Meet our Lead Teacher!
                </h2>
                <div className="mx-auto grid w-[90%] max-w-[1200px] grid-flow-row grid-cols-1 gap-x-8 sm:grid-cols-2">
                    <div className="col-span-1">
                        <Image
                            src="/Bailey-headshot.jpg"
                            alt="teacher bailey headshot"
                            width={3600}
                            height={3600}
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="col-span-1 pt-6 sm:pt-16">
                        <h3 className="mb-3 text-3xl font-semibold">
                            Ms. Bailey Alexander
                        </h3>
                        <p className="text-lg">
                            Bailey is a native English speaking TESOL certified
                            teacher who has been teaching for five years. She
                            has a bachelors degree in linguistics and absolutely
                            loves helping students reach their language goals.
                        </p>
                    </div>
                </div>
            </section>

            <section id="perks" className="py-5 sm:mb-5">
                <h2 className="mx-auto mb-24 max-w-[800px] text-center text-3xl font-semibold sm:mb-12">
                    Explore perks tailored exclusively for our members, found
                    nowhere else.
                </h2>
                <div className="mx-auto grid w-[90%] max-w-[1200px] grid-flow-row grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-y-36">
                    {TalkReadyPerks.map((perk, index) => (
                        <>
                            <div className="col-span-1">
                                <Image
                                    src={perk.img.src}
                                    alt={perk.img.alt}
                                    width={perk.img.width}
                                    height={perk.img.height}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="col-span-1 mb-16 pt-6 sm:mb-0 sm:pt-16">
                                <h3 className="mb-3 text-3xl font-semibold">
                                    {perk.title}
                                </h3>
                                <p className="text-lg">{perk.paragraphText}</p>
                            </div>
                        </>
                    ))}
                </div>
            </section>

            <CtaSocials />
        </main>
    );
};

export default page;
