// components/Collections.js
import Image from 'next/image';

const Collections = () => {
    const categories = [
        {
            href: '/categories/25324/preface-academy',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/PA_1724902697374.jpg',
            title: 'PREFACE ACADEMY'
        },
        {
            href: '/categories/25325/pcl',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/PCL_1724902579422.jpg',
            title: 'PCL'
        },
        {
            href: '/categories/25326/summerlove-delight',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/SD_1724903528394.jpg',
            title: 'Summerlove Delight'
        },
        {
            href: '/categories/25327/speed-hunters',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/SH_1724902800774.jpg',
            title: 'Speed Hunters'
        },
        {
            href: '/categories/25328/rollin-tunes',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/RT_1724903334353.jpg',
            title: 'Rollin Tunes'
        },
        {
            href: '/categories/25329/genesis',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/GNS_1724903160190.jpg',
            title: 'Genesis'
        },
        {
            href: '/categories/25330/uncharted',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/UNC_1724903619532.jpg',
            title: 'Uncharted'
        },
        {
            href: '/categories/25331/stardust',
            src: 'https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/SD_1724903198010.jpg',
            title: 'Stardust'
        }
    ];

    return (
        <div className="bg-[#F9F9F9]">
            <div className="max-w-6xl mx-auto p-5">
                <h1 className="text-center text-2xl font-bold mb-8">Koleksi</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <a key={index} href={category.href} className="group block relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                            <Image
                                src={category.src}
                                alt={category.title}
                                layout="responsive"
                                width={2000}
                                height={2000}
                                className="object-cover w-full h-48 transition-transform duration-200 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-white text-lg font-semibold">{category.title}</h2>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collections;
