function PerfumeCard({ index, imageUrl, name, priceRange }) {
  return (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
    >
      <img src={imageUrl} alt={name} className="w-full object-contain mb-4" />
      <h3 className="text-lg font-medium text-center">{name}</h3>
      <p className="text-center mt-2">{priceRange}</p>
    </div>
  );
}
export default PerfumeCard;
