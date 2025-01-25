import CoverLetterControls from "./CoverLetterControls";
import CoverLetterTemplate from "./CoverLetterTemplate";

function CoverLetter({ form }) {
  return (
    <div className="px-3">
      <CoverLetterControls />
      <CoverLetterTemplate form={form} />
    </div>
  );
}

export default CoverLetter;
