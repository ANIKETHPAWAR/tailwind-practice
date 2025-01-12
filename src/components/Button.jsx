export const Button = ({
    disabled,
    children,
    onClick
})=> {
return <span onClick={onClick} className={`px-32 py-text-white text-white cursor-pointer ${disabled ? "bg-blue-200" :"bg-green-400"}`}>{children}</span>
}