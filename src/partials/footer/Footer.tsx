import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-950 p-5 text-white">
            <p className="mb-5 text-center text-lg">Quick Links</p>
            <div className="mb-6 block items-center justify-center gap-x-3 sm:flex">
                <Link href="/" className="mb-2 block text-center sm:mb-0">
                    Search
                </Link>
                <Link href="/" className="mb-2 block text-center sm:mb-0">
                    Privacy Policy
                </Link>
                <Link href="/" className="mb-2 block text-center sm:mb-0">
                    Refund Policy
                </Link>
                <Link href="/" className="mb-2 block text-center sm:mb-0">
                    Terms of Service
                </Link>
                <Link href="/" className="mb-2 block text-center sm:mb-0">
                    Do not sell or share my personal information
                </Link>
            </div>
            <hr className="mx-auto mb-5 w-[90%] max-w-[1200px]" />
            <p className="text-center">© 2024, TalkReady LTD</p>
        </footer>
    );
};

export default Footer;
