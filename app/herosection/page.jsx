import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('./food2.jpg')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl text-white pt-12">
                {/* Heading on a single line */}
                <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-wide mb-6 whitespace-nowrap">
                    <span className="text-white">Welcome to </span>
                    <span className="text-green-500">Culinary Hub</span>
                </h1>

                <p className="text-lg md:text-xl font-medium mb-10 text-white">
                    Learn to cook like a pro with our world-class instructors and hands-on training.
                </p>

                <Link
                    href="/transaction"
                    className="inline-block bg-green-600 px-8 py-3 uppercase tracking-widest font-semibold text-white text-sm md:text-base transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
                    style={{ borderRadius: '0px' }}
                >
                    Enroll Now
                </Link>
            </div>
        </section>
    );
}
