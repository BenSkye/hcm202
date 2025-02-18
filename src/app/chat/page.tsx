import AIChat from "@/components/AIChat"

export default function ChatPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Hỏi đáp AI về Chủ tịch Hồ Chí Minh</h1>
      <AIChat />
    </div>
  )
}

