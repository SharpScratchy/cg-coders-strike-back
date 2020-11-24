const ThrustByAngleAndDistance = (angle, distance, canBoost = true) => {
  const absAngle = Math.abs(angle);
  const isLowAngle = absAngle < 20;
  const isHighDistance = distance > 5000;
  const isNearDistance = distance < 1000;

  if (absAngle > 90) {
    return 0;
  }

  if (isNearDistance) {
      return 33;
  }

  return isHighDistance && isLowAngle && canBoost ? "BOOST" : 100;
};

export default ThrustByAngleAndDistance;
