
function Header({headerTitle, links}) {
  return (
    <nav className='w-full h-[75px] text-black bg-white shadow-md shadow-black/30 flex items-center justify-between px-20'>
        <h1>
          {headerTitle}
        </h1>

        <ul className='w-max flex items-center gap-7'>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
    </nav>
  )
}

export default Header