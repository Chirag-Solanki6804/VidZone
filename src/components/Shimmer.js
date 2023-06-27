const Shimmer = () => {
  return <div></div>;
};

const ShimmerCard = () => {
  return <div className="w-96 h-80 bg-slate-200"></div>;
};

export const ShimmerCards = () => {
  return (
    <div className="flex gap-4 my-6 flex-wrap ml-14">
      {new Array(12).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
};
