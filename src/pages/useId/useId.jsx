import { Hero } from "../../components";
import EmailForm from "./EmailForm";

const UserId = () => {
  return (
    <main className="hook-container user-id-hook-container">
      <Hero
        hookName={"useId"}
        heroText={"by creating unique id necessary in any component"}
      />
      <div className="| readable-container flex-center flex-col gap-1">
        <EmailForm />
        <EmailForm />
      </div>
    </main>
  );
};

export default UserId;
