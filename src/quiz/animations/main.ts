const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

// Refactored animation to use async and await
async function animateAlices() {
  const alice10 = document.querySelector<HTMLElement>("#alice1");
  const alice20 = document.querySelector<HTMLElement>("#alice2");
  const alice30 = document.querySelector<HTMLElement>("#alice3");

  if (alice10 && alice20 && alice30) {
    try {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    }
    catch (error) {
      console.error(error);
    }
  }
  else{
    console.warn("#alice not found");
  }
}

animateAlices();

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  