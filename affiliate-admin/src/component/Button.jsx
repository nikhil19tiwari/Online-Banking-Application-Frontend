function Button({
  text = "Click Me",
  onClick,
  color = "bg-blue-500 hover:bg-blue-600",
  width = "w-32",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${width} 
        px-4 py-2 
        ${color} 
        text-white 
        rounded-xl 
        shadow-md 
        active:scale-95 
        transition 
        font-medium
      `}
    >
      {text}
    </button>
  );
}

export default Button;
