const ProcessStep = ({ number, title, description, isActive = false }) => {
  return (
    <div className={`flex items-center gap-6 transition-all duration-300 ${isActive ? "scale-105" : ""}`}>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
          isActive ? "bg-yellow-600 text-white shadow-lg" : "bg-gray-800 text-white"
        }`}
      >
        {/* randering the number here */}
        {number}
      </div>
      <div className="text-left">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ProcessStep