export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
        Welcome to React Lesson Homepage
      </h1>
      <div className="flex gap-4 mt-4">
        <span className="text-3xl animate-bounce">🚀</span>
        <span className="text-3xl animate-bounce delay-100">⚛️</span>
        <span className="text-3xl animate-bounce delay-200">💻</span>
      </div>
    </div>
  );
}
