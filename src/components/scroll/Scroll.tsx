import React, {
  Component,
  DetailedReactHTMLElement,
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from "react";
import smoothscroll from "smoothscroll-polyfill";

const ElementWrapper = (props: PropsWithChildren<unknown>): ReactElement => {
  return <>{props.children}</>;
};

type ScrollProps = {
  type?: string;
  element?: string;
  offset?: number;
  timeout?: number;
  onClick?: MouseEventHandler;
};

class Scroll extends Component<ScrollProps> {
  constructor(props: PropsWithChildren<ScrollProps>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    smoothscroll.polyfill();
  }

  handleClick(e: MouseEvent): void {
    e.preventDefault();
    const { onClick = () => undefined } = this.props;

    let elementToScroll: Element | null = null;
    let scroll = true;
    const { type, element, offset, timeout } = this.props;
    if (type && element) {
      switch (type) {
        case "class":
          elementToScroll = document.getElementsByClassName(element)[0];
          scroll = elementToScroll ? true : false;
          break;
        case "id":
          elementToScroll = document.getElementById(element);
          scroll = elementToScroll ? true : false;
          break;
        default:
      }
    }

    if (scroll) {
      this.scrollTo(elementToScroll, offset, timeout);
    }

    onClick(e);
  }

  scrollTo(element: Element | null = null, offSet = 0, timeout?: number): void {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
    }
  }

  render(): ReactElement {
    return (
      <ElementWrapper>
        {typeof this.props.children === "object" ? (
          cloneElement(
            this.props.children as DetailedReactHTMLElement<HTMLAttributes<unknown>, HTMLElement>,
            {
              onClick: this.handleClick,
            }
          )
        ) : (
          <span onClick={this.handleClick}>{this.props.children}</span>
        )}
      </ElementWrapper>
    );
  }
}

export default Scroll;
