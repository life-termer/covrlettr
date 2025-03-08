import CoverLetterResponse from "@/app/_components/CoverLetterResponse";
import SpinnerComment from "@/app/_components/SpinnerComment";
import { useMainContext } from "@/app/_lib/mainContext";
import CredentialsSender from "./CredentialsSender";
import CredentialsRecipient from "./CredentialsRecipient";

function BlankTemplate({ watchFields, isLoading }) {
  const { name, surname, recipientName } = watchFields;

  const { response } = useMainContext();

  return (
    <div className="pt-5 ps-8 pe-10">
      <div>
        <CredentialsSender watchFields={watchFields} />
        <CredentialsRecipient watchFields={watchFields} />
      </div>
      {isLoading ? (
        <SpinnerComment />
      ) : (
        response && (
          <CoverLetterResponse
            name={name}
            surname={surname}
            recipientName={recipientName}
            response={response}
          />
        )
      )}
    </div>
  );
}

export default BlankTemplate;
