import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz khJLZs"
      >
        <svg
          class="sc-bdfBwQ cuuOmQ sc-dlfnbm mabrO"
          color="text"
          viewBox="0 0 96 96"
          width="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            height="96"
            href="/images/egg/9.png"
            width="96"
          />
        </svg>
      </div>
    </DocumentFragment>
  `);
});
