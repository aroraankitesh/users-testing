import { render, screen, within } from "@testing-library/react";

import UserList from "./UserList";

test("render one row per user", () => {
  // render the component
  const users = [
    { name: "jane", email: "jane@jame.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  // render(<UserList users={users} />);
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table

  // screen.logTestingPlaygroundURL();
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});