import React from "react";

function Codeicon({ width = "50", height = "50" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M33.7292 4.16675H16.2709C8.68758 4.16675 4.16675 8.68758 4.16675 16.2709V33.7084C4.16675 41.3126 8.68758 45.8334 16.2709 45.8334H33.7084C41.2917 45.8334 45.8126 41.3126 45.8126 33.7293V16.2709C45.8334 8.68758 41.3126 4.16675 33.7292 4.16675ZM21.1042 30.2084C21.7084 30.8126 21.7084 31.8126 21.1042 32.4168C20.7917 32.7293 20.3959 32.8751 20.0001 32.8751C19.6042 32.8751 19.2084 32.7293 18.8959 32.4168L13.7084 27.2292C12.4792 26.0001 12.4792 24.0209 13.7084 22.7917L18.8959 17.6042C19.5001 17.0001 20.5001 17.0001 21.1042 17.6042C21.7084 18.2084 21.7084 19.2084 21.1042 19.8126L15.9167 25.0001L21.1042 30.2084ZM36.2917 27.2084L31.1042 32.3959C30.7917 32.7084 30.3959 32.8543 30.0001 32.8543C29.6042 32.8543 29.2084 32.7084 28.8959 32.3959C28.2917 31.7917 28.2917 30.7917 28.8959 30.1876L34.0834 25.0001L28.8959 19.7917C28.2917 19.1876 28.2917 18.1876 28.8959 17.5834C29.5001 16.9792 30.5001 16.9792 31.1042 17.5834L36.2917 22.7709C37.5209 24.0001 37.5209 26.0001 36.2917 27.2084Z"
          fill="#101010"
        />
      </g>
    </svg>
  );
}

export default Codeicon;