import Footer from "@/components/Footer";
import JobWall from "@/components/JobWall";
import LogoStrip from "@/components/LogoStrip";
import Nav from "@/components/Nav";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Nav />
      <header className="hero" id="top">
        <div className="wrap hero-copy">
          <h1>
            Stop <span className="strike">applying</span>.
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
