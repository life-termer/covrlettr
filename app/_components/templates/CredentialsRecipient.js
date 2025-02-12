function CredentialsRecipient({ watchFields }) {
  const {
    company,
    recipientName,
    recipientPostCode,
    recipientAddress,
    recipientCity,
  } = watchFields;
  return (
    <>
      {recipientName && <span className="block">{recipientName}</span>}
      {company && <span className="block">{company}</span>}
      {recipientAddress && <span className="block">{recipientAddress}</span>}
      {recipientPostCode && (
        <span className="inline-block">{recipientPostCode}&nbsp;</span>
      )}
      {recipientCity && <span className="inline-block">{recipientCity}</span>}
      {(company ||
        recipientName ||
        recipientPostCode ||
        recipientAddress ||
        recipientCity) && <p className="mb-4"></p>}
    </>
  );
}

export default CredentialsRecipient;
