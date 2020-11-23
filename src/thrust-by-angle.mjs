const ThrustByAngle = (angle) => (angle > 90 || angle < -90 ? 0 : 100);

export default ThrustByAngle;
