import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery Skeleton */}
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-5 gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full rounded-md" />
              ))}
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Skeleton className="h-8 w-40" />

          <Skeleton className="h-px w-full" />

          <div className="space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="flex flex-wrap gap-3">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24 rounded-md" />
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-32 rounded-md" />
                ))}
            </div>
            <Skeleton className="h-32 w-full rounded-md" />
          </div>

          <div className="flex gap-4 mt-8">
            <Skeleton className="h-12 flex-1 rounded-md" />
            <Skeleton className="h-12 flex-1 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
