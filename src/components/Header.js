import react from 'react'
const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Score4'
}

export default  Header