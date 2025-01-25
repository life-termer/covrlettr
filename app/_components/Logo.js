import { SquarePen } from "lucide-react";

function Logo() {
  return (
    <div className="flex space-x-1 text-brand items-center text-lg font-[family-name:var(--font-heading)]">
      <SquarePen className="w-6 h-6" />
      <p className="h-6">COVRLETTR</p>
    </div>
  );
}

export default Logo;
