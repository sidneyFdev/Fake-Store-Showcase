import { useAPI } from "@/contexts/useAPIContext"

const About = () => {

    const {apiData} = useAPI()

    return (
        <div>
            About             
        </div>
    )
}

export default About