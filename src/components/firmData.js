export default function FirmData({ firmData }) {
  return (
    <div className="mb-8">
      <div className="container my-14 flex max-w-screen-xl flex-col items-center">
        <div className="text-center text-xl font-light">
          <p className="mb-2 font-bold">{firmData?.name}</p>
          <p>
            NIP: <span className="font-bold">{firmData?.nip}</span>
          </p>
          <p>
            REGON: <span className="font-bold">{firmData?.regon}</span>
          </p>
          <p>
            Nr BDO: <span className="font-bold">{firmData?.bdo}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
