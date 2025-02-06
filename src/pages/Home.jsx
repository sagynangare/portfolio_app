
import Projects from "./Projects";
import Experience from "./Experience";
import Achievements from "./Achievements";
import ProfilePage from "../components/Profile";
const Home = () => {
    return (
        <div>
        <ProfilePage/>
        
        <Projects/>
        <Experience/>
        <Achievements/>
        </div>
    )
}
export default Home;