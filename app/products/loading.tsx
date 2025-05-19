import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 mb-8">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-6 w-full max-w-3xl" />
        <Skeleton className="h-px w-full my-6" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Skeleton */}
        <div className="w-full lg:w-1/4">
          <div className="space-y-6">
            <Skeleton className="h-10 w-full" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-px w-full" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="space-y-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-full" />
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-full" />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
