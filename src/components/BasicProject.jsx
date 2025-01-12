export function SidebarClass1(){
    return <div className="flex">
        <div className=" transition-all ease-in-out duration-100 md:w-96  bg-red-500 w-0 h-screen">
        </div>
        <div className="bg-green-500 w-full">

        </div>
    </div>
}

export const SidebarTrans = () => {
    return <div>
        <button className="transform-all duration-1000 bg-red-200 hover:bg-blue-400 p-2 hover:p-4"></button>
    </div>
}