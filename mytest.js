function showMyName(name,age) {
  console.log(`Tên: ${name}, Tuổi: ${age}`);
}
showMyName("Rmah Viu ", 18)

function tinhtuoi(namsinh) {
  const namhientai = new Date().getFullYear();
  return namhientai - namsinh;
}
const tuoi = tinhtuoi(2005);
const namsinh = 2005;
console.log(`năm sinh là ${namsinh}, tuổi là ${tinhtuoi(namsinh)}`);