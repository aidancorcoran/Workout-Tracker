const Workouts = ({ workout }) => {
    console.log(workout)
    return (
        <div className="workout-details">
            <h4>{workout.ExerciseName}</h4>
            <p><strong>Weight (lbs): </strong>{workout.Weight}</p>
            <p><strong>Sets: </strong>{workout.Sets}</p>
            <p><strong>Reps: </strong>{workout.Repitions}</p>
        </div>
    );
}

export default Workouts