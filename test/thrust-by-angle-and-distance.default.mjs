import tap from "tap";
import ThrustByAngleAndDistance from "../src/thrust-by-angle-and-distance.mjs";

tap.equal(
  ThrustByAngleAndDistance(0, 3000),
  100,
  "Should be full on when angle = 0 and distance not near"
);

tap.equal(
  ThrustByAngleAndDistance(120, 100),
  0,
  "Should be full off when angle > 90"
);

tap.equal(
  ThrustByAngleAndDistance(-120, 100),
  0,
  "Should be full off when angle < -90"
);

tap.equal(
  ThrustByAngleAndDistance(0, 10000),
  "BOOST",
  "Should boost when angle is low and distance high"
);

tap.equal(
  ThrustByAngleAndDistance(0, 10000, false),
  100,
  "Should not boost when boost is exhausted"
);

tap.equal(
  ThrustByAngleAndDistance(30, 10000),
  100,
  "Should not boost when angle is not small"
);

tap.equal(
  ThrustByAngleAndDistance(0, 500),
  33,
  "Should reduce thrust near distance"
);
