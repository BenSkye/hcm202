import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const JourneyMap = () => {
    const [selectedMap, setSelectedMap] = useState<1 | 2>(1);

    const maps = [
        {
            id: 1,
            src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fbando30nampart1.png?alt=media&token=40587062-a9af-4761-a97b-1f3cc26e8d15",
        },
        {
            id: 2,
            src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fbando30nampart2.png?alt=media&token=7a34d4db-3465-4ab8-a568-b17bd1f36161",
        }
    ];

    return (
        <div className="w-full">
            <div className="flex justify-center gap-3 mb-4">
                {[1, 2].map((mapId) => (
                    <button
                        key={mapId}
                        onClick={() => setSelectedMap(mapId as 1 | 2)}
                        className={`px-4 py-1.5 rounded-[4px] text-base font-medium transition-all duration-300 ${selectedMap === mapId
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        {mapId === 1 ? (<>Từ 1911-1930</>) : (<>Từ 1930-1941</>)}
                    </button>
                ))}
            </div>

            <div className="w-full overflow-hidden ">
                <AnimatePresence mode="wait">
                    {maps.map((map) => (
                        map.id === selectedMap && (
                            <motion.div
                                key={map.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full aspect-[2/1]"
                            >
                                <Image
                                    src={map.src}
                                    alt={`Bản đồ hành trình phần ${map.id}`}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default JourneyMap;