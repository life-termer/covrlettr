"use client";
import { Comment } from "react-loader-spinner";

function SpinnerComment() {
  return (
    <div className="h-[20vh] flex justify-center items-center z-40">
      <Comment
        visible={true}
        height="50"
        width="50"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#033044"
      />
    </div>
  );
}

export default SpinnerComment;
