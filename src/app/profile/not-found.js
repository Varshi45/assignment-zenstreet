export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <h1 className="text-2xl font-bold text-red-600">Profile Not Found</h1>
      <p className="text-gray-600 mt-2">
        The profile you are looking for does not exist.
      </p>
    </div>
  );
}
