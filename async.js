console.log('Async func: ');

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitIt(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('There is error');
        return;
      }
      resolve(msg.toUpperCase() + 'Done');
      return;
    }, time);
  });
}

async function executer() {
  try {
    const stepOne = /*await*/ waitIt('Step 1 \n', 1000); // Simulando uma promise pendente (sem await)
    console.log(stepOne);

    setTimeout(function () {
      console.log('This step has been retrieved \n', stepOne);
    }, 1100);

    const stepTwo = await waitIt('Step 2 \n', rand());
    console.log(stepTwo);

    const stepThree = await waitIt('Step 3 \n', rand());
    console.log(stepThree);

    console.log('Step three is the end');
  } catch (e) {
    console.log(e);
  }
}
executer();

// output:

// Promise {<pending>}
// STEP 2
// Done
// STEP 3
// Done
// Step three is the end
// This step has been retrieved
