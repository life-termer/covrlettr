"use client";
import { ColorRing, Grid } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center z-40">
      <Grid
        visible={true}
        height="70"
        width="70"
        color="#033044"
        ariaLabel="grid-loading"
        radius="12"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Spinner;
