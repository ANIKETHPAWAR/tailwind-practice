export const Input = ({
    
    onClick,
    type,
    placeholder
})=> {
return <span onClick={onClick} className={`px-4 py-2  text-white cursor-pointer bg-blue-400 `} ><input type={type} placeholder={placeholder} className="outline-none bg-blue-400" ></input> </span>
}