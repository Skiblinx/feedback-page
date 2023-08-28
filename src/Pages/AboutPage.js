import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'


const AboutPage = () => {
    return (
        <Card>
            <h1>About Page</h1>
            <p>This is a react App that allow you leave a feedback and rating on a product</p>
            <p>Click <Link to="/">here</Link> to go back to the home page</p>
        </Card>
    )
}

export default AboutPage