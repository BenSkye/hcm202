import Timeline from "@/components/Timeline"

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Hành trình cứu nước của Chủ tịch Hồ Chí Minh</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Hành trình tìm đường cứu nước của Nguyễn Tất Thành (Nguyễn Ái Quốc, Hồ Chí Minh) là một quá trình sáng tạo và vĩ
        đại, mở ra con đường cho sự giải phóng dân tộc Việt Nam. Hành trình này mang lại những bài học quý giá về tinh
        thần trách nhiệm, sự học hỏi, lao động và sáng tạo, đồng thời thể hiện tình yêu quê hương đất nước sâu sắc.
      </p>
      <Timeline />
    </div>
  )
}

