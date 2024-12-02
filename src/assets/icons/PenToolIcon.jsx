import React from "react";

function PenToolIcon({ width = "50", height = "50" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.7083 22.2917C43.25 14.1667 37.2292 7.39583 29.1875 6.02083C29.0625 4.41667 27.7292 3.125 26.0833 3.125H24C22.3542 3.125 21.0417 4.39583 20.8958 6C12.8125 7.33333 6.75 14.125 6.29167 22.2917C4.8125 22.5417 3.6875 23.8125 3.6875 25.3542V27.4375C3.6875 29.1667 5.08333 30.5625 6.8125 30.5625H8.89583C10.625 30.5625 12.0208 29.1667 12.0208 27.4375V25.3542C12.0208 23.8125 10.8958 22.5417 9.41667 22.2917C9.85417 15.7917 14.625 10.3958 21 9.14583C21.3542 10.4792 22.5625 11.4583 24 11.4583H26.0833C27.5208 11.4583 28.7083 10.4792 29.0833 9.16667C35.4167 10.4375 40.1458 15.8333 40.5833 22.2917C39.1042 22.5417 37.9792 23.8125 37.9792 25.3542V27.4375C37.9792 29.1667 39.375 30.5625 41.1042 30.5625H43.1875C44.9167 30.5625 46.3125 29.1667 46.3125 27.4375V25.3542C46.3125 23.8125 45.1875 22.5208 43.7083 22.2917Z"
        fill="#101010"
      />
      <path
        d="M32.8542 34.4792L29.4375 37.5H20.5834L17.1667 34.4792C15.1875 32.8542 15.1875 31.6042 16.6875 29.6875L22.7084 22.0625C23.125 21.5417 23.6042 21.1875 24.1459 21C24.7084 20.8125 25.3125 20.8125 25.8959 21C26.4167 21.1875 26.8959 21.5417 27.3334 22.0625L33.3334 29.6667C34.8542 31.5833 34.7709 32.7708 32.8542 34.4792Z"
        fill="#101010"
      />
      <path
        d="M27.7499 45.8334H22.3541C20.4374 45.8334 18.9999 44.2709 19.3749 42.6042L20.0208 39.7084C20.1458 39.1251 20.6666 38.7292 21.2499 38.7292H28.8541C29.4374 38.7292 29.9374 39.1251 30.0833 39.7084L30.7291 42.6042C31.1249 44.3751 29.7916 45.8334 27.7499 45.8334Z"
        fill="#101010"
      />
    </svg>
  );
}

export default PenToolIcon;