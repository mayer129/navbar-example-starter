import Link from 'next/Link'

export default function Header(){
    return (
        <header>
            <nav>
            <Link href="/">
                <div className="logo">
                <svg className="lightbulb" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h1>Brilliance</h1>
                </div>
            </Link>
            <Link href="/about" className="link"><a>About</a></Link>
            <Link href="/products" className="link"><a>Products</a></Link>
            </nav>
            <div className="button-group">
                <button className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>            
                </button>
                <button className="sign-up">
                    Sign Up
                </button>
            </div>
            <style jsx>{`
              /* ADD YOUR STYLES HERE */
                header {
                    color: #1d3557;
                    background-color: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0px 30px;
                }

                nav {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    column-gap: 20px;
                }

                .logo {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                .lightbulb {
                    width: 2rem;
                }
                
                .button-group {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    column-gap: 5px;
                }

                button {
                    background: #ffffff;
                    color: #1d3557;
                    
                }
                .search-button {
                    width: 2rem;
                    border: none;
                }

                .sign-up {
                    border-color: #1d3557;
                    border-radius: 5px;
                    border-width: 1px;
                    padding: 10px 10px;
                    font-size: 10px;
                    font-weight: bold;
                }


            `}</style>
        </header>
    )
}