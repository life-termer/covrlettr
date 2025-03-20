import Link from "next/link";
import { Button } from "./ui/button";
import ClListItem from "./ClListItem";
import ClAddNew from "./ClAddNew";
import { redirect } from "next/navigation";

function CoverLettersList({ coverLetters }) {
  return (
    <div className="p-16">
      <div className="grid grid-cols-10 gap-4">
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
