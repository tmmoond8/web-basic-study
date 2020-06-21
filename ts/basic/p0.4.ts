interface Phone {
  browser: string;
  call: string;
}

interface Computer {
  vscode: string;
  browser: string;
}

type Intersection = Computer & Phone;
type Union = Phone | Computer;

const intersection: Intersection = {
  browser: "chrome",
  vscode: "version 1",
  call: "void call",
};

const phone: Union = {
  browser: "chrome",
  call: "voice call",
};

const computer: Union = {
  browser: "chrome",
  vscode: "voice call",
};

const both: Union = {
  browser: "chrome",
  call: "video call",
  vscode: "version 22",
};
