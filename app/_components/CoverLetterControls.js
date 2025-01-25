import { Button } from "./ui/button";

function CoverLetterControls() {
  return (
    <div className="flex gap-2 mb-4">
      <div className="flex-auto w-3/12">
        <Button variant="secondary" size="full">
          Template
        </Button>
      </div>
      <div className="flex-auto w-6/12 flex justify-center gap-2">
        <Button variant="secondary">Aa Arial</Button>
        <Button variant="secondary">Tt M</Button>
        <Button variant="secondary">1.25</Button>
        <Button variant="secondary">Color</Button>
      </div>
      <div className="flex-auto w-3/12">
        <Button variant="secondary" size="full">
          Export
        </Button>
      </div>
    </div>
  );
}

export default CoverLetterControls;
