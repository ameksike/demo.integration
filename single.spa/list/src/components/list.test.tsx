import { render } from "@testing-library/react";
import MyList from "./list";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<MyList name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
