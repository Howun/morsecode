import {morse} from "./translator";
import {it, expect} from "@jest/globals";

it ("should translate", () => {
  const result = morse(".-");
  expect(result).toBe("a");
})

it ("should translate", () => {
  const result = morse("-...");
  expect(result).toBe("b");
})

it ("should translate", () => {
  const result = morse("-.-.");
  expect(result).toBe("c");
})

it ("should translate", () => {
  const result = morse("-..");
  expect(result).toBe("d");
})

it ("should translate", () => {
  const result = morse(".");
  expect(result).toBe("e");
})
it ("should translate", () => {
  const result = morse("..-.");
  expect(result).toBe("f");
})

it ("should translate", () => {
  const result = morse("--.");
  expect(result).toBe("g");
})
it ("should translate", () => {
  const result = morse("....");
  expect(result).toBe("h");
})

it ("should translate", () => {
  const result = morse("..");
  expect(result).toBe("i");
})
it ("should translate", () => {
  const result = morse(".---");
  expect(result).toBe("j");
})

it ("should translate", () => {
  const result = morse("-.-");
  expect(result).toBe("k");
})
it ("should translate", () => {
  const result = morse(".-..");
  expect(result).toBe("l");
})

it ("should translate", () => {
  const result = morse("--");
  expect(result).toBe("m");
})
it ("should translate", () => {
  const result = morse("-.");
  expect(result).toBe("n");
})

it ("should translate", () => {
  const result = morse("---");
  expect(result).toBe("o");
})
it ("should translate", () => {
  const result = morse(".--.");
  expect(result).toBe("p");
})

it ("should translate", () => {
  const result = morse("--.-");
  expect(result).toBe("q");
})
it ("should translate", () => {
  const result = morse(".-.");
  expect(result).toBe("r");
})

it ("should translate", () => {
  const result = morse("...");
  expect(result).toBe("s");
})
it ("should translate", () => {
  const result = morse("-");
  expect(result).toBe("t");
})

it ("should translate", () => {
  const result = morse("..-");
  expect(result).toBe("u");
})
it ("should translate", () => {
  const result = morse("...-");
  expect(result).toBe("v");
})

it ("should translate", () => {
  const result = morse(".--");
  expect(result).toBe("w");
})
it ("should translate", () => {
  const result = morse("-..-");
  expect(result).toBe("x");
})

it ("should translate", () => {
  const result = morse("-.--");
  expect(result).toBe("y");
})
it ("should translate", () => {
  const result = morse("--..");
  expect(result).toBe("z");
})

it ("should translate", () => {
  const result = morse("/");
  expect(result).toBe(" ");
})
it ("should translate", () => {
  const result = morse(".----");
  expect(result).toBe("1");
})

it ("should translate", () => {
  const result = morse("..---");
  expect(result).toBe("2");
})
it ("should translate", () => {
  const result = morse("...--");
  expect(result).toBe("3");
})

it ("should translate", () => {
  const result = morse("....-");
  expect(result).toBe("4");
})
it ("should translate", () => {
  const result = morse(".....");
  expect(result).toBe("5");
})

it ("should translate", () => {
  const result = morse("-....");
  expect(result).toBe("6");
})
it ("should translate", () => {
  const result = morse("--...");
  expect(result).toBe("7");
})

it ("should translate", () => {
  const result = morse("---..");
  expect(result).toBe("8");
})
it ("should translate", () => {
  const result = morse("----.");
  expect(result).toBe("9");
})

it ("should translate", () => {
  const result = morse("-----");
  expect(result).toBe("0");
})
