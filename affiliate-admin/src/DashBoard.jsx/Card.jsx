
function Card({ name = "Dashboard", count = "153", icon }) {
  return (
    <div className="relative border border-gray-300 rounded-lg w-80 h-40 p-4 shadow-sm">
      {/* Icon top-right */}
      <div className="absolute top-4 right-4 text-blue-500 text-2xl">
        {icon}
      </div>

      {/* Name and count */}
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-xl font-semibold ml-2">{name}</h2>
        <p className="text-2xl font-bold ml-2 mt-2">{count}</p>
      </div>
    </div>
  );
}

export default Card;
