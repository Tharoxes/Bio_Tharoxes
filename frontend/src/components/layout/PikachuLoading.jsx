import pikachuLoading from "../../assets/PikachuLoading.gif";

function PikachuLoading() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={pikachuLoading}
        alt="Loading ..."
      />
    </div>
  );
}

export default PikachuLoading;
