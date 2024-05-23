function PerfumeShowcaseCard({ index, perfume }) {
  return (
    <div className="relative flex justify-center mb-20">
      <div key={index} className="bg-white shadow-md overflow-hidden">
        <img
          src={perfume.imageUrl}
          alt={perfume.name}
          className="w-full object-cover"
        />
      </div>
      <div className="p-6 shadow-md absolute sm:top-[78%] top-[65%] sm:w-3/4 w-11/12 bg-white">
        <h3 className="sm:text-2xl text-xl font-bold mb-2">{perfume.name}</h3>
        <p className="text-gray-600 mb-4 sm:text-base text-xs">
          {perfume.description}
        </p>
        <button className="bg-black text-white sm:text-base text-xs py-2 px-4 rounded">
          {perfume.buttonText}
        </button>
      </div>
    </div>
  );
}

export default PerfumeShowcaseCard;
