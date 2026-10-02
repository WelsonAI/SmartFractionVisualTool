(() => {
  "use strict";

  const translations = {
    bm: {
      appTitle: "Jom Teroka Pecahan!",
      appSubtitle: "Lihat, sentuh dan fahami bahagiannya.",
      soundOn: "Bunyi: Buka",
      soundOff: "Bunyi: Tutup",
      modeSet: "Bahagian Kumpulan",
      modeEquivalent: "Pecahan Setara",
      modeMixed: "Tak Wajar & Bercampur",
      modeHundred: "Grid Seratus",
      chapter: "D3 · Jilid 1",
      learnBySeeing: "Belajar dengan melihat",
      newQuestion: "Cuba soalan lain",
      yourTask: "Mari cuba!",
      reset: "Mula semula",
      check: "Semak",
      next: "Soalan seterusnya",
      stepLook: "Lihat keseluruhan",
      stepTouch: "Pilih bahagiannya",
      stepConnect: "Hubungkan nilainya",
      prompts: {
        set: "Tunjukkan pecahan daripada kumpulan ini.",
        equivalent: "Warnakan bahagian yang sama banyak.",
        mixed: "Bina nilai ini dengan jalur pecahan.",
        hundred: "Warnakan grid supaya nilainya sepadan."
      },
      tips: {
        set: "Penyebut menunjukkan berapa kumpulan sama besar. Pengangka menunjukkan berapa kumpulan dipilih.",
        equivalent: "Pecahan setara mempunyai saiz yang sama walaupun bilangannya berbeza.",
        mixed: "Satu jalur penuh mewakili satu keseluruhan.",
        hundred: "100 petak menghubungkan pecahan, perpuluhan dan peratus."
      },
      howTo: {
        set: "Tekan objek untuk memilih bahagiannya.",
        equivalent: "Tekan bahagian pada jalur bawah untuk mewarnakannya.",
        mixed: "Tekan kepingan dari kiri untuk membina nilainya.",
        hundred: "Tekan petak, guna butang atau gerakkan peluncur."
      },
      challengeLabels: {
        set: "Tunjukkan",
        equivalent: "Lengkapkan pecahan setara",
        mixed: "Bina model ini",
        hundred: "Tunjukkan nilai ini"
      },
      ofObjects: "daripada {total} objek",
      referenceBar: "Jalur contoh",
      yourBar: "Jalur kamu",
      whole: "Keseluruhan {number}",
      selectedObjects: "Kamu memilih {selected} daripada {total} objek.",
      selectedParts: "Kamu mewarnakan {selected} daripada {total} bahagian.",
      selectedSquares: "Diwarnakan:",
      ready: {
        set: "Lihat jumlah objek dahulu, kemudian pilih bahagiannya.",
        equivalent: "Bandingkan panjang warna pada kedua-dua jalur.",
        mixed: "Lengkapkan satu keseluruhan dahulu, kemudian bina baki bahagiannya.",
        hundred: "Setiap baris mempunyai 10 petak. Keseluruhan grid mempunyai 100 petak."
      },
      correct: "Betul!",
      wrong: {
        set: "Belum tepat. Bahagikan seluruh kumpulan kepada kumpulan yang sama besar.",
        equivalent: "Belum tepat. Pastikan panjang warna kedua-dua jalur sama.",
        mixed: "Belum tepat. Bina jalur penuh dahulu sebelum bahagian yang berikutnya.",
        hundred: "Belum tepat. Gunakan setiap baris sebagai 10 petak."
      },
      minusTen: "−10",
      minusOne: "−1",
      plusOne: "+1",
      plusTen: "+10"
    },
    zh: {
      appTitle: "一起来探索分数！",
      appSubtitle: "观察、操作，理解整体与部分。",
      soundOn: "声音：开",
      soundOff: "声音：关",
      modeSet: "一组的一部分",
      modeEquivalent: "等值分数",
      modeMixed: "假分数与带分数",
      modeHundred: "百格图",
      chapter: "三年级 · 上册",
      learnBySeeing: "从图像中理解",
      newQuestion: "换一道题",
      yourTask: "试试看！",
      reset: "重新开始",
      check: "检查",
      next: "下一题",
      stepLook: "观察整体",
      stepTouch: "选择部分",
      stepConnect: "连接不同表示法",
      prompts: {
        set: "从这一组物体中表示指定的分数。",
        equivalent: "涂出相同大小的部分。",
        mixed: "用分数条建构这个数值。",
        hundred: "涂色，使百格图符合所给的数值。"
      },
      tips: {
        set: "分母表示平均分成多少组，分子表示选了多少组。",
        equivalent: "等值分数的数字虽然不同，所表示的大小却相同。",
        mixed: "一条完整的分数条代表一个整体。",
        hundred: "100个小格可以连接分数、小数和百分比。"
      },
      howTo: {
        set: "点击物体，选择所需的部分。",
        equivalent: "点击下面分数条的格子来涂色。",
        mixed: "从左边点击小格，建构所给的数值。",
        hundred: "点击格子、使用按钮或移动滑杆。"
      },
      challengeLabels: {
        set: "请表示",
        equivalent: "完成等值分数",
        mixed: "建构这个模型",
        hundred: "请表示这个数值"
      },
      ofObjects: "在{total}个物体中",
      referenceBar: "示范分数条",
      yourBar: "你的分数条",
      whole: "整体 {number}",
      selectedObjects: "你选择了{total}个物体中的{selected}个。",
      selectedParts: "你涂了{total}等份中的{selected}份。",
      selectedSquares: "已涂色：",
      ready: {
        set: "先观察物体的总数，再选择其中的一部分。",
        equivalent: "比较两条分数条中涂色部分的长度。",
        mixed: "先完成一个整体，再建构剩下的部分。",
        hundred: "每一行有10格，整个图共有100格。"
      },
      correct: "答对了！",
      wrong: {
        set: "还不正确。尝试把整组物体平均分组。",
        equivalent: "还不正确。两条分数条的涂色长度必须相同。",
        mixed: "还不正确。先填满完整的分数条，再填下一条。",
        hundred: "还不正确。可以把每一行看成10格。"
      },
      minusTen: "−10",
      minusOne: "−1",
      plusOne: "+1",
      plusTen: "+10"
    },
    en: {
      appTitle: "Let's Explore Fractions!",
      appSubtitle: "See, touch and understand parts of a whole.",
      soundOn: "Sound: On",
      soundOff: "Sound: Off",
      modeSet: "Part of a Group",
      modeEquivalent: "Equivalent Fractions",
      modeMixed: "Improper & Mixed",
      modeHundred: "Hundred Grid",
      chapter: "Year 3 · Volume 1",
      learnBySeeing: "Learn by seeing",
      newQuestion: "Try another question",
      yourTask: "Let's try!",
      reset: "Start again",
      check: "Check",
      next: "Next question",
      stepLook: "Look at the whole",
      stepTouch: "Choose the part",
      stepConnect: "Connect the values",
      prompts: {
        set: "Show the fraction of this group.",
        equivalent: "Shade the same amount.",
        mixed: "Build this value with fraction strips.",
        hundred: "Shade the grid to match the value."
      },
      tips: {
        set: "The denominator tells how many equal groups. The numerator tells how many groups are chosen.",
        equivalent: "Equivalent fractions have the same size even when their numbers are different.",
        mixed: "One full strip represents one whole.",
        hundred: "100 squares connect fractions, decimals and percentages."
      },
      howTo: {
        set: "Tap objects to choose the required part.",
        equivalent: "Tap sections of the lower bar to shade them.",
        mixed: "Tap pieces from the left to build the value.",
        hundred: "Tap a square, use the buttons, or move the slider."
      },
      challengeLabels: {
        set: "Show",
        equivalent: "Complete the equivalent fraction",
        mixed: "Build this model",
        hundred: "Show this value"
      },
      ofObjects: "of {total} objects",
      referenceBar: "Example bar",
      yourBar: "Your bar",
      whole: "Whole {number}",
      selectedObjects: "You selected {selected} of {total} objects.",
      selectedParts: "You shaded {selected} of {total} parts.",
      selectedSquares: "Shaded:",
      ready: {
        set: "Look at the total number of objects, then choose the part.",
        equivalent: "Compare the shaded length of both bars.",
        mixed: "Complete one whole first, then build the remaining part.",
        hundred: "Each row has 10 squares. The whole grid has 100 squares."
      },
      correct: "Correct!",
      wrong: {
        set: "Not yet. Try splitting the whole group into equal groups.",
        equivalent: "Not yet. The shaded length of both bars must match.",
        mixed: "Not yet. Fill complete strips before moving to the next strip.",
        hundred: "Not yet. Use each row as a group of 10 squares."
      },
      minusTen: "−10",
      minusOne: "−1",
      plusOne: "+1",
      plusTen: "+10"
    }
  };

  const fractionChoices = [
    [1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [4, 5]
  ];
  const objectIcons = ["🍎", "⭐", "🐟", "🌼", "🧸", "🟠"];
  const hundredValues = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];

  const state = {
    lang: "bm",
    sound: true,
    mode: "set",
    question: null,
    selectedIndices: new Set(),
    selectedCount: 0,
    solved: false
  };

  let audioContext = null;

  const modeTabs = document.getElementById("modeTabs");
  const soundToggle = document.getElementById("soundToggle");
  const modeTitle = document.getElementById("modeTitle");
  const conceptTip = document.getElementById("conceptTip");
  const howToText = document.getElementById("howToText");
  const promptText = document.getElementById("promptText");
  const challengeDisplay = document.getElementById("challengeDisplay");
  const conceptStage = document.getElementById("conceptStage");
  const feedback = document.getElementById("feedback");
  const resetBtn = document.getElementById("resetBtn");
  const checkBtn = document.getElementById("checkBtn");
  const newQuestionBtn = document.getElementById("newQuestionBtn");
  const celebrationLayer = document.getElementById("celebrationLayer");

  function t() {
    return translations[state.lang];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function fractionMarkup(numerator, denominator, className = "") {
    return `<span class="fraction ${className}" aria-label="${numerator}/${denominator}"><span class="numerator">${numerator}</span><span class="fraction-line"></span><span class="denominator">${denominator}</span></span>`;
  }

  function mixedMarkup(whole, numerator, denominator) {
    return `<span class="mixed-number"><span class="whole-number">${whole}</span>${fractionMarkup(numerator, denominator)}</span>`;
  }

  function formatTemplate(template, values) {
    return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, String(value)), template);
  }

  function decimalFor(count) {
    return (count / 100).toFixed(2).replace(/0$/, "");
  }

  function generateQuestion() {
    celebrationLayer.replaceChildren();
    let question;

    if (state.mode === "set") {
      const [numerator, denominator] = pick(fractionChoices);
      const multiplier = randomInt(2, 3);
      question = {
        numerator,
        denominator,
        total: denominator * multiplier,
        expected: numerator * multiplier,
        icon: pick(objectIcons)
      };
    } else if (state.mode === "equivalent") {
      const [numerator, denominator] = pick(fractionChoices);
      const possibleMultipliers = denominator <= 3 ? [2, 3] : [2];
      const multiplier = pick(possibleMultipliers);
      question = {
        numerator,
        denominator,
        equivalentNumerator: numerator * multiplier,
        equivalentDenominator: denominator * multiplier,
        expected: numerator * multiplier
      };
    } else if (state.mode === "mixed") {
      const denominator = randomInt(2, 5);
      const whole = randomInt(1, 2);
      const remainder = randomInt(1, denominator - 1);
      question = {
        denominator,
        whole,
        remainder,
        improperNumerator: whole * denominator + remainder,
        unitCount: whole + 1,
        direction: Math.random() < .5 ? "improper" : "mixed",
        expected: whole * denominator + remainder
      };
    } else {
      const count = pick(hundredValues);
      question = {
        count,
        representation: pick(["fraction", "decimal", "percent"]),
        expected: count
      };
    }

    state.question = question;
    state.selectedIndices = new Set();
    state.selectedCount = 0;
    state.solved = false;
    renderQuestion();
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (typeof t()[key] === "string") element.textContent = t()[key];
    });

    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    modeTitle.textContent = t()[`mode${state.mode.charAt(0).toUpperCase()}${state.mode.slice(1)}`];
    conceptTip.textContent = t().tips[state.mode];
    howToText.textContent = t().howTo[state.mode];
    promptText.textContent = t().prompts[state.mode];
  }

  function renderQuestion() {
    applyTranslations();
    renderChallenge();
    renderStage();
    setFeedback(t().ready[state.mode]);
    updateCheckButton();
  }

  function renderChallenge() {
    challengeDisplay.replaceChildren();
    const wrapper = document.createElement("div");
    const label = document.createElement("div");
    const value = document.createElement("div");
    label.className = "challenge-label";
    value.className = "challenge-value";
    label.textContent = t().challengeLabels[state.mode];

    if (state.mode === "set") {
      value.innerHTML = `${fractionMarkup(state.question.numerator, state.question.denominator)} <span>${formatTemplate(t().ofObjects, { total: state.question.total })}</span>`;
    } else if (state.mode === "equivalent") {
      value.innerHTML = `${fractionMarkup(state.question.numerator, state.question.denominator)} <span>=</span> ${fractionMarkup("?", state.question.equivalentDenominator)}`;
    } else if (state.mode === "mixed") {
      value.innerHTML = state.question.direction === "improper"
        ? fractionMarkup(state.question.improperNumerator, state.question.denominator)
        : mixedMarkup(state.question.whole, state.question.remainder, state.question.denominator);
    } else if (state.question.representation === "fraction") {
      value.innerHTML = fractionMarkup(state.question.count, 100);
    } else if (state.question.representation === "decimal") {
      value.textContent = decimalFor(state.question.count);
    } else {
      value.textContent = `${state.question.count}%`;
    }

    wrapper.append(label, value);
    challengeDisplay.append(wrapper);
  }

  function renderStage() {
    conceptStage.replaceChildren();
    if (state.mode === "set") renderSetActivity();
    else if (state.mode === "equivalent") renderEquivalentActivity();
    else if (state.mode === "mixed") renderMixedActivity();
    else renderHundredActivity();
  }

  function renderSetActivity() {
    const activity = document.createElement("div");
    const grid = document.createElement("div");
    const readout = document.createElement("div");
    activity.className = "set-activity";
    grid.className = "object-grid";
    readout.className = "selection-readout";

    const columns = chooseColumns(state.question.total);
    grid.style.setProperty("--object-columns", columns.desktop);
    grid.style.setProperty("--object-columns-mobile", columns.mobile);

    for (let index = 0; index < state.question.total; index += 1) {
      const object = document.createElement("button");
      object.type = "button";
      object.className = "set-object";
      object.textContent = state.question.icon;
      object.setAttribute("aria-label", `${index + 1}`);
      object.setAttribute("aria-pressed", String(state.selectedIndices.has(index)));
      object.classList.toggle("is-selected", state.selectedIndices.has(index));
      object.addEventListener("click", () => toggleObject(index));
      grid.append(object);
    }

    readout.textContent = formatTemplate(t().selectedObjects, {
      selected: state.selectedIndices.size,
      total: state.question.total
    });
    activity.append(grid, readout);
    conceptStage.append(activity);
  }

  function chooseColumns(total) {
    if (total <= 6) return { desktop: total, mobile: total };
    if (total % 5 === 0) return { desktop: 5, mobile: 5 };
    if (total % 4 === 0) return { desktop: 4, mobile: 4 };
    if (total % 3 === 0) return { desktop: 3, mobile: 3 };
    return { desktop: 5, mobile: 4 };
  }

  function toggleObject(index) {
    if (state.solved) return;
    if (state.selectedIndices.has(index)) state.selectedIndices.delete(index);
    else state.selectedIndices.add(index);
    playMove();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function renderEquivalentActivity() {
    const activity = document.createElement("div");
    const stack = document.createElement("div");
    const equal = document.createElement("div");
    const readout = document.createElement("div");
    activity.className = "equivalent-activity";
    stack.className = "bar-stack";
    equal.className = "equal-sign";
    equal.textContent = "=";
    readout.className = "bar-readout";

    stack.append(
      makeFractionBarRow(t().referenceBar, state.question.numerator, state.question.denominator, true),
      equal,
      makeFractionBarRow(t().yourBar, state.selectedIndices.size, state.question.equivalentDenominator, false)
    );

    readout.innerHTML = `${fractionMarkup(state.selectedIndices.size, state.question.equivalentDenominator)}`;
    activity.append(stack, readout);
    conceptStage.append(activity);
  }

  function makeFractionBarRow(labelText, numerator, denominator, reference) {
    const row = document.createElement("div");
    const label = document.createElement("div");
    const bar = document.createElement("div");
    row.className = "bar-row";
    label.className = "bar-label";
    bar.className = "fraction-bar";
    bar.style.setProperty("--segments", denominator);
    label.innerHTML = `<span>${labelText}</span>${fractionMarkup(numerator, denominator)}`;

    for (let index = 0; index < denominator; index += 1) {
      if (reference) {
        const segment = document.createElement("span");
        segment.className = "bar-segment";
        segment.classList.toggle("is-reference", index < numerator);
        bar.append(segment);
      } else {
        const segment = document.createElement("button");
        segment.type = "button";
        segment.className = "bar-segment";
        segment.classList.toggle("is-filled", state.selectedIndices.has(index));
        segment.setAttribute("aria-label", `${index + 1} / ${denominator}`);
        segment.setAttribute("aria-pressed", String(state.selectedIndices.has(index)));
        segment.addEventListener("click", () => setEquivalentCount(index));
        bar.append(segment);
      }
    }

    row.append(label, bar);
    return row;
  }

  function setEquivalentCount(index) {
    if (state.solved) return;
    const nextCount = state.selectedIndices.size === index + 1 ? index : index + 1;
    state.selectedIndices = new Set(Array.from({ length: nextCount }, (_, partIndex) => partIndex));
    playMove();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function renderMixedActivity() {
    const activity = document.createElement("div");
    const bars = document.createElement("div");
    const readout = document.createElement("div");
    activity.className = "mixed-activity";
    bars.className = "unit-bars";
    readout.className = "bar-readout";
    bars.style.setProperty("--unit-count", state.question.unitCount);

    for (let unit = 0; unit < state.question.unitCount; unit += 1) {
      const wrap = document.createElement("div");
      const label = document.createElement("div");
      const bar = document.createElement("div");
      wrap.className = "unit-wrap";
      label.className = "unit-label";
      bar.className = "unit-bar";
      bar.style.setProperty("--segments", state.question.denominator);
      label.textContent = formatTemplate(t().whole, { number: unit + 1 });

      for (let part = 0; part < state.question.denominator; part += 1) {
        const absoluteIndex = unit * state.question.denominator + part;
        const piece = document.createElement("button");
        piece.type = "button";
        piece.className = "unit-piece";
        piece.classList.toggle("is-filled", absoluteIndex < state.selectedCount);
        piece.setAttribute("aria-label", `${absoluteIndex + 1}`);
        piece.setAttribute("aria-pressed", String(absoluteIndex < state.selectedCount));
        piece.addEventListener("click", () => setMixedCount(absoluteIndex));
        bar.append(piece);
      }

      wrap.append(label, bar);
      bars.append(wrap);
    }

    readout.innerHTML = fractionMarkup(state.selectedCount, state.question.denominator);
    activity.append(bars, readout);
    conceptStage.append(activity);
  }

  function setMixedCount(index) {
    if (state.solved) return;
    state.selectedCount = state.selectedCount === index + 1 ? index : index + 1;
    playMove();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function renderHundredActivity() {
    const activity = document.createElement("div");
    const layout = document.createElement("div");
    const grid = document.createElement("div");
    const controls = document.createElement("div");
    const title = document.createElement("strong");
    const readout = document.createElement("div");
    const range = document.createElement("input");
    const rangeLabels = document.createElement("div");
    const buttons = document.createElement("div");
    activity.className = "hundred-activity";
    layout.className = "hundred-layout";
    grid.className = "hundred-grid";
    controls.className = "grid-controls";
    readout.className = "grid-readout";
    range.className = "grid-range";
    rangeLabels.className = "range-labels";
    buttons.className = "step-buttons";

    for (let index = 0; index < 100; index += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "hundred-cell";
      cell.classList.toggle("is-filled", index < state.selectedCount);
      cell.setAttribute("aria-label", `${index + 1} / 100`);
      cell.setAttribute("aria-pressed", String(index < state.selectedCount));
      cell.addEventListener("click", () => setHundredCount(index + 1));
      grid.append(cell);
    }

    title.textContent = t().selectedSquares;
    readout.innerHTML = fractionMarkup(state.selectedCount, 100);
    range.type = "range";
    range.min = "0";
    range.max = "100";
    range.step = "1";
    range.value = String(state.selectedCount);
    range.setAttribute("aria-label", t().selectedSquares);
    range.addEventListener("input", () => {
      if (state.solved) return;
      state.selectedCount = Number(range.value);
      playSoftTick();
      renderStage();
    });
    rangeLabels.innerHTML = "<span>0</span><span>50</span><span>100</span>";

    [
      [-10, t().minusTen],
      [-1, t().minusOne],
      [1, t().plusOne],
      [10, t().plusTen]
    ].forEach(([delta, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "step-button";
      button.textContent = label;
      button.addEventListener("click", () => adjustHundred(Number(delta)));
      buttons.append(button);
    });

    controls.append(title, readout, range, rangeLabels, buttons);
    layout.append(grid, controls);
    activity.append(layout);
    conceptStage.append(activity);
  }

  function setHundredCount(count) {
    if (state.solved) return;
    state.selectedCount = state.selectedCount === count ? Math.max(0, count - 1) : count;
    playMove();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function adjustHundred(delta) {
    if (state.solved) return;
    state.selectedCount = Math.max(0, Math.min(100, state.selectedCount + delta));
    playMove();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function resetActivity() {
    if (state.solved) {
      generateQuestion();
      return;
    }
    state.selectedIndices = new Set();
    state.selectedCount = 0;
    playClick();
    setFeedback(t().ready[state.mode]);
    renderStage();
  }

  function currentAnswer() {
    if (state.mode === "set" || state.mode === "equivalent") return state.selectedIndices.size;
    return state.selectedCount;
  }

  function checkAnswer() {
    if (state.solved) {
      generateQuestion();
      return;
    }

    if (currentAnswer() === state.question.expected) {
      state.solved = true;
      setFeedback(makeSuccessMessage(), "success", true);
      playSuccess();
      celebrate();
      renderStage();
      updateCheckButton();
    } else {
      setFeedback(t().wrong[state.mode], "error");
      playError();
    }
  }

  function makeSuccessMessage() {
    const prefix = `<strong>${t().correct}</strong>`;
    let equation;

    if (state.mode === "set") {
      equation = `${fractionMarkup(state.question.expected, state.question.total)} <span>=</span> ${fractionMarkup(state.question.numerator, state.question.denominator)}`;
    } else if (state.mode === "equivalent") {
      equation = `${fractionMarkup(state.question.numerator, state.question.denominator)} <span>=</span> ${fractionMarkup(state.question.equivalentNumerator, state.question.equivalentDenominator)}`;
    } else if (state.mode === "mixed") {
      equation = `${fractionMarkup(state.question.improperNumerator, state.question.denominator)} <span>=</span> ${mixedMarkup(state.question.whole, state.question.remainder, state.question.denominator)}`;
    } else {
      equation = `${fractionMarkup(state.question.count, 100)} <span>=</span> <span>${decimalFor(state.question.count)}</span> <span>=</span> <span>${state.question.count}%</span>`;
    }

    return `${prefix}<span class="answer-equation">${equation}</span>`;
  }

  function setFeedback(message, type = "", allowHtml = false) {
    feedback.className = `feedback${type ? ` ${type}` : ""}`;
    if (allowHtml) feedback.innerHTML = message;
    else feedback.textContent = message;
  }

  function updateCheckButton() {
    checkBtn.querySelector("span:first-child").textContent = state.solved ? "→" : "✓";
    checkBtn.querySelector("span:last-child").textContent = state.solved ? t().next : t().check;
  }

  function celebrate() {
    const colors = ["#ffca4f", "#35a58c", "#3579b9", "#ef9837", "#d64f4f"];
    celebrationLayer.replaceChildren();
    for (let index = 0; index < 26; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.setProperty("--confetti-color", colors[index % colors.length]);
      piece.style.setProperty("--confetti-x", `${randomInt(-350, 350)}px`);
      piece.style.setProperty("--confetti-y", `${randomInt(-230, 230)}px`);
      piece.style.setProperty("--confetti-r", `${randomInt(-540, 540)}deg`);
      piece.style.animationDelay = `${index * 9}ms`;
      celebrationLayer.append(piece);
    }
    window.setTimeout(() => celebrationLayer.replaceChildren(), 1000);
  }

  function ensureAudioContext() {
    if (!state.sound) return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }

  function playTone(frequency, duration, delay = 0, type = "sine", volume = .045) {
    const context = ensureAudioContext();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  }

  function playClick() { playTone(420, .06, 0, "sine", .025); }
  function playSoftTick() { playTone(330, .035, 0, "sine", .012); }
  function playMove() {
    playTone(360, .07, 0, "sine", .035);
    playTone(520, .08, .055, "sine", .03);
  }
  function playSuccess() {
    playTone(523, .14, 0, "sine", .05);
    playTone(659, .14, .1, "sine", .05);
    playTone(784, .2, .2, "sine", .055);
  }
  function playError() {
    playTone(210, .1, 0, "triangle", .035);
    playTone(165, .14, .09, "triangle", .03);
  }

  modeTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-mode]");
    if (!button || button.dataset.mode === state.mode) return;
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    playClick();
    generateQuestion();
  });

  document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.querySelectorAll(".language-btn").forEach(languageButton => {
        const active = languageButton === button;
        languageButton.classList.toggle("active", active);
        languageButton.setAttribute("aria-pressed", String(active));
      });
      playClick();
      renderQuestion();
    });
  });

  soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    soundToggle.setAttribute("aria-pressed", String(state.sound));
    soundToggle.querySelector("span:first-child").textContent = state.sound ? "🔊" : "🔇";
    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    if (state.sound) playClick();
  });

  resetBtn.addEventListener("click", resetActivity);
  checkBtn.addEventListener("click", checkAnswer);
  newQuestionBtn.addEventListener("click", () => {
    playClick();
    generateQuestion();
  });

  generateQuestion();
})();
