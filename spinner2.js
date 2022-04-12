const spinner = () => {
  let timeout = 0;
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, timeout += 200);
  }
};

const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

spinner(characters);