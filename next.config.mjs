import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/:all*(svg|jpg|png)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=9999999999, must-revalidate",
                    },
                ],
            },
        ];
    },
};
export default MillionLint.next({
    rsc: true,
})(nextConfig);
