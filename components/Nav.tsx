import JoinButton from "./JoinButton";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className="top">
      <div className="wrap">
        <Logo />
        <div className="navcta">
          <JoinButton />
        </div>
      </div>
    </nav>
  );
}
