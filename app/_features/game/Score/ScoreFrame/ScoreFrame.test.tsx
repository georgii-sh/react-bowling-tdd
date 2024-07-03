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
    render(<ScoreFrame round={[1]} total={7} />);
    expect(screen.getByLabelText("first")).toBeInTheDocument();
  });
  it("should render correct second frame", () => {
    render(<ScoreFrame round={[1, 2]} total={7} />);
    expect(screen.getByLabelText("second")).toBeInTheDocument();
  });
  it("should not render third frame if third round not exists", () => {
    render(<ScoreFrame round={[1, 2]} total={7} />);
    expect(screen.queryByLabelText("third")).not.toBeInTheDocument();
  });
  it("should render third frame if third round exists", () => {
    render(<ScoreFrame round={[1, 2, 3]} total={7} />);
    expect(screen.getByLabelText("third")).toBeInTheDocument();
  });

  it("should render 2, 3 correctly", () => {
    render(<ScoreFrame round={[2, 3]} />);
    expect(screen.getByLabelText("first").textContent).toBe("2");
    expect(screen.getByLabelText("second").textContent).toBe("3");
  });

  it("should render 0, 1 correct", () => {
    render(<ScoreFrame round={[0, 1]} />);
    expect(screen.getByLabelText("first").textContent).toBe("-");
    expect(screen.getByLabelText("second").textContent).toBe("1");
  });

  it("should render 2, 0 correct", () => {
    render(<ScoreFrame round={[2, 0]} />);
    expect(screen.getByLabelText("first").textContent).toBe("2");
    expect(screen.getByLabelText("second").textContent).toBe("-");
  });

  it("should render miss correct", () => {
    render(<ScoreFrame round={[0, 0]} />);
    expect(screen.getByLabelText("first").textContent).toBe("-");
    expect(screen.getByLabelText("second").textContent).toBe("-");
  });

  it("should render strike correct", () => {
    render(<ScoreFrame round={[10]} />);
    expect(screen.getByLabelText("first").textContent).toBe("X");
    expect(screen.getByLabelText("second").textContent).toBe("");
  });

  it("should render spare correct", () => {
    render(<ScoreFrame round={[2, 8]} />);
    expect(screen.getByLabelText("first").textContent).toBe("2");
    expect(screen.getByLabelText("second").textContent).toBe("/");
  });

  it("should render three strike correct", () => {
    render(<ScoreFrame round={[10, 10, 10]} />);
    expect(screen.getByLabelText("first").textContent).toBe("X");
    expect(screen.getByLabelText("second").textContent).toBe("X");
    expect(screen.getByLabelText("third").textContent).toBe("X");
  });

  it("should render three spare and miss correct", () => {
    render(<ScoreFrame round={[1, 9, 0]} />);
    expect(screen.getByLabelText("first").textContent).toBe("1");
    expect(screen.getByLabelText("second").textContent).toBe("/");
    expect(screen.getByLabelText("third").textContent).toBe("-");
  });

  it("should not render third for 2 round frame", () => {
    render(<ScoreFrame round={[1, 9]} />);
    expect(screen.queryByLabelText("third")).not.toBeInTheDocument();
  });
});
