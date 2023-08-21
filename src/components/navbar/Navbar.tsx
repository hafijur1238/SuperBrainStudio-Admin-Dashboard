import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>StudioMain</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1692603135~exp=1692603735~hmac=7e32eba514511a289832d7d91f5196d096d500df3aa1720990661ff40a145db3" alt="" />
                <span>Malik</span>
            </div>
            <img src="/setting.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default Navbar