import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ScoreFrame } from "./ScoreFrame";

describe("ScoreFrame", () => {
  it("should render correct total", () => {
    render(<ScoreFrame round={[]} total={7} />);
    expect(screen.getByLabelText("total")).toBeInTheDocument();
    expect(screen.getByLabelText("total").textContent).toEqual("7");
  });
  it("should render correct first frame", () => {
    render(<ScoreFrame round={[]} total={7} />);
    expect(screen.getByLabelText("first")).toBeInTheDocument();
  });
  it("should render correct second frame", () => {
    render(<ScoreFrame round={[]} total={7} />);
    expect(screen.getByLabelText("second")).toBeInTheDocument();
  });
  it("should renders correct values for normal state ", () => {
    render(<ScoreFrame round={[5, 2]} total={7} />);
    expect(screen.getByLabelText("first").textContent).toEqual("5");
    expect(screen.getByLabelText("second").textContent).toEqual("2");
  });
  it("should renders correct values for spare ", () => {
    render(<ScoreFrame round={[6, 4]} total={10} />);
    expect(screen.getByLabelText("first").textContent).toEqual("6");
    expect(screen.getByLabelText("second").textContent).toEqual("/");
  });
  it("should renders correct values for strike ", () => {
    render(<ScoreFrame round={[10]} total={10} />);
    expect(screen.getByLabelText("first").textContent).toEqual("");
    expect(screen.getByLabelText("second").textContent).toEqual("X");
  });
});
