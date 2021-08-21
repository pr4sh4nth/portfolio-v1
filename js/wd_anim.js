const svg_anim = document.querySelectorAll("#svg_anim path");

for (let i = 0; i < svg_anim.length; i++) {
  console.log(`Letter ${i} is ${svg_anim[i].getTotalLength()}`);
}
