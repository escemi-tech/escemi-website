import { render } from "@testing-library/react";
import React from "react";

import About from "./About";

describe("About", () => {
  it("renders without crashing", () => {
    const result = render(<About />);

    expect(result).toBeTruthy();
  });
});
