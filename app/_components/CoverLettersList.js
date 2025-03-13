import Link from "next/link";
import { Button } from "./ui/button";
import ClListItem from "./ClListItem";
import ClAddNew from "./ClAddNew";

function CoverLettersList() {
  return (
    <div className="p-16">
      <div className="grid grid-cols-10 gap-4">
        <ClAddNew />
        {/* <ClListItem name="Cover Letter 1" date="2021-10-10" />
        <ClListItem name="Cover Letter 1" date="2021-10-10" /> */}
      </div>
    </div>
  );
}

export default CoverLettersList;
