import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Translation } from "gatsby-plugin-react-i18next";
import React, { Component, PropsWithChildren, ReactElement } from "react";

import Scroll from "../scroll/Scroll";

type State = {
  visibilityClass: "show" | "hide" | "";
};

export default class ScrollToTop extends Component<unknown, State> {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = {
      visibilityClass: "",
    };
  }

  handleScroll = (): void => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== "show") {
        this.setState({ visibilityClass: "show" });
      }
    } else {
      if (visibilityClass === "show") {
        this.setState({ visibilityClass: "hide" });
      }
    }
  };

  componentDidMount(): void {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(): ReactElement {
    const { visibilityClass } = this.state;
    return (
      <Translation>
        {(t) => (
          <Scroll type="class" element="page-top" offset={100}>
            <a
              title={t("Go to top of page")}
              className={`scroll-to-top rounded ${visibilityClass}`}
              href="#page-top"
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </a>
          </Scroll>
        )}
      </Translation>
    );
  }
}
