'use client'

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from 'next/image'

const milestones = [
    {
        date: "5-6-1911",
        event: "Nguyễn Tất Thành lên tàu Amiral Latouche Tréville tại Bến cảng Nhà Rồng, Sài Gòn.",
        details:
            "Đây là bước đi quyết định, đánh dấu sự khởi đầu của hành trình 30 năm tìm kiếm con đường cứu nước. Ông mang theo hoài bão mãnh liệt về tự do và độc lập cho dân tộc.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F5-6-1911.jpg?alt=media&token=6234a1d0-e178-4862-a4a5-fea21b095db5",
    },
    {
        date: "1911-1920",
        event: "Nguyễn Tất Thành đi qua nhiều quốc gia và châu lục.",
        details:
            "Ông đã làm nhiều nghề như phụ bếp, cào tuyết, làm vườn, và vẽ thuê. Qua những trải nghiệm này, ông nhận thấy sự tàn bạo của thực dân và sự khai thác, bóc lột mà người lao động phải chịu đựng, từ đó hình thành nhận thức về sự cần thiết phải đoàn kết đấu tranh chống lại áp bức.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1911-1920.jpg?alt=media&token=a7e2e99c-0bd3-48d7-8778-eb68d8999571",
    },
    {
        date: "1917",
        event: "Cách mạng Tháng Mười Nga diễn ra.",
        details:
            "Sự kiện này tạo ảnh hưởng sâu sắc đến tư tưởng của Nguyễn Tất Thành. Ông nhận thấy rằng lực lượng cách mạng cần thiết phải có tổ chức để thực hiện sứ mệnh giải phóng dân tộc. Vào đầu năm 1919, ông gia nhập Đảng xã hội Pháp, nơi ông bắt đầu tham gia vào các hoạt động chính trị.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1917.jpeg?alt=media&token=eed6c0b7-4506-4725-8fcd-6943608a0c31",

    },
    {
        date: "18-6-1919",
        event: "Nguyễn Ái Quốc gửi bản yêu sách tới Hội nghị Vécxây.",
        details:
            "Bản yêu sách gồm 8 điểm yêu cầu quyền tự do, dân chủ và bình đẳng cho nhân dân An Nam. Trong đó có yêu cầu về quyền tự quyết cho các dân tộc thuộc địa. Bản yêu sách không được chấp nhận nhưng đã gây tiếng vang lớn, thức tỉnh tinh thần đấu tranh trong các nước thuộc địa.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1919.jpg?alt=media&token=511c6fe4-e956-469c-9c17-56fea40aa507",

    },
    {
        date: "Tháng 7-1920",
        event: "Nguyễn Ái Quốc quyết định gia nhập Quốc tế III.",
        details:
            "Sau khi đọc 'Sơ thảo lần thứ nhất luận cương về các vấn đề dân tộc và thuộc địa' của Lênin, Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc mà mình đã tìm kiếm. Đây là bước ngoặt trong sự nghiệp cách mạng, kết hợp đấu tranh giai cấp với đấu tranh dân tộc.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F7-1920.jpg?alt=media&token=09a7130f-ecb9-4c23-8646-edd9c5f2d262",
    },
    {
        date: "1924",
        event: "Nguyễn Ái Quốc trở về Quảng Châu, Trung Quốc.",
        details:
            "Tại đây, ông bắt đầu xây dựng những nhân tố cần thiết cho cách mạng Việt Nam, bao gồm việc vận động quần chúng, phát động phong trào yêu nước và truyền bá tư tưởng Mác - Lênin. Ông cũng xuất bản nhiều tác phẩm, trong đó có 'Bản án chế độ thực dân Pháp' và 'Đường Kách mệnh'.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1924.jpg?alt=media&token=2db92e76-4773-46b6-a491-61104fb9bdde",
    },
    {
        date: "3-2-1930",
        event: "Thành lập Đảng Cộng sản Việt Nam.",
        details:
            "Tại Hương Cảng, dưới sự chủ trì của Nguyễn Ái Quốc, hội nghị hợp nhất 3 tổ chức cộng sản đã diễn ra, dẫn đến việc thành lập Đảng Cộng sản Việt Nam. Sự kiện này khẳng định tầm nhìn chiến lược của ông trong việc xây dựng một lực lượng lãnh đạo cách mạng mạnh mẽ.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1930.jpg?alt=media&token=31f592a6-d265-4d92-9d22-2b9374606eb8",

    },
    {
        date: "28-1-1941",
        event: "Nguyễn Ái Quốc trở về Tổ quốc tại Pác Bó, Cao Bằng.",
        details:
            "Sau 30 năm bôn ba, ông quyết định lãnh đạo trực tiếp cách mạng Việt Nam, đánh dấu một giai đoạn mới trong sự nghiệp của mình. Sự trở về này không chỉ mang ý nghĩa cá nhân mà còn là sự khởi đầu cho phong trào đấu tranh giành độc lập.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F1941.jpg?alt=media&token=647cd5ea-9e04-4feb-87b4-5f47f985d821",

    },
    {
        date: "Tháng 5-1941",
        event: "Thành lập Mặt trận Việt Minh.",
        details:
            "Tại Hội nghị Trung ương VIII của Đảng, Nguyễn Ái Quốc đã nhấn mạnh tầm quan trọng của nhiệm vụ giải phóng dân tộc và quyết định thành lập Mặt trận Việt Minh. Ông khẳng định rằng quyền lợi của dân tộc phải được đặt lên hàng đầu, nhằm tập hợp mọi tầng lớp nhân dân trong cuộc đấu tranh giành độc lập.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F5-1941.jpg?alt=media&token=b416145d-2024-458d-a77d-10902e56b601",
    },
    {
        date: "Tháng 8-1945",
        event: "Cách mạng Tháng Tám thành công.",
        details:
            "Cách mạng Tháng Tám diễn ra thành công, nhân dân Việt Nam lật đổ chế độ thực dân và phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa. Đây là một bước ngoặt vĩ đại trong lịch sử dân tộc, đánh dấu sự khởi đầu của thời đại của Bác, mở ra một chương mới cho sự phát triển của Việt Nam.",
        image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2F8-1945.jpg?alt=media&token=47b16f22-6e80-47dd-b81c-63bded8a245c",
    },
]

const Timeline: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary">
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Nghe bản Tuyên ngôn độc lập</h2>
                    <audio controls className="mx-auto w-full max-w-md">
                        <source src="https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Ftuyenngondoclap.mp3?alt=media&token=5ae6b72f-dfdd-4a02-9405-2c5845c8883d" type="audio/mp3" />
                        Trình duyệt của bạn không hỗ trợ thẻ âm thanh.
                    </audio>
                </motion.div>
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        className="mb-10 ml-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white">
                            <svg
                                className="w-2.5 h-2.5 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-primary">{milestone.date}</h3>
                        <p className="mb-2 text-base font-normal text-gray-700">{milestone.event}</p>

                        {/* Hiển thị hình ảnh nếu có */}
                        {milestone.image && (
                            <Image
                                src={milestone.image}
                                alt={milestone.event}
                                className="w-full max-w-md mb-4 rounded-lg shadow-md"
                                loading='lazy'
                                width={100}
                                height={100}
                            />
                        )}

                        <button
                            onClick={() => toggleExpand(index)}
                            className="flex items-center text-sm text-primary hover:underline focus:outline-none"
                        >
                            {expandedIndex === index ? (
                                <>
                                    Thu gọn <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    Xem thêm <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 text-sm text-gray-600"
                                >
                                    {milestone.details}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Timeline

