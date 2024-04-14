import Link from "next/link";

const CtaSocials = () => {
    return (
        <section className="mx-auto mb-5 w-[90%] max-w-[1200px] py-8">
            <div className="mt-16">
                <h2 className="mb-4 text-center text-2xl font-semibold">
                    Start Your English Language Learning Today!
                </h2>
                <div className="mx-auto grid max-w-[900px] grid-flow-row grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-5 md:grid-cols-3">
                    <Link
                        className="col-span-1 flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 text-white"
                        target="_blank"
                        href="https://api.whatsapp.com/message/SHDYFZZJJVCAJ1?autoload=1&app_absent=0"
                    >
                        <div className="mx-auto flex w-[50%] items-center justify-center sm:w-[70%] sm:gap-1">
                            <div className="w-[20%]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#fff"
                                >
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold">
                                Whatsapp
                            </span>
                        </div>
                    </Link>
                    <Link
                        className="col-span-1 flex items-center gap-2 rounded-xl bg-blue-400 px-6 py-4 text-white"
                        target="_blank"
                        href="https://t.me/TalkReady"
                    >
                        <div className="mx-auto flex w-[50%] items-center justify-center sm:w-[70%] sm:gap-1">
                            <div className="w-[20%]">
                                <svg
                                    width="24px"
                                    height="24px"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        strokeLinejoin: "round",
                                        strokeMiterlimit: 1.41421,
                                    }}
                                    fill="#fff"
                                >
                                    <path
                                        id="telegram-1"
                                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold">
                                Telegram
                            </span>
                        </div>
                    </Link>
                    <Link
                        className="col-span-1 flex items-center gap-2 rounded-xl bg-red-500 px-6 py-4 text-white"
                        target="_blank"
                        href="mailto:talkreadyme@gmail.com"
                    >
                        <div className="mx-auto flex w-[50%] items-center justify-center sm:w-[70%] sm:gap-1">
                            <div className="w-[20%]">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                >
                                    <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold">Email</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSocials;
