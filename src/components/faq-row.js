function FaqRow({ toggleFAQ, index, item, activeIndex }) {
  return (
    <div>
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={() => {
          toggleFAQ(index);
        }}
      >
        <span className="sm:text-lg text-sm">{item.question}</span>
        {/* Display an up or down arrow based on whether the FAQ item is active */}
        <span className="text-2xl">{activeIndex === index ? "˄" : "˅"}</span>
      </button>
      {activeIndex === index && (
        <div className="px-4 pb-4">
          <p className="text-gray-700 sm:text-lg text-sm">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqRow;
