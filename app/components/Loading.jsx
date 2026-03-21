// components/GameSkeletonGrid.jsx

export default function GameSkeletonGrid({ count = 12 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden bg-slate-800 rounded-xl shadow-md"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Image Skeleton */}
          <div className="aspect-[4/3] bg-slate-500" />

          {/* Content */}
          <div className="p-3 space-y-2">
            {/* Title */}
            <div className="h-4 bg-slate-700 rounded w-3/4" />

            {/* Tags */}
            <div className="h-3 bg-slate-700 rounded w-full" />
            <div className="h-3 bg-slate-700 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}