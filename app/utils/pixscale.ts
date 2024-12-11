export function computePixScale(mag_r: number, r50: number, size: number) {
  // let scale
  // if (mag_r >= 14) {
  //   scale = 0.0263829*mag_r^2 - 1.03038*mag_r + 10.472
  // } else {
  //   scale = -0.0111111111*mag_r^3 + 0.3345238096*mag_r^2 - 3.6186507942*mag_r + 17.3104166685
  // }
  // return Math.abs(scale*r50*0.8 / size)
  return 0.22
}