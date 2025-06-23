import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const TestimonialCard = ({ rating = 5, testimonial, author }) => {
  return (
    <Card className="bg-gray-700 border-0 text-white hover:bg-gray-600 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="mb-4 italic">"{testimonial}"</p>
        <p className="font-medium">- {author}</p>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
