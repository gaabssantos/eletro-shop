/* COMPONENTS */
import VerificationCode from "../components/access/VerificationCode";

const Verification = () => {
  return (
    <div>
        <VerificationCode canAccess={true} />
    </div>
  );
};

export default Verification;
