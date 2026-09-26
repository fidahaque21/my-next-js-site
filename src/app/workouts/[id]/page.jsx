// import WorkoutDetails from "@/app/components/workout/WorkoutDetails";

// const WorkoutPage = async ({ params }) => {
//   const { id } = await params;

//   //  API call
//   const res = await fetch(
//     `https://api.abcz.workers.dev/api/fitlog/${id}`
//   );

//   const workout = await res.json();

//   return (
//     <div>
//       <WorkoutDetails workout={workout} />
//     </div>
//   );
// };
// export default WorkoutPage;

import WorkoutDetails from "@/app/components/workout/WorkoutDetails";

const WorkoutPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  console.log("STATUS:", res.status);
  console.log("URL:", res.url);

  const text = await res.text();

  console.log("API RESPONSE:", text);

  return (
    <div>
      <WorkoutDetails workout={JSON.parse(text)} />
    </div>
  );
};

export default WorkoutPage;