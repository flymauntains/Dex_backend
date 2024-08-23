import type { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const HomeIcon = (props: ComponentWithAs<"svg", IconProps>) => (
  <Icon
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Menu">
      <g id="Group">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3359 3.25324C11.5189 3.09073 11.7552 3.00098 11.9999 3.00098C12.2447 3.00098 12.4809 3.09073 12.6639 3.25324L21.6639 11.2532C21.8153 11.388 21.9222 11.5655 21.9704 11.7624C22.0186 11.9592 22.0058 12.1661 21.9338 12.3555C21.8618 12.545 21.734 12.7081 21.5672 12.8232C21.4004 12.9383 21.2026 13.0001 20.9999 13.0002H19.9999V20.0002C19.9999 20.2655 19.8946 20.5198 19.707 20.7074C19.5195 20.8949 19.2651 21.0002 18.9999 21.0002H4.99991C4.73469 21.0002 4.48034 20.8949 4.2928 20.7074C4.10527 20.5198 3.99991 20.2655 3.99991 20.0002V13.0002H2.99991C2.79724 13.0001 2.59941 12.9383 2.43263 12.8232C2.26584 12.7081 2.13798 12.545 2.06597 12.3555C1.99397 12.1661 1.98123 11.9592 2.02943 11.7624C2.07764 11.5655 2.18452 11.388 2.33591 11.2532L11.3359 3.25324ZM7.99991 16.0002C7.73469 16.0002 7.48034 16.1056 7.2928 16.2931C7.10527 16.4807 6.99991 16.735 6.99991 17.0002C6.99991 17.2655 7.10527 17.5198 7.2928 17.7074C7.48034 17.8949 7.73469 18.0002 7.99991 18.0002H15.9999C16.2651 18.0002 16.5195 17.8949 16.707 17.7074C16.8946 17.5198 16.9999 17.2655 16.9999 17.0002C16.9999 16.735 16.8946 16.4807 16.707 16.2931C16.5195 16.1056 16.2651 16.0002 15.9999 16.0002H7.99991Z"
          fill="currentColor"
        />
      </g>
    </g>
  </Icon>
);

export default HomeIcon;
