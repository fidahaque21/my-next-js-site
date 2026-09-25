
const WorkoutCard = ({ workout }) => {
console.log(workout);

  if (!workout) return null;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{workout.name}</h2>
      
      <p></p>
    </div>
  );
};

export default WorkoutCard;