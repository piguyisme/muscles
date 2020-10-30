var data = {
  trapezius: {
    name: "Trapezius",
    location: "Back of the neck and shoulders",
    function: "Shoulder elevator"
  },
  deltoids: {
    name: "Deltoids",
    location: "Shoulder",
    function: "Push/Pull/Full range of motion"
  },
  pectoralis: {
    name: "Pectoralis",
    location: "Chest",
    function: "Push"
  },
  biceps: {
    name: "Biceps",
    location: "Upper Arm",
    function: "Elbow flexor"
  },
  triceps: {
    name: "Triceps",
    location: "Upper Arm",
    function: "Elbow extensor"
  },
  latissimusdorsi: {
    name: "Latissimus Dorsi",
    location: "Back",
    function: "Push/Pull"
  },
  abdominals: {
    name: "Abdominals",
    location: "between the ribs and pelvis",
    function: "Upper body flexor"
  },
  obliques: {
    name: "Oblique's",
    location: "On the side of the abdominals",
    function: "Pull toward midline"
  },
  gluteusmaximus: {
    name: "Gluteus Maximus",
    location: "Back of the hip",
    function: "push"
  },
  quadriceps: {
    name: "Quadriceps",
    location: "Front of the thigh",
    function: "Knee extensor"
  },
  hamstrings: {
    name: "Hamstrings",
    location: "Between hip and knee",
    function: "Knee flexor"
  },
  hipadductors: {
    name: "Hip Adductors",
    location: "Inner thigh",
    function: "Pulls leg towards midline"
  },
  hipabductors: {
    name: "Hip Abductor",
    location: "Outer thigh",
    function: "Pulls leg away from midline"
  },
  gastrocnemius: {
    name: "Gastrocnemius",
    location: "Calf",
    function: "ankle extensor"
  }
}

function selectMuscle(muscle) {
  var muscleData = data[muscle];
  console.log(muscleData);
  if(muscleData) {
    $("#name").text(`Name: ${muscleData.name}`);
    $("#location").text(`Location: ${muscleData.location}`);
    $("#function").text(`Function: ${muscleData.function}`);
  } else {console.log(`${muscle} was requested but it does not exist`)}
}
