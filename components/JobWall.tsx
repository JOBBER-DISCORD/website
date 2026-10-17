import type { CSSProperties } from "react";
import Image from "next/image";
import { cardCompanies } from "@/lib/companies";
import { jobCard, pill } from "@/lib/styles";

const statuses = [
  ["found", "Found"],
  ["applied", "Applied"],
  ["applied", "Applied"],
  ["interview", "Interview"],
  ["applied", "Applied"],
  ["offer", "Offer"],
] as const;

const COLUMNS = 7;
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
  const shuffled = () => {
    const companies = [...cardCompanies];
    for (let i = companies.length - 1; i > 0; i--) {
      const j = rnd(i + 1);
      [companies[i], companies[j]] = [companies[j], companies[i]];
    }
    return companies;
  };
  // Deal companies from shuffled decks so every company shows up before any repeats,
  // and never twice in the same column.
  const deck: Card["company"][] = [];
  const nextCompany = (inColumn: Set<Card["company"]>) => {
    let i = deck.findLastIndex((company) => !inColumn.has(company));
    if (i === -1) {
      deck.unshift(...shuffled());
      i = deck.findLastIndex((company) => !inColumn.has(company));
    }
    return deck.splice(i, 1)[0];
  };
  return Array.from({ length: COLUMNS }, () => {
    const inColumn = new Set<Card["company"]>();
    return Array.from({ length: CARDS_PER_COLUMN }, () => {
      const company = nextCompany(inColumn);
      inColumn.add(company);
      const role = company.roles[rnd(company.roles.length)];
      const status = statuses[rnd(statuses.length)];
      const match = 72 + rnd(27);
      return {
        company,
        status,
        match,
        pay: role.pay,
        role: role.title,
        location: role.locations[rnd(role.locations.length)],
      };
    });
  });
}

const columns = makeCards();

function columnAnimation(index: number): CSSProperties {
  const n = index + 1;
  return {
    animationDuration: n % 3 === 0 ? "62s" : n % 2 === 0 ? "54s" : "46s",
    animationDirection: n % 2 === 0 ? "reverse" : "normal",
  };
}

function JobCard({ card }: { card: Card }) {
  const { company } = card;
  return (
    <div className={`${jobCard.card} shadow-[0_1px_0_var(--line)]`}>
      <div className={jobCard.top}>
        <Image
          className={`${jobCard.logo} object-cover`}
          src={company.logo}
          alt=""
          width={34}
          height={34}
        />
        <span className={jobCard.company}>
          {company.name}
          <br />
          {card.pay}
        </span>
      </div>
      <h4 className={`${jobCard.title} font-display`}>{card.role}</h4>
      <div className={jobCard.meta}>{card.location}</div>
      <div className={jobCard.foot}>
        <span className={jobCard.match} style={{ "--m": `${card.match}%` } as CSSProperties}>
          <i className={jobCard.matchBar} />
          {card.match}%
        </span>
        <span className={pill(card.status[0])}>{card.status[1]}</span>
      </div>
    </div>
  );
}

export default function JobWall() {
  return (
    <div
      className="relative mt-14 h-[560px] select-none [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_70%,transparent)] md:h-[720px]"
      aria-hidden="true"
    >
      {/* Tilt around the middle of the visible strip, not the middle of the very tall grid, so it stays centred. */}
      <div className="absolute -top-10 left-1/2 grid w-[1750px] origin-[50%_320px] grid-cols-7 gap-4 [transform:translateX(-50%)_rotate(-6deg)_skewX(4deg)] md:origin-[50%_400px]">
        {columns.map((cards, c) => (
          <div
            className="flex animate-rise flex-col gap-4 motion-reduce:animate-none"
            style={columnAnimation(c)}
            key={c}
          >
            {[...cards, ...cards].map((card, i) => (
              <JobCard card={card} key={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
