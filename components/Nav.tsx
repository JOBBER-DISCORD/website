import JoinButton from "./JoinButton";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center gap-7 px-5">
        <Logo />
        <div className="ml-auto">
          <JoinButton />
        </div>
      </div>
    </nav>
  );
}
