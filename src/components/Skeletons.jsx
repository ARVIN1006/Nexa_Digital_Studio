export const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-slate-800 rounded-lg ${className}`}
  />
);

export const ShowcaseSkeleton = () => (
  <section className="py-24 bg-bg-surface dark:bg-slate-900 overflow-hidden">
    <div className="container mx-auto px-6 mb-16">
      <Skeleton className="h-4 w-32 mb-6 rounded-full" />
      <Skeleton className="h-12 w-64 md:w-96 mb-4" />
      <Skeleton className="h-6 w-full max-w-sm" />
    </div>
    <div className="container mx-auto px-6 flex gap-8 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[85vw] md:w-[380px] lg:w-[450px] flex-shrink-0"
        >
          <div className="h-[500px] md:h-[550px] rounded-[1.5rem] md:rounded-[2rem] border-2 border-gray-100 dark:border-white/5 overflow-hidden">
            <Skeleton className="h-[200px] md:h-[250px] rounded-none" />
            <div className="p-8 space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const BenefitsSkeleton = () => (
  <section className="py-24 bg-bg-surface dark:bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="mb-20 text-center md:text-left">
        <Skeleton className="h-5 w-40 mb-6 mx-auto md:mx-0 rounded-full" />
        <Skeleton className="h-16 w-64 md:w-[500px] mb-6 mx-auto md:mx-0" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto md:mx-0" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-slate-800/50"
          >
            <Skeleton className="w-14 h-14 rounded-xl mb-6" />
            <Skeleton className="h-7 w-1/2 mb-3" />
            <Skeleton className="h-16 w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PricingSkeleton = () => (
  <section className="py-24 bg-bg-surface dark:bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-5 w-48 mb-8 mx-auto rounded-full" />
        <Skeleton className="h-16 w-64 md:w-[500px] mb-6 mx-auto" />
      </div>
      <div className="flex justify-center mb-20">
        <Skeleton className="h-16 w-full max-w-xl rounded-[2rem]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-10 rounded-[2.5rem] border-2 border-gray-100 dark:border-white/5 bg-white dark:bg-slate-800/50 h-[600px]"
          >
            <Skeleton className="h-4 w-20 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-10" />
            <Skeleton className="h-12 w-full mb-10 rounded-2xl" />
            <div className="space-y-4 mb-10">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <Skeleton className="h-5 w-4/6" />
            </div>
            <Skeleton className="h-14 w-full rounded-2xl mt-auto" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSkeleton = () => (
  <section className="py-24 bg-bg-surface dark:bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <Skeleton className="h-5 w-40 mb-6 rounded-full" />
          <Skeleton className="h-12 w-64 mb-6" />
          <Skeleton className="h-20 w-full" />
        </div>
        <div className="lg:w-2/3 space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const HeroSkeleton = () => (
  <section className="relative min-h-screen pt-28 flex flex-col justify-center bg-white dark:bg-slate-900">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Skeleton className="h-6 w-48 rounded-full" />
        <div className="space-y-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-3/4" />
        </div>
        <Skeleton className="h-20 w-full max-w-lg" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>
      <div className="hidden md:block">
        <Skeleton className="h-[500px] w-full max-w-md ml-auto rounded-[3rem]" />
      </div>
    </div>
  </section>
);

export const ProcessSkeleton = () => (
  <section className="py-24 bg-white dark:bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
        <div className="max-w-2xl space-y-6">
          <Skeleton className="h-5 w-32 rounded-full" />
          <Skeleton className="h-16 w-full" />
        </div>
        <div className="max-w-md w-full space-y-4">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <div className="space-y-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex gap-8 items-center ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <Skeleton className="h-32 flex-1 rounded-3xl" />
            <Skeleton className="w-14 h-14 rounded-full" />
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-24 bg-gray-50 dark:bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <Skeleton className="h-6 w-40 rounded-full" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-2/3" />
          </div>
          <Skeleton className="h-24 w-full" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-6 w-64" />
          </div>
        </div>
        <Skeleton className="h-[400px] w-full rounded-[2.5rem]" />
      </div>
    </div>
  </section>
);
