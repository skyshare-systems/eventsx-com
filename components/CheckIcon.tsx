import React from "react";

interface ICheckIcon {
  color: string;
  className: any;
}

const CheckIcon = ({ color, className }: ICheckIcon) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="elements">
        <path
          id="Vector"
          d="M17.9905 18H18M17.9905 18C17.3678 18.6175 16.2393 18.4637 15.4479 18.4637C14.4765 18.4637 14.0087 18.6537 13.3154 19.347C12.7251 19.9374 11.9337 21 11 21C10.0663 21 9.27492 19.9374 8.68457 19.347C7.99128 18.6537 7.52349 18.4637 6.55206 18.4637C5.76068 18.4637 4.63218 18.6175 4.00949 18C3.38181 17.3776 3.53628 16.2444 3.53628 15.4479C3.53628 14.4414 3.31616 13.9786 2.59938 13.2618C1.53314 12.1956 1.00002 11.6624 1 11C1.00001 10.3375 1.53312 9.8044 2.59935 8.73817C3.2392 8.09832 3.53628 7.46428 3.53628 6.55206C3.53628 5.76065 3.38249 4.63214 4 4.00944C4.62243 3.38178 5.7556 3.53626 6.55208 3.53626C7.46427 3.53626 8.09832 3.2392 8.73815 2.59937C9.8044 1.53312 10.3375 1 11 1C11.6625 1 12.1956 1.53312 13.2618 2.59937C13.9015 3.23907 14.5355 3.53626 15.4479 3.53626C16.2393 3.53626 17.3679 3.38247 17.9906 4C18.6182 4.62243 18.4637 5.75559 18.4637 6.55206C18.4637 7.55858 18.6839 8.02137 19.4006 8.73817C20.4669 9.8044 21 10.3375 21 11C21 11.6624 20.4669 12.1956 19.4006 13.2618C18.6838 13.9786 18.4637 14.4414 18.4637 15.4479C18.4637 16.2444 18.6182 17.3776 17.9905 18Z"
          stroke={color}
          stroke-width="1.5"
        />
        <path
          id="Vector 6662"
          d="M8 11.8929L9.8 13.5L14 8.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default CheckIcon;
