process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerChar = ['|', '/', '-', '\\', '|'];
let delay = 100;

for (const char of spinnerChar) {
    setTimeout(() => {
        process.stdout.write('\r${char}r     ');   
    }, delay, char);
    delay += 200;
}

  setTimeout(() => {

    console.log('heyyyy  '); 
  }, delay);
  