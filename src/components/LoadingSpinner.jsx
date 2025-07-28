export default function LoadingSpinner({ size = 'medium' }) {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-8 w-8 border-2',
    large: 'h-12 w-12 border-4'
  };
  
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-solid border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent ${sizeClasses[size]}`}
      ></div>
    </div>
  );
}