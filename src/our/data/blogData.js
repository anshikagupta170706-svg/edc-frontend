// Weekly Entrepreneurship Series: "From Campus Problem to First Venture".
//
// Static content for the EDC JSSUN blog (NEC Weekly Blog task). Text is taken
// verbatim from the NEC handoff PDF.
//
// ADDING A POST (parts 4 and 5): append an object with the same shape to
// `blogPosts` below. The index page, the post page and the Previous / Next
// links are all driven by this array, so no other file needs to change.
//
// DATES (important):
//   - `editionLabel` / `editionDate` are the series edition the article belongs
//     to. They organise the series; they are NOT the publication date.
//   - `publishedOn` is the date the post actually went live on the website.
//     Set it to the real deploy date. Do not backdate it.

// Actual first-publication date on the website (YYYY-MM-DD).
export const PUBLISHED_ON = '2026-10-11';

export const blogPosts = [
  {
    slug: 'find-a-problem-worth-solving',
    part: 1,
    totalParts: 5,
    eyebrow: 'FROM CAMPUS PROBLEM TO FIRST VENTURE / PART 1 OF 5',
    title: 'Find a Problem Worth Solving',
    author: 'EDC JSSUN',
    editionLabel: '16 September 2026',
    publishedOn: PUBLISHED_ON,
    editionDate: '2026-09-16',
    intro: [
      'A startup idea can begin with something ordinary: a student looking for an affordable textbook while another student has the same book sitting unused. The interesting question is not immediately how to build an app. It is why those two people have not already found each other. Entrepreneurship begins when curiosity about an inconvenience becomes a serious effort to understand it.',
    ],
    sections: [
      {
        heading: 'Start with a moment, not a market',
        paragraphs: [
          'For this EDC JSSUN series, imagine a student team exploring a campus textbook exchange. This is a hypothetical example that we will develop across five weekly editions. Saying that the idea serves "all students" is too broad. A more useful starting point is first-year students searching for specific textbooks during the opening weeks of a semester. That identifies a person, a situation and a time when the problem matters.',
          'Next, separate the visible complaint from its possible causes. "Books are expensive" might describe a price problem. "I cannot find the right edition" describes a matching problem. "I do not trust the seller" describes a confidence problem. Each would require a different response. A large catalogue will not help much if students are uncertain whether the listed books are still available.',
        ],
      },
      {
        heading: 'Look at what people already do',
        paragraphs: [
          'Existing workarounds are useful clues. Students might ask seniors, borrow from the library, browse group messages or buy new copies. These alternatives are competitors even if none is a startup. Record where each option works well and where people get stuck. If a group message already solves the problem reliably, a new service needs a clear reason to exist.',
          'Keep observations separate from guesses. "A student contacted three sellers before finding an available copy" is an observation if you actually witnessed or heard that account. "Everyone wants a marketplace" is an assumption. A simple notebook with columns for the problem, affected user, current workaround and unanswered question can prevent an attractive idea from turning into an unsupported conclusion.',
        ],
      },
      {
        heading: 'Choose one problem to investigate',
        paragraphs: [
          'Compare possible problems using three questions: Does this happen repeatedly? Does it cost people meaningful time, money or effort? Can our team reach the people affected? Choose an accessible problem with a specific user group. A student venture does not need to solve every campus inconvenience at once; it needs an opportunity it can examine honestly.',
        ],
      },
      {
        heading: "This week's challenge",
        paragraphs: [
          'Write one sentence: "For [specific users], [problem] occurs during [situation], and the current workaround falls short because [reason]." Mark any unverified parts as assumptions. Then identify five people who have recently faced that situation. In the next edition, we will use conversations to discover whether the problem is strong enough to pursue.',
        ],
      },
    ],
  },
  {
    slug: 'replace-assumptions-with-conversations',
    part: 2,
    totalParts: 5,
    eyebrow: 'FROM CAMPUS PROBLEM TO FIRST VENTURE / PART 2 OF 5',
    title: 'Replace Assumptions with Conversations',
    author: 'EDC JSSUN',
    editionLabel: '23 September 2026',
    publishedOn: PUBLISHED_ON,
    editionDate: '2026-09-23',
    intro: [
      '"That sounds like a great idea" is pleasant feedback, but it does not tell a student founder what to build. People may encourage a friend without needing the proposed service. After identifying a problem in our first edition, the next step is to learn how people actually experience it. A useful conversation produces a clearer picture of someone\'s behaviour, including reasons the idea might not work.',
    ],
    sections: [
      {
        heading: 'Ask about the last time',
        paragraphs: [
          'Return to our hypothetical campus textbook exchange. Instead of asking, "Would you use our platform?", ask, "Tell me about the last textbook you needed. Where did you look first? What happened next?" Follow up on the edition, condition, price, time spent and final outcome. Questions about a recent experience are easier to answer concretely than predictions about a future product.',
          "Speak to both sides of the exchange. Buyers may care about finding the exact title quickly; sellers may care about avoiding repeated messages and missed meetings. If the team listens only to buyers, it could design a convenient catalogue that sellers have little reason to maintain. Also talk to people beyond the founding team's close friends, including those satisfied with existing alternatives.",
        ],
      },
      {
        heading: 'Listen for differences, not just agreement',
        paragraphs: [
          'Ask permission before taking identifiable notes or recording. Collect only information needed for the research. In your notes, separate what someone said from your interpretation. "I borrowed a copy because I only needed it for two weeks" does not automatically mean that person would buy a discounted copy. It might point towards a different need, or towards no opportunity for this service at all.',
          'After several conversations, group recurring difficulties and exceptions. Perhaps availability matters more than price, or demand appears only at the start of a semester. A small set of interviews offers clues, not proof about the entire campus. Record the number of people spoken to and how they were selected so that early enthusiasm does not become an exaggerated market claim.',
        ],
      },
      {
        heading: 'Move from opinions to a small commitment',
        paragraphs: [
          'Once you understand the problem, describe one narrow offer: a manually checked list of available textbooks for a particular course. Ask whether a buyer wants a relevant match or a seller wants to submit one real listing. Explain exactly what the trial can deliver. Participation is more informative than a compliment, although signing up still does not guarantee a completed exchange.',
        ],
      },
      {
        heading: "This week's challenge",
        paragraphs: [
          'Have five short conversations and document one lesson that challenged your original idea. Write the riskiest remaining assumption and a practical way to test it. For the textbook example, that assumption might be whether accurate listings lead to completed handovers. Next week, we will turn that question into a small experiment before building a full product.',
        ],
      },
    ],
  },
  {
    slug: 'build-the-smallest-useful-experiment',
    part: 3,
    totalParts: 5,
    eyebrow: 'FROM CAMPUS PROBLEM TO FIRST VENTURE / PART 3 OF 5',
    title: 'Build the Smallest Useful Experiment',
    author: 'EDC JSSUN',
    editionLabel: '30 September 2026',
    publishedOn: PUBLISHED_ON,
    editionDate: '2026-09-30',
    intro: [
      'A team can spend weeks choosing colours, designing a logo and building login screens without learning whether anyone needs its service. The third step in our EDC JSSUN series is to make something small enough to test quickly and useful enough to reveal real behaviour. A minimum viable product, or MVP, should help answer a specific question about the venture.',
    ],
    sections: [
      {
        heading: 'Define the uncertainty first',
        paragraphs: [
          'For our hypothetical textbook exchange, suppose interviews suggest that unreliable availability is a major frustration. The experiment could ask: Will students complete exchanges when listings are checked and introductions are coordinated? A working answer does not require an app. A short intake form, a carefully maintained list and manual introductions may be enough for a small pilot.',
          'Limit the trial to one course and a manageable number of listings. Ask sellers for the title, edition, condition, expected price and current availability. Show buyers enough information to decide whether to request a match. Keep phone numbers and other personal details out of a public catalogue; share contact information only with permission. Minimum scope should still include clear terms and respectful handling of information.',
        ],
      },
      {
        heading: 'Decide what you will measure',
        paragraphs: [
          'Before inviting participants, define the steps: a valid request, a suitable match, an agreed meeting and a confirmed handover. Count each separately. Ten requests and two completed exchanges tell a different story from ten completed exchanges. Ask why people drop out instead of assuming every incomplete transaction is a technical problem.',
          'Set a small, explicit learning target. For example, the team might aim for three completed handovers from ten valid requests within seven days, with no unresolved complaints. These are illustrative trial thresholds, not industry benchmarks. Choose a target appropriate to the experiment before seeing the results. If a threshold is missed, examine what happened rather than quietly redefining success.',
        ],
      },
      {
        heading: 'Improve the point where users struggle',
        paragraphs: [
          'If students request books but cannot agree on collection times, the next change might be a shared handover window. If listings show the wrong editions, improve the intake check. If nobody requests a book, reconsider the offer, audience or timing before adding features. A failed test can still be useful when it rules out a weak assumption at low cost.',
          "Keep a short experiment record: the assumption, trial dates, people reached, outcomes, complaints and next decision. Distinguish actual results from targets. This record helps teammates understand what they learned and prevents the venture's story from drifting away from its evidence.",
        ],
      },
      {
        heading: "This week's challenge",
        paragraphs: [
          'Design a seven-day pilot with one core promise, one main question and a clear limit on time and spending. State what would make you continue, change direction or stop. The next edition will examine whether a useful service can also cover its costs and operate reliably with a student team.',
        ],
      },
    ],
  },
];

export const SERIES_TITLE = 'From Campus Problem to First Venture';
export const SERIES_NAME = 'Weekly Entrepreneurship Series';

export const getPostBySlug = slug => blogPosts.find(p => p.slug === slug);

// Returns { prev, next } neighbours in series order (either may be undefined).
export const getAdjacentPosts = slug => {
  const sorted = [...blogPosts].sort((a, b) => a.part - b.part);
  const i = sorted.findIndex(p => p.slug === slug);
  return { prev: sorted[i - 1], next: sorted[i + 1] };
};

export const formatLongDate = iso =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const getReadingMinutes = post => {
  const words = [
    ...post.intro,
    ...post.sections.flatMap(s => [s.heading, ...s.paragraphs]),
  ]
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};
