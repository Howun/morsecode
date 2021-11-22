import {morse} from "./translator";
import {it, expect} from "@jest/globals";

it ("should translate .- to be a", () => {
  const result = morse(".-");
  expect(result).toBe("a");
})

it ("should translate -... to be b", () => {
  const result = morse("-...");
  expect(result).toBe("b");
})

it ("should translate -.-. to be c", () => {
  const result = morse("-.-.");
  expect(result).toBe("c");
})

it ("should translate -.. to be d", () => {
  const result = morse("-..");
  expect(result).toBe("d");
})

it ("should translate .  to be e", () => {
  const result = morse(".");
  expect(result).toBe("e");
})
it ("should translate ..-. to be f", () => {
  const result = morse("..-.");
  expect(result).toBe("f");
})

it ("should translate --. to be g", () => {
  const result = morse("--.");
  expect(result).toBe("g");
})
it ("should translate .... to be i", () => {
  const result = morse("....");
  expect(result).toBe("h");
})

it ("should translate .. to be i", () => {
  const result = morse("..");
  expect(result).toBe("i");
})
it ("should translate .--- to be j", () => {
  const result = morse(".---");
  expect(result).toBe("j");
})

it ("should translate -.- to be k", () => {
  const result = morse("-.-");
  expect(result).toBe("k");
})
it ("should translate .-.. to be l", () => {
  const result = morse(".-..");
  expect(result).toBe("l");
})

it ("should translate -- to be m", () => {
  const result = morse("--");
  expect(result).toBe("m");
})
it ("should translate -. to be n", () => {
  const result = morse("-.");
  expect(result).toBe("n");
})

it ("should translate --- to be o", () => {
  const result = morse("---");
  expect(result).toBe("o");
})
it ("should translate .--. to be p", () => {
  const result = morse(".--.");
  expect(result).toBe("p");
})

it ("should translate --.- to be q", () => {
  const result = morse("--.-");
  expect(result).toBe("q");
})
it ("should translate .-. to be r", () => {
  const result = morse(".-.");
  expect(result).toBe("r");
})

it ("should translate ... to be s", () => {
  const result = morse("...");
  expect(result).toBe("s");
})
it ("should translate -  to be t", () => {
  const result = morse("-");
  expect(result).toBe("t");
})

it ("should translate ..- to be u", () => {
  const result = morse("..-");
  expect(result).toBe("u");
})
it ("should translate ...- to be v", () => {
  const result = morse("...-");
  expect(result).toBe("v");
})

it ("should translate .-- to be w", () => {
  const result = morse(".--");
  expect(result).toBe("w");
})
it ("should translate -..- to be x", () => {
  const result = morse("-..-");
  expect(result).toBe("x");
})

it ("should translate -.-- to be y", () => {
  const result = morse("-.--");
  expect(result).toBe("y");
})
it ("should translate --.. to be z", () => {
  const result = morse("--..");
  expect(result).toBe("z");
})

it ("should translate / to be a space", () => {
  const result = morse("/");
  expect(result).toBe(" ");
})
it ("should translate .---- to be 1", () => {
  const result = morse(".----");
  expect(result).toBe("1");
})

it ("should translate ..--- to be 2", () => {
  const result = morse("..---");
  expect(result).toBe("2");
})
it ("should translate ...-- to be 3", () => {
  const result = morse("...--");
  expect(result).toBe("3");
})

it ("should translate ....- to be 4", () => {
  const result = morse("....-");
  expect(result).toBe("4");
})
it ("should translate ..... to be 5", () => {
  const result = morse(".....");
  expect(result).toBe("5");
})

it ("should translate -.... to be 6", () => {
  const result = morse("-....");
  expect(result).toBe("6");
})
it ("should translate --... to be 7", () => {
  const result = morse("--...");
  expect(result).toBe("7");
})

it ("should translate ---.. to be 8", () => {
  const result = morse("---..");
  expect(result).toBe("8");
})
it ("should translate ----. to be 9", () => {
  const result = morse("----.");
  expect(result).toBe("9");
})

it ("should translate ----- to be 0", () => {
  const result = morse("-----");
  expect(result).toBe("0");
})

