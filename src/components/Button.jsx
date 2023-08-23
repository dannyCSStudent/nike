

const Button = ({ label, iconURL, backGroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backGroundColor ? `${backGroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"} rounded-full w-full"}`}>
        {label}
        {iconURL && <img 
            src={iconURL}
            alt="Icon"
            className="ml-2 rounded-full w-5 h-5"
        />}
        
    </button>
  )
}

export default Button