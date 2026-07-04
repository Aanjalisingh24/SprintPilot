function NavBar(){
    return(
        <div className="bg-sky-300 text-color-white-200 p-2">
            <div className="w-fit">
               <h1>Jira Management</h1>
            </div>
            <div className="flex gap-4 justify-end  text-center ">
                <button className="bg-red-800 text-white w-20 h-10 rounded-xl">Home</button>
                <button className="bg-red-800 text-white w-20 h-10 rounded-xl">LogOut</button>
            </div>
        </div>
    )
}

export default NavBar;