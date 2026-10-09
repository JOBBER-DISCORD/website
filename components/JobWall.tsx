import type { CSSProperties } from "react";
import { cardCompanies } from "@/lib/companies";

const roles = [
  "Senior Product Designer",
  "Frontend Engineer",
  "Data Analyst",
  "Backend Engineer (Go)",
  "Product Manager",
  "New Grad SWE",
  "ML Engineer",
  "UX Researcher",
  "Full‑stack Developer",
  "DevOps Engineer",
  "iOS Engineer",
  "Growth Marketer",
];
const pay = ["$120–145k", "$95–120k", "$140–170k", "$85–105k", "$160–190k", "$110–135k", "$130–150k"];
const statuses = [
  ["found", "Found"],
  ["applied", "Applied"],
  ["applied", "Applied"],
  ["interview", "Interview"],
  ["applied", "Applied"],
  ["offer", "Offer"],
] as const;

const COLUMNS = 6;
const CARDS_PER_COLUMN = 6;

type Card = {
  company: (typeof cardCompanies)[number];
  role: string;
  pay: string;
  location: string;
  match: number;
  status: (typeof statuses)[number];
};

function makeCards(): Card[][] {
  let seed = 7;
  const rnd = (n: number) => {
    seed = (seed * 9301 + 49297) % 233280;
    return Math.floor((seed / 233280) * n);
  };
  return Array.from({ length: COLUMNS }, () =>
    Array.from({ length: CARDS_PER_COLUMN }, () => {
      const company = cardCompanies[rnd(cardCompanies.length)];
      const status = statuses[rnd(statuses.length)];
      const match = 72 + rnd(27);
      return {
        company,
        status,
        match,
        pay: pay[rnd(pay.length)],
        role: roles[rnd(roles.length)],
        location: company.locations[rnd(company.locations.length)],
      };
    }),
  );
}

const columns = makeCards();

function JobCard({ card }: { card: Card }) {
  const { company } = card;
  return (
    <div className="job">
      <div className="job-top">
        <span className="co" style={{ background: company.color }}>
          <svg viewBox={company.viewBox} width="18" height="18" fill="#fff" aria-hidden="true">
            <path d={company.path} />
          </svg>
        </span>
        <span className="job-co">
          {company.name}
          <br />
          {card.pay}
        </span>
      </div>
      <h4>{card.role}</h4>
      <div className="job-meta">{card.location}</div>
      <div className="job-foot">
        <span className="match" style={{ "--m": `${card.match}%` } as CSSProperties}>
          <i />
          {card.match}%
        </span>
        <span className={`pill ${card.status[0]}`}>{card.status[1]}</span>
      </div>
    </div>
  );
}

export default function JobWall() {
  return (
    <div className="wall" aria-hidden="true">
      <div className="wall-inner">
        {columns.map((cards, c) => (
          <div className="col" key={c}>
            {[...cards, ...cards].map((card, i) => (
              <JobCard card={card} key={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
