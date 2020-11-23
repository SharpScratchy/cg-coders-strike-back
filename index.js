import ThrustByAngle from "./src/thrust-by-angle.mjs";

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// game loop
while (true) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
  const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
  const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
  const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
  var inputs = readline().split(" ");
  const opponentX = parseInt(inputs[0]);
  const opponentY = parseInt(inputs[1]);

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  // You have to output the target position
  // followed by the power (0 <= thrust <= 100)
  // i.e.: "x y thrust"
  const thrust = ThrustByAngle(nextCheckpointAngle);
  const output = `${nextCheckpointX} ${nextCheckpointY} ${thrust}`;
  console.log(output);
}
