import Footer from "@/components/Footer";
import JobWall from "@/components/JobWall";
import LogoStrip from "@/components/LogoStrip";
import Nav from "@/components/Nav";
import WaitlistForm from "@/components/WaitlistForm";
import { strike } from "@/lib/styles";

export default function Home() {
  return (
    <>
      <Nav />
      <header className="relative overflow-hidden pt-[72px] text-center" id="top">
        <div className="relative z-[3] mx-auto max-w-[820px] px-5">
          <h1 className="font-display text-[clamp(44px,8vw,92px)] font-black leading-[0.95] tracking-[-0.045em] text-balance">
            Stop <span className={strike}>applying</span>.
            <br />
            Start interviewing.
          </h1>
          <WaitlistForm />
        </div>
        <JobWall />
      </header>
      <LogoStrip />
      <Footer />
    </>
  );
}
