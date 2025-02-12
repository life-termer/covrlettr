import CoverLetterResponse from "@/app/_components/CoverLetterResponse";
import SpinnerComment from "@/app/_components/SpinnerComment";
import { useMainContext } from "@/app/_lib/mainContext";
import CredentialsSender from "./CredentialsSender";
import CredentialsRecipient from "./CredentialsRecipient";
import SimpleHeader from "./SimpleHeader";

function SimpleTemplate({ watchFields, isLoading }) {
  const { name, surname, recipientName } = watchFields;

  const { response } = useMainContext();

  return (
    <>
      <SimpleHeader watchFields={watchFields} />
      <hr />
      <div className="pt-5 px-5">
        <CredentialsRecipient watchFields={watchFields} />
      </div>
      {isLoading ? (
        <SpinnerComment />
      ) : (
        response && (
          <div className=" pt-5 px-5">
            <CoverLetterResponse
              name={name}
              surname={surname}
              recipientName={recipientName}
              response={response}
            />
          </div>
        )
      )}
    </>
  );
}

export default SimpleTemplate;
