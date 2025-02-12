function CredentialsSender({ watchFields }) {
  const { name, surname, address, postCode, city } = watchFields;
  return (
    <>
      {name && <span className="inline-block">{name}&nbsp;</span>}
      {surname && <span className="inline-block">{surname}</span>}
      {address && <span className="block">{address}</span>}
      {postCode && <span className="inline-block">{postCode}&nbsp;</span>}
      {city && <span className="inline-block">{city}</span>}
      {(name || surname || address || postCode || city) && (
        <p className="mb-4"></p>
      )}
    </>
  );
}

export default CredentialsSender;
