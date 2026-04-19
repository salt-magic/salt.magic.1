const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, BorderStyle, Header, Footer, PageNumber } = require('docx');

const IMG_DIR = String.raw`c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic\outputs\section-screenshots`;
const OUT = String.raw`c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic\outputs\Salt-Magic-BLOG-Only.docx`;

const sections = [
  {
    title: "B1. Blog Listing Page",
    screenshots: ["blog-01-listing-top.png", "blog-02-listing-bottom.png"],
    copy: [
      "[Eyebrow] SALT.MAGIC BLOG",
      "[H1] Hydration science & daily wellness",
      "[Body] Evidence-based insights on minerals, hydration, and why what you drink every day matters more than you think.",
      "",
      "March 26, 2026 \u2014 Why 85% of Thai Water is Dead Water \u2014 Most bottled water in Thailand goes through reverse osmosis, stripping away the very minerals your body needs. Here\u2019s what that means for your health.",
      "March 24, 2026 \u2014 Wellness vs Sports Electrolytes: Why Daily Minerals Matter More \u2014 Sports electrolytes are designed for athletes recovering from intense workouts. But what about the other 360 days a year?"
    ],
    note: ""
  },
  {
    title: "B2. Article: Why 85% of Thai Water is Dead Water",
    screenshots: ["blog-03-article1-hero.png", "blog-04-article1-body.png", "blog-05-article1-end.png"],
    copy: [
      "[Category] HYDRATION SCIENCE",
      "[Date] March 26, 2026",
      "[H1] Why 85% of Thai Water is Dead Water",
      "[Read time] 4 min read",
      "",
      "[Intro] Walk into any convenience store in Thailand and you\u2019ll find shelves lined with \u201Cpurified\u201D water. Crystal clear. Lab-tested. Safe to drink. But there\u2019s something missing \u2014 literally.",
      "",
      "[H2] The Reverse Osmosis Problem",
      "Approximately 85% of bottled water in Thailand undergoes reverse osmosis (RO) filtration. This process forces water through a semi-permeable membrane, removing contaminants like bacteria, heavy metals, and pesticides. That\u2019s the good part.",
      "The problem? RO doesn\u2019t discriminate. It strips out everything \u2014 including the essential minerals your body depends on. Calcium, magnesium, potassium, sodium \u2014 all reduced to near-zero levels. The result is what scientists call \u201Cdead water\u201D: purified but nutritionally empty.",
      "",
      "[H2] Why Minerals in Water Matter",
      "Your body uses magnesium in over 300 enzymatic reactions. It regulates muscle function, nerve signaling, blood sugar, and blood pressure. Potassium keeps your heart rhythm steady. Sodium maintains fluid balance.",
      "The WHO has raised concerns about demineralized water, noting that long-term consumption may contribute to mineral deficiency. A 2019 study found that populations drinking low-mineral water showed higher rates of cardiovascular issues.",
      "[Pull Quote] 50% of people worldwide are magnesium deficient. In Thailand, where RO water dominates and tropical heat increases mineral loss through sweat, the number is likely higher.",
      "",
      "[H2] The Hidden Cost of \u201CPure\u201D Water",
      "Most people assume that if their water is clean, it\u2019s healthy. But clean and healthy aren\u2019t the same thing. You can drink 2-3 liters of RO water per day and still be chronically under-mineralized.",
      "Symptoms of mineral deficiency are easy to dismiss: fatigue, muscle cramps, poor sleep, brain fog, irregular heartbeat. They creep in slowly. Most people blame stress, age, or lifestyle \u2014 never their water.",
      "",
      "[H2] What You Can Do",
      "The simplest solution is to add minerals back. Not through sugary sports drinks or flavored electrolyte packets designed for athletes \u2014 but through a clean, daily mineral supplement that dissolves invisibly in any water.",
      "Salt.Magic was created for exactly this purpose: 312mg of magnesium, plus potassium and sodium, in a flavorless 2-gram serving. No sugar, no additives, no taste. Just the minerals your water should have had in the first place.",
      "Because the water you drink every day shouldn\u2019t be working against you."
    ],
    note: ""
  },
  {
    title: "B3. Article: Wellness vs Sports Electrolytes",
    screenshots: ["blog-06-article2-hero.png", "blog-07-article2-body.png", "blog-08-article2-end.png"],
    copy: [
      "[Category] LIFESTYLE",
      "[Date] March 24, 2026",
      "[H1] Wellness vs Sports Electrolytes: Why Daily Minerals Matter More",
      "[Read time] 3 min read",
      "",
      "[Intro] When most people think \u201Celectrolytes,\u201D they picture sports drinks, gym bags, and post-workout recovery. But electrolytes aren\u2019t just for athletes \u2014 they\u2019re for everyone, every day.",
      "",
      "[H2] The 365 vs 3-5 Problem",
      "Sports electrolyte brands market to a specific use case: intense exercise. Their products are formulated for 3-5 workouts per week. They contain sugar for quick energy, artificial flavors to mask mineral taste, and doses calibrated for acute recovery.",
      "But your body doesn\u2019t only need electrolytes when you exercise. Magnesium, potassium, and sodium are required for hundreds of daily functions \u2014 from nerve signaling to muscle relaxation to maintaining heart rhythm. These processes happen 365 days a year, not just on gym days.",
      "[Pull Quote] Wellness electrolytes are a daily essential. Sports electrolytes are an occasional supplement. The difference in customer lifetime value? 4.4x.",
      "",
      "[H2] The Sugar Question",
      "Most sports electrolytes contain 11-27 grams of added sugar per serving. That\u2019s by design \u2014 athletes need rapid glucose during and after exercise. But for daily wellness use, that sugar becomes a liability.",
      "Drinking a sugary electrolyte mix every morning isn\u2019t hydration \u2014 it\u2019s a habit that adds 100+ grams of unnecessary sugar to your weekly intake. Over a year, that\u2019s over 5 kilograms of sugar from your \u201Chealth\u201D drink alone.",
      "",
      "[H2] Who Needs Daily Minerals?",
      "The short answer: everyone. But some groups feel the impact more acutely:",
      "\u2022 Office workers spending 8+ hours in air conditioning lose minerals through dehydration without realizing it",
      "\u2022 Parents managing kids, meals, and schedules rarely drink enough mineralized water",
      "\u2022 Travelers and expats in tropical climates lose electrolytes through sweat at 2-3x the rate",
      "\u2022 Older adults absorb fewer minerals from food and need supplementation",
      "\u2022 Fasting practitioners deplete minerals rapidly without food intake",
      "",
      "[H2] The Daily Mineral Approach",
      "A wellness electrolyte should be invisible in your routine: no taste, no sugar, no complicated mixing. Just add it to your morning water and forget about it.",
      "Salt.Magic is formulated for this exact use case \u2014 312mg magnesium, zero sugar, zero flavor, designed to dissolve completely in any beverage. It\u2019s not a sports recovery product. It\u2019s a daily mineral essential for everyone who drinks water."
    ],
    note: ""
  }
];

function loadImage(filename) {
  const path = `${IMG_DIR}\\${filename}`;
  if (fs.existsSync(path)) return fs.readFileSync(path);
  console.warn(`  MISSING: ${filename}`);
  return null;
}

const children = [];

// Title
children.push(
  new Paragraph({ spacing: { before: 1200 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "BLOG", font: "Georgia", size: 56, bold: true, color: "294B6D" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [new TextRun({ text: "/blog + both articles", font: "Arial", size: 28, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Copy this content into the main review document", font: "Arial", size: 22, color: "999999", italics: true })] })
);

for (const section of sections) {
  children.push(new Paragraph({ pageBreakBefore: true, children: [] }));
  children.push(new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: section.title, font: "Georgia", size: 36, bold: true, color: "294B6D" })] }));

  for (const img of section.screenshots) {
    const data = loadImage(img);
    if (data) {
      let imgW = 680, imgH = 425;
      if (data.length > 24 && data[0] === 0x89 && data[1] === 0x50) {
        const w = data.readUInt32BE(16), h = data.readUInt32BE(20);
        imgH = Math.round((h / w) * imgW);
      }
      children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new ImageRun({ type: "png", data, transformation: { width: imgW, height: imgH }, altText: { title: section.title, description: `Screenshot of ${section.title}`, name: img } })] }));
    }
  }

  children.push(new Paragraph({ spacing: { before: 300, after: 150 }, children: [new TextRun({ text: "CURRENT COPY", font: "Arial", size: 22, bold: true, color: "294B6D" })] }));
  children.push(new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] }));

  for (const line of section.copy) {
    if (line === "") {
      children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: " ", font: "Arial", size: 16 })] }));
    } else if (line.startsWith("[")) {
      const bracketEnd = line.indexOf("]");
      children.push(new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun({ text: line.substring(0, bracketEnd + 1) + " ", font: "Arial", size: 20, bold: true, color: "666666" }),
        new TextRun({ text: line.substring(bracketEnd + 2), font: "Arial", size: 20, color: "333333" })
      ] }));
    } else if (line.startsWith("\u2022")) {
      children.push(new Paragraph({ spacing: { after: 80 }, indent: { left: 360 }, children: [new TextRun({ text: line, font: "Arial", size: 20, color: "333333" })] }));
    } else {
      children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: line, font: "Arial", size: 20, color: "333333" })] }));
    }
  }

  if (section.note) {
    children.push(new Paragraph({ spacing: { before: 200, after: 100 }, children: [
      new TextRun({ text: "NOTE: ", font: "Arial", size: 20, bold: true, color: "CC6600" }),
      new TextRun({ text: section.note, font: "Arial", size: 20, color: "CC6600", italics: true })
    ] }));
  }

  children.push(new Paragraph({ spacing: { before: 400, after: 150 }, children: [new TextRun({ text: "YOUR NOTES / EDITS", font: "Arial", size: 22, bold: true, color: "294B6D" })] }));
  children.push(new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] }));
  for (let i = 0; i < 8; i++) {
    children.push(new Paragraph({ spacing: { after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "EEEEEE" } }, children: [new TextRun({ text: " ", font: "Arial", size: 20 })] }));
  }
}

const doc = new Document({
  styles: { default: { document: { run: { font: "Arial", size: 22 } } } },
  sections: [{ properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } }, children }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUT, buffer);
  console.log(`Done! ${(buffer.length / 1024).toFixed(0)} KB \u2014 ${OUT}`);
});
