import tap from "tap";
import ThrustByAngle from "../src/thrust-by-angle.mjs";

tap.equal(ThrustByAngle(0), 100, "Should be full on when angle = 0");
tap.equal(ThrustByAngle(120), 0, "Should be full off when angle > 90");
tap.equal(ThrustByAngle(-120), 0, "Should be full off when angle < -90");