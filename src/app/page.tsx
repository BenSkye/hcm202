'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import JourneyMap from '@/components/JourneyMap'

const images = [
  { src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fho-chi-minh-young.jpg?alt=media&token=2952ac78-6c32-4757-9fb4-129250720d05", alt: "Bác Hồ thời trẻ" },
  { src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fho-chi-minh-france.jpg?alt=media&token=d88d7c2b-4500-4762-bb01-eaf82b5818ef", alt: "Bác Hồ tại Pháp" },
  { src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fho-chi-minh-revolution.jpg?alt=media&token=cb9c5e98-9348-4ae7-9bc2-72947a829150", alt: "Bác Hồ trong thời kỳ cách mạng" },
  { src: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fho-chi-minh-independence.jpg?alt=media&token=3c027a56-1675-40a8-8197-22100ad100eb", alt: "Bác Hồ đọc tuyên ngôn độc lập" },
]

const testimonials = [
  {
    name: "Mahatma Gandhi",
    image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fgandhi.jpg?alt=media&token=18e3a57a-ddf9-4936-8e35-f981aa1f9b19",
    quote: "Hồ Chí Minh là một biểu tượng của lòng yêu nước và sự kiên định."
  },
  {
    name: "Fidel Castro",
    image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fcastro.jpg?alt=media&token=c90b8c79-899c-4c2e-9680-96c2ca2a37afg",
    quote: "Người đã chứng minh rằng một dân tộc nhỏ có thể đánh bại một đế quốc lớn."
  },
  {
    name: "Charles de Gaulle",
    image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fde-gaulle.jpg?alt=media&token=f92c49a7-0f4b-45f5-beba-c3fdb3f399b4",
    quote: "Ông ấy là một nhà lãnh đạo tài ba với tầm nhìn sâu rộng về độc lập dân tộc."
  },
  {
    name: "Che Guevara",
    image: "https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fche-guevara.jpg?alt=media&token=757cbaf3-defa-4a6b-8b07-933625ec48de",
    quote: "Tinh thần cách mạng của Hồ Chí Minh là nguồn cảm hứng bất tận."
  }
]


export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hành trình cứu nước của Chủ tịch Hồ Chí Minh
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fho-chi-minh.jpg?alt=media&token=703a1071-eace-4218-bd6c-7526f9ce4bdd"
            alt="Chủ tịch Hồ Chí Minh"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg mb-6">
            Chủ tịch Hồ Chí Minh là một trong những nhà lãnh đạo vĩ đại nhất của Việt Nam, người đã dành cả cuộc đời cho
            sự nghiệp giải phóng dân tộc và xây dựng đất nước. Hành trình cứu nước của Người kéo dài hơn 30 năm, trải
            qua nhiều khó khăn, thử thách và để lại những bài học quý giá cho các thế hệ sau.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/timeline"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Xem dòng thời gian
            </Link>
            <Link
              href="/chat"
              className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-secondary-dark transition-colors"
            >
              Hỏi đáp AI
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <JourneyMap />
      </motion.div>


      <motion.div
        className="mt-12 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Video tư liệu về cuộc đời của Chủ tịch Hồ Chí Minh</h2>
        <div className="max-w-[640px] mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/58HGVK6j-80"
              title="Video tư liệu về cuộc đời của Chủ tịch Hồ Chí Minh"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hình ảnh về hành trình cứu nước
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-64 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4">
              <p className="text-white text-center">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Các vĩ nhân đánh giá về Chủ tịch Hồ Chí Minh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                loading='lazy'
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 italic">{item.quote}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Khám phá thêm</h2>
        <p className="mb-6">
          Tìm hiểu sâu hơn về hành trình cứu nước của Chủ tịch Hồ Chí Minh qua dòng thời gian và tính năng hỏi đáp AI
          của chúng tôi.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/timeline"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Xem dòng thời gian
          </Link>
          <Link
            href="/chat"
            className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-secondary-dark transition-colors"
          >
            Hỏi đáp AI
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

