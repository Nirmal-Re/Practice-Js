// 'use strict';

// const object1 = {
//   answers: [5, 2, 3],
// };
// const test2 = [1, 5, 3, 9, 6, 1];
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section ðŸ˜ƒ
//   build() {
//     let s = '';
//     this.options.forEach(element => {
//       s += element + `\n`;
//     });
//     return s;
//   },
//   answers: new Array(4).fill(0),
//   displayAnswers() {
//     let reply = prompt(
//       `What type of results would you like to view -- String or Array`
//     );
//     if (reply.toUpperCase() === `ARRAY` || reply === '') {
//       console.log(this.answers);
//     } else if (reply.toUpperCase() === `STRING`) {
//       const results = `Poll results are ${this.answers}`;
//       console.log(results);
//     }
//   },
//   registerNewAnswer() {
//     let test = true;
//     while (test) {
//       let answer = Number(
//         prompt(`${this.question}\n${this.build()}Input an option number`)
//       );
//       1;
//       if (answer >= 0 && answer < 4) {
//         this.answers[answer]++;
//         test = false;
//       } else {
//         console.log('Please enter valid option');
//       }
//     }
//     this.displayAnswers();
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayAnswers.apply(object1);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
