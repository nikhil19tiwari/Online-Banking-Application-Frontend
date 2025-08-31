function Input({ name ,id,type="text",placeholder = "Enter text...", handleInputChange ,value}) {
  return (

      <input
      name = {name}
      id = {id}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        value = {value}
        className="
          w-72 px-4 py-2 
          border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          shadow-sm
          text-gray-700
          placeholder-gray-400
          transition
        "
      />
   
  );
}

export default Input;
