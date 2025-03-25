import Link from "next/link";
import { Button } from "./ui/button";
import ClListItem from "./ClListItem";
import ClAddNew from "./ClAddNew";

function CoverLettersList({ coverLetters }) {
  return (
    <div className="p-4 xl:p-16">
      <div className="grid grid-cols-2 xsm:grid-cols-3 lg:grid-cols-8 xl:gird-cols-10 gap-4">
        <ClAddNew />
        {coverLetters &&
          coverLetters.map((coverLetter) => (
            <ClListItem
              key={coverLetter.id}
              id={coverLetter.id}
              name={coverLetter.name}
              date={coverLetter.modified_at}
            />
          ))}
      </div>
    </div>
  );
}

export default CoverLettersList;
