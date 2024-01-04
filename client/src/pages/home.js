import { useEffect, useState } from "react"

import Workout from "../components/Workouts"
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:5000/api/workouts");
            const json = await response.json();

            if(response.ok) {
                setWorkouts(json);
            }
        }
        
        fetchWorkouts();
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <Workout workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home