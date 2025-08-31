function NavPage() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-8 mx-4 md:mx-32 gap-4 md:gap-0">
      {/* Left: Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Admin
      </h1>

      {/* Right: Profile */}
      <ul className="flex items-center gap-4 md:gap-8">
        {/* Image */}
        <li>
          <img
            src="./src/assets/marketthrive.jpg"
            alt="company logo"
            className="w-15 h-15 rounded-full border-2 border-gray-300"
          />
        </li>

        {/* Name */}
        <li className="text-lg md:text-xl font-medium text-gray-700">
          Nikhil Tiwari
        </li>
      </ul>
    </div>
  );
}

export default NavPage;
