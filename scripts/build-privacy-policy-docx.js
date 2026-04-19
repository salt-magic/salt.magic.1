const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, ExternalHyperlink,
} = require('docx');

const BODY_FONT = 'Calibri';
const HEAD_FONT = 'Calibri';
const NAVY = '294B6D';
const INK = '3C3028';
const MUTED = '8B8680';
const GOLD = 'D4BFAA';
const RULE = 'CCCCCC';
const HIGHLIGHT_BG = 'FFF4B8';
const FUTURE_BG = 'F2F0ED';

const border = { style: BorderStyle.SINGLE, size: 4, color: RULE };
const cellBorders = { top: border, bottom: border, left: border, right: border };

const p = (opts) => new Paragraph(opts);
const run = (text, extra = {}) => new TextRun({ text, font: BODY_FONT, ...extra });

function body(text, extra = {}) {
  return p({
    spacing: { after: 120, line: 300 },
    children: [run(text, extra)],
  });
}

function bullet(children) {
  return p({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 80, line: 300 },
    children,
  });
}

function h2(num, title) {
  return p({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 160 },
    children: [new TextRun({ text: `${num}. ${title}`, font: HEAD_FONT, bold: true, size: 28, color: NAVY })],
  });
}

function h3(title) {
  return p({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text: title, font: HEAD_FONT, bold: true, size: 24, color: NAVY })],
  });
}

function futureBlock(lines) {
  const paras = [];
  paras.push(p({
    spacing: { before: 120, after: 60 },
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: FUTURE_BG },
    border: { left: { style: BorderStyle.SINGLE, size: 18, color: MUTED, space: 8 } },
    children: [new TextRun({
      text: 'FUTURE — uncomment when activated',
      font: BODY_FONT, italics: true, bold: true, color: MUTED, size: 18, allCaps: true,
    })],
  }));
  lines.forEach((line) => {
    paras.push(p({
      spacing: { after: 60, line: 280 },
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: FUTURE_BG },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: MUTED, space: 8 } },
      children: [new TextRun({ text: line, font: BODY_FONT, italics: true, color: MUTED, size: 20 })],
    }));
  });
  paras.push(p({ spacing: { after: 120 }, children: [new TextRun('')] }));
  return paras;
}

function noteCallout() {
  return p({
    spacing: { before: 120, after: 240 },
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FFF8E6' },
    border: {
      top: { style: BorderStyle.SINGLE, size: 6, color: GOLD },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD },
      left: { style: BorderStyle.SINGLE, size: 18, color: GOLD, space: 8 },
      right: { style: BorderStyle.SINGLE, size: 6, color: GOLD },
    },
    children: [
      new TextRun({ text: 'NOTE (remove before publishing): ', font: BODY_FONT, bold: true, color: INK, size: 20 }),
      new TextRun({
        text: 'Draft version. Adapt to the actual tools, services and data flows used on your website and have it reviewed by a qualified Thai lawyer before publication.',
        font: BODY_FONT, color: INK, size: 20,
      }),
    ],
  });
}

function tbdRun(text) {
  return new TextRun({
    text,
    font: BODY_FONT,
    bold: true,
    color: '8B5A00',
    highlight: 'yellow',
  });
}

function rule() {
  return p({
    spacing: { before: 240, after: 240 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE } },
    children: [new TextRun('')],
  });
}

function tableCell(text, opts = {}) {
  const { bold = false, shade = null, width = 4680 } = opts;
  return new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    ...(shade ? { shading: { type: ShadingType.CLEAR, color: 'auto', fill: shade } } : {}),
    children: [p({
      spacing: { before: 40, after: 40 },
      children: [new TextRun({ text, font: BODY_FONT, bold, size: 20 })],
    })],
  });
}

const children = [];

// TITLE
children.push(p({
  alignment: AlignmentType.LEFT,
  spacing: { after: 80 },
  children: [new TextRun({ text: 'Privacy Policy', font: HEAD_FONT, bold: true, size: 56, color: NAVY })],
}));
children.push(p({
  spacing: { after: 40 },
  children: [new TextRun({ text: 'SALT.MAGIC CO., LTD.', font: BODY_FONT, bold: true, size: 24, color: INK })],
}));
children.push(p({
  spacing: { after: 200 },
  children: [new TextRun({ text: 'Last updated: April 2026', font: BODY_FONT, italics: true, size: 22, color: MUTED })],
}));

// NOTE CALLOUT
children.push(noteCallout());
children.push(rule());

// §1 Data Controller
children.push(h2(1, 'Data Controller'));
children.push(p({ spacing: { after: 60 }, children: [new TextRun({ text: 'SALT.MAGIC CO., LTD.', font: BODY_FONT, bold: true })] }));
children.push(body('45/57 Moo 3, Maret'));
children.push(body('Koh Samui, Suratthani 84310'));
children.push(body('Thailand'));
children.push(p({ spacing: { before: 120, after: 60 }, children: [run('Tax ID: ', { bold: true }), run('0845567024315')] }));
children.push(p({ spacing: { after: 60 }, children: [run('Email: ', { bold: true }), new ExternalHyperlink({ children: [new TextRun({ text: 'leo@salt-magic.com', font: BODY_FONT, color: '0563C1', underline: {} })], link: 'mailto:leo@salt-magic.com' })] }));
children.push(p({ spacing: { after: 60 }, children: [run('Phone: ', { bold: true }), run('+66 82 602 0486')] }));
children.push(p({ spacing: { after: 60 }, children: [run('Website: ', { bold: true }), new ExternalHyperlink({ children: [new TextRun({ text: 'https://salt-magic.com', font: BODY_FONT, color: '0563C1', underline: {} })], link: 'https://salt-magic.com' })] }));
children.push(p({ spacing: { after: 120 }, children: [run('Director: ', { bold: true }), tbdRun('[TBD: Leo — please insert full legal name as registered]')] }));
children.push(rule());

// §2
children.push(h2(2, 'Applicable Law'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('We process personal data in accordance with the Thai '),
    run('Personal Data Protection Act B.E. 2562 (2019)', { bold: true }),
    run(' ("PDPA"). Our company is registered in Thailand and our services are not directed at the European Union market.'),
  ],
}));
children.push(rule());

// §3
children.push(h2(3, 'Personal Data We Collect'));
children.push(body('Depending on how you use our website, we may process the following categories of personal data:'));
children.push(bullet([run('Technical access data: ', { bold: true }), run('IP address, browser type, operating system, referrer URL, time of access')]));
children.push(bullet([run('Contact / inquiry form data: ', { bold: true }), run('when you submit our contact or partner inquiry form, or contact us via email (name, email address, company, role, content of your message)')]));
children.push(bullet([run('Newsletter data: ', { bold: true }), run('email address, and optionally first name, if you subscribe to our newsletter — see Section 8')]));
children.push(bullet([run('Cookie and tracking data', { bold: true }), run(' (see Section 7)')]));
children.push(p({
  spacing: { before: 120, after: 120, line: 300 },
  children: [
    run('We do '), run('not', { bold: true }),
    run(' process booking or reservation data, and we do '), run('not', { bold: true }),
    run(' process payment data — product purchases are fulfilled externally via Lazada (see Section 9).'),
  ],
}));
children.push(rule());

// §4 Table
children.push(h2(4, 'Purposes and Legal Bases under PDPA'));
const tableRows = [
  new TableRow({
    tableHeader: true,
    children: [
      tableCell('Purpose', { bold: true, shade: 'EEEAE3', width: 6000 }),
      tableCell('PDPA Legal Basis', { bold: true, shade: 'EEEAE3', width: 3360 }),
    ],
  }),
  ...[
    ['Operation and provision of the website', 'Sec. 24(5) – legitimate interest'],
    ['Responding to contact and partner inquiries', 'Sec. 24(3) – pre-contractual / Sec. 24(5)'],
    ['Newsletter distribution', 'Sec. 19 – consent'],
    ['Analytics, marketing, non-essential cookies (once activated)', 'Sec. 19 – consent'],
    ['Compliance with legal obligations (Thai tax, accounting, commercial law)', 'Sec. 24(6) – legal obligation'],
  ].map(([a, b]) => new TableRow({
    children: [tableCell(a, { width: 6000 }), tableCell(b, { width: 3360 })],
  })),
];
children.push(new Table({
  columnWidths: [6000, 3360],
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  rows: tableRows,
}));
children.push(p({ spacing: { after: 120 }, children: [new TextRun('')] }));
children.push(rule());

// §5
children.push(h2(5, 'Server Log Files'));
children.push(body('When you visit our website, our hosting provider (Vercel Inc.) automatically collects the following data transmitted by your browser:'));
[
  'Browser type and version',
  'Operating system',
  'Referrer URL',
  'Hostname of the accessing device',
  'Time of the server request',
  'IP address',
].forEach((t) => children.push(bullet([run(t)])));
children.push(body('These data are not combined with other data sources and are used to ensure the secure and stable operation of our website.'));
children.push(p({
  spacing: { before: 120, after: 120, line: 300 },
  children: [
    run('Retention: ', { bold: true }),
    run('typically '), run('7 to 30 days', { bold: true }),
    run('; thereafter deleted or anonymized, unless retention is required for security reasons. Statutory logging requirements under the Thai '),
    run('Computer Crime Act', { bold: true }),
    run(' (up to 90 days) remain unaffected.'),
  ],
}));
children.push(rule());

// §6
children.push(h2(6, 'Contact'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('You can contact us either directly via email at '),
    run('leo@salt-magic.com', { bold: true }),
    run(', or by submitting the contact / partner inquiry form on our website. In both cases, we process the information you provide (name, email address, company, role, content of your message) in order to respond to your inquiry and to handle any follow-up questions.'),
  ],
}));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('Email delivery provider: ', { bold: true }),
    run('form submissions from our website are transmitted to us via '),
    run('Resend', { bold: true }),
    run(' (Resend, Inc., operated out of the United States — '),
    new ExternalHyperlink({ children: [new TextRun({ text: 'https://resend.com', font: BODY_FONT, color: '0563C1', underline: {} })], link: 'https://resend.com' }),
    run('). Resend acts as our transactional email service provider and processes form content and email metadata solely for the purpose of delivering the message to us.'),
  ],
}));
children.push(bullet([run('Legal basis: ', { bold: true }), run('Sec. 24(3) PDPA (pre-contractual / contractual) or Sec. 24(5) PDPA (legitimate interest).')]));
children.push(bullet([run('Retention: ', { bold: true }), run('until the purpose ceases to apply, at the latest '), run('36 months', { bold: true }), run(', unless statutory retention obligations apply.')]));
children.push(bullet([run('Cross-border transfer: ', { bold: true }), run('data transmitted via the form leaves Thailand and is processed on servers of Resend in the United States. Appropriate safeguards under Sec. 28 PDPA apply (see Section 10).')]));
children.push(rule());

// §7
children.push(h2(7, 'Cookies and Tracking Technologies'));
children.push(body('Our website uses a minimal set of technologies. We distinguish between:'));
children.push(bullet([run('Strictly necessary', { bold: true }), run(' (required for the operation of the website). Legal basis: Sec. 24(5) PDPA (legitimate interest).')]));
children.push(bullet([run('Functional, analytics and marketing', { bold: true }), run(' (currently not in use — see 7.2). Once activated, only on the basis of your '), run('consent', { bold: true }), run(' (Sec. 19 PDPA), which you may withdraw at any time with effect for the future.')]));

children.push(h3('7.1 Strictly Necessary'));
children.push(bullet([run('Session cookies used by the website framework for navigation state and form persistence during a single visit.')]));
children.push(bullet([run('Build-time font delivery: typography (Playfair Display and Inter) is loaded from Google Fonts '), run('at build time only', { bold: true }), run(' via Next.js\' '), run('next/font', { font: 'Consolas' }), run(' mechanism and served as self-hosted static assets. No runtime request is sent to Google servers when you view a page, and no cookies are set by Google as a result of loading fonts.')]));

children.push(h3('7.2 Analytics and Marketing'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [run('Currently: none.', { bold: true }), run(' No analytics, tracking pixels, or marketing technologies are deployed on this website at this time.')],
}));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('If analytics tools, tracking pixels, embedded maps or video players are added in the future, this Privacy Policy will be updated accordingly and a cookie consent mechanism will be deployed in accordance with '),
    run('Sec. 19 PDPA', { bold: true }),
    run(' before any non-essential cookie is set.'),
  ],
}));

children.push(...futureBlock([
  '7.3 Google Analytics 4 — Provider: Google LLC / Google Asia Pacific. Purpose: reach and usage analysis. IP anonymization enabled.',
  '7.4 Meta Pixel (Facebook / Instagram) — Provider: Meta Platforms, Inc. Purpose: reach measurement and retargeting.',
  '7.5 Google Maps — Provider: Google LLC. Purpose: display of our location.',
  '7.6 YouTube (embedded videos) — Provider: Google LLC. Enhanced privacy mode enabled where technically feasible.',
]));
children.push(rule());

// §8
children.push(h2(8, 'Newsletter'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('If you subscribe to our newsletter, we process your email address (and, if provided, your first name) in order to send you our marketing and content emails. The newsletter is sent using a '),
    run('double opt-in procedure', { bold: true }),
    run(': after you submit the signup form, you will receive a confirmation email, and only after you confirm the subscription will we add you to the distribution list.'),
  ],
}));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('Newsletter provider: ', { bold: true }),
    run('we use '),
    run('Mailchimp', { bold: true }),
    run(' (Intuit Mailchimp, operated by Intuit Inc., United States — '),
    new ExternalHyperlink({ children: [new TextRun({ text: 'https://mailchimp.com', font: BODY_FONT, color: '0563C1', underline: {} })], link: 'https://mailchimp.com' }),
    run(') as our email marketing platform. Your email address, first name, subscription status and basic engagement data (e.g. opens, clicks) are stored on Mailchimp\u2019s infrastructure.'),
  ],
}));
children.push(bullet([run('Legal basis: ', { bold: true }), run('Sec. 19 PDPA (consent).')]));
children.push(bullet([run('Withdrawal: ', { bold: true }), run('you may unsubscribe at any time via the unsubscribe link in every newsletter or by contacting us at leo@salt-magic.com. Withdrawal takes effect for the future and does not affect the lawfulness of processing that took place before withdrawal.')]));
children.push(bullet([run('Retention: ', { bold: true }), run('until you unsubscribe or your subscription has been inactive for a prolonged period. After unsubscribe, your email address may be retained on a suppression list to ensure that you do not receive further newsletters.')]));
children.push(bullet([run('Cross-border transfer: ', { bold: true }), run('Mailchimp processes data on servers in the United States. Appropriate safeguards under Sec. 28 PDPA apply (see Section 10).')]));
children.push(rule());

// §9
children.push(h2(9, 'External Purchase Redirects'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('Product purchases are fulfilled externally via '),
    run('Lazada', { bold: true }),
    run(' (www.lazada.co.th). When you click a "Buy" or "Shop" link on our website, you leave our domain and are bound by Lazada\'s own privacy policy and terms. We do '),
    run('not', { bold: true }),
    run(' receive or store your payment data, credit card details or shipping information for Lazada orders.'),
  ],
}));
children.push(rule());

// §10
children.push(h2(10, 'Disclosure to Third Parties and Cross-Border Transfers'));
children.push(body('We disclose personal data only where legally permitted or required – for example to:'));
children.push(bullet([run('IT and hosting providers', { bold: true }), run(' — '), run('Vercel Inc.', { bold: true }), run(' (United States; with Singapore and other global edge locations) provides the hosting infrastructure for our website')]));
children.push(bullet([run('Transactional email / contact-form delivery', { bold: true }), run(' — '), run('Resend, Inc.', { bold: true }), run(' (United States; https://resend.com) delivers messages you submit via our contact and partner inquiry form to us')]));
children.push(bullet([run('Newsletter platform', { bold: true }), run(' — '), run('Intuit Mailchimp', { bold: true }), run(' (Intuit Inc., United States; https://mailchimp.com) stores and distributes newsletter subscriber data')]));
children.push(bullet([run('External order fulfilment', { bold: true }), run(' — '), run('Lazada', { bold: true }), run(' (regional e-commerce platform; you are redirected to their platform to complete purchases)')]));
children.push(bullet([run('Authorities and courts, where legally required')]));
children.push(body('Additional providers will be listed here once they are integrated.'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('Some of our service providers are located outside Thailand (e.g. in Singapore or the United States). For such cross-border transfers, we ensure appropriate safeguards in accordance with '),
    run('Sec. 28 PDPA', { bold: true }),
    run(' — through suitable contractual arrangements, recognized certifications of the recipient, or, where required, your consent.'),
  ],
}));
children.push(rule());

// §11
children.push(h2(11, 'Retention Periods'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('We retain personal data only for as long as necessary for the purposes described above or as required to comply with applicable statutory retention obligations (e.g. under the Thai '),
    run('Revenue Code', { bold: true }),
    run(' and other tax and accounting regulations — typically '),
    run('5 to 10 years', { bold: true }), run(').'),
  ],
}));
children.push(rule());

// §12
children.push(h2(12, 'Your Rights under PDPA'));
children.push(body('Subject to the applicable legal requirements, you have the following rights:'));
[
  ['Right of access', ' to your personal data held by us (Sec. 30 PDPA)'],
  ['Right to data portability', ' (Sec. 31 PDPA)'],
  ['Right to object', ' to processing (Sec. 32 PDPA)'],
  ['Right to erasure', ' (Sec. 33 PDPA)'],
  ['Right to restriction of processing', ' (Sec. 34 PDPA)'],
  ['Right to rectification', ' of inaccurate data (Sec. 35, 36 PDPA)'],
  ['Right to withdraw consent', ' with effect for the future (Sec. 19 PDPA)'],
  ['Right to lodge a complaint', ' with the Thai supervisory authority, the Personal Data Protection Committee (PDPC) — https://www.pdpc.or.th'],
].forEach(([head, tail]) => children.push(bullet([run(head, { bold: true }), run(tail)])));
children.push(p({
  spacing: { before: 120, after: 120, line: 300 },
  children: [
    run('To exercise your rights, please contact us at: '),
    run('leo@salt-magic.com', { bold: true }),
    run('. We respond to requests without undue delay, generally within '),
    run('30 days', { bold: true }), run('.'),
  ],
}));
children.push(rule());

// §13
children.push(h2(13, 'No Automated Decision-Making'));
children.push(body('We do not engage in automated decision-making or profiling with legal effect.'));
children.push(rule());

// §14
children.push(h2(14, 'Data Security'));
children.push(body('We implement appropriate technical and organizational measures to protect your personal data against loss, misuse and unauthorized access. Data transmission via our website is encrypted using SSL/TLS.'));
children.push(p({
  spacing: { after: 120, line: 300 },
  children: [
    run('In the event of a reportable personal data breach, we will notify the PDPC in accordance with '),
    run('Sec. 37(4) PDPA within 72 hours', { bold: true }),
    run(' of becoming aware of the breach, where required.'),
  ],
}));
children.push(rule());

// §15
children.push(h2(15, 'Changes to This Privacy Policy'));
children.push(body('We reserve the right to update this Privacy Policy to reflect legal or operational changes — in particular when new services (analytics, email marketing, contact-form backends, embedded maps or videos) are integrated into the website. The version published on our website at the time of your visit applies.'));
children.push(rule());

// §16
children.push(h2(16, 'Contact'));
children.push(body('For any questions about data protection or to exercise your rights, please contact:'));
children.push(p({ spacing: { after: 60 }, children: [run('SALT.MAGIC CO., LTD.', { bold: true })] }));
children.push(body('45/57 Moo 3, Maret'));
children.push(body('Koh Samui, Suratthani 84310'));
children.push(body('Thailand'));
children.push(p({ spacing: { before: 120, after: 120 }, children: [run('Email: ', { bold: true }), run('leo@salt-magic.com', { bold: true })] }));
children.push(p({
  spacing: { before: 160, after: 120, line: 300 },
  children: [new TextRun({
    text: '(A Data Protection Officer (DPO) under Sec. 41 PDPA is only mandatory if the core activities of the company involve regular and systematic monitoring or the processing of large volumes of sensitive personal data — which is typically not the case for a standard D2C consumer goods business.)',
    font: BODY_FONT, italics: true, color: MUTED, size: 20,
  })],
}));

const doc = new Document({
  creator: 'Salt.Magic',
  title: 'Salt.Magic Privacy Policy — Draft v1',
  styles: {
    default: { document: { run: { font: BODY_FONT, size: 22 } } },
    paragraphStyles: [
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: HEAD_FONT, size: 28, bold: true, color: NAVY },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: HEAD_FONT, size: 24, bold: true, color: NAVY },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children,
  }],
});

const outPath = path.join(__dirname, '..', 'outputs', 'Salt-Magic-Privacy-Policy-v1.docx');
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(outPath, buf);
  console.log(`Wrote ${outPath} (${buf.length} bytes)`);
});
