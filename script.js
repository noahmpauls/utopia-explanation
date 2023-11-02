function setupDemo1() {
  const demo = {
    percent: document.getElementById("demo1-percent"),
    offset: document.getElementById("demo1-offset"),
    slider: document.getElementById("demo1-slider"),
    screenSize: document.getElementById("demo1-screen-size"),
    fontSize: document.getElementById("demo1-font-size"),
    display: document.getElementById("demo1-display"),
  };

  let screenSize = 1980;
  // 0.2
  let widthPercent = 0.45;
  // 14.3
  let offset = 10;

  const handlePercent = () => {
    widthPercent = +demo.percent.value;
    updateDemo();
  }

  const handleOffset = () => {
    offset = +demo.offset.value;
    updateDemo();
  }

  const handleSlide = () => {
    screenSize = +demo.slider.value;
    updateDemo();
  }

  const updateDemo = () => {
    demo.screenSize.innerText = `Screen Size: ${screenSize}px`;
    const fontSize = +(((widthPercent / 100) * screenSize) + offset).toFixed(2);
    demo.fontSize.innerText = `Font Size: ${fontSize}px`;
    demo.display.style.fontSize = `${fontSize}px`;
  };

  demo.percent.addEventListener("input", handlePercent);
  demo.offset.addEventListener("input", handleOffset);
  demo.slider.addEventListener("input", handleSlide);

  demo.percent.value = widthPercent;
  demo.offset.value = offset;
  demo.slider.value = screenSize;

  updateDemo();
}


function setupDemo2() {
  const demo = {
    percent: document.getElementById("demo2-percent"),
    offset: document.getElementById("demo2-offset"),
    slider: document.getElementById("demo2-slider"),
    minFont: document.getElementById("demo2-min-font"),
    maxFont: document.getElementById("demo2-max-font"),
    screenSize: document.getElementById("demo2-screen-size"),
    fontSize: document.getElementById("demo2-font-size"),
    display: document.getElementById("demo2-display"),
  };

  let screenSize = 1980;
  // 0.2
  let widthPercent = 0.45;
  // 14.3
  let offset = 10;
  // 16
  let minFont = 16;
  // 20
  let maxFont = 20;

  const handlePercent = () => {
    widthPercent = +demo.percent.value;
    updateDemo();
  }

  const handleOffset = () => {
    offset = +demo.offset.value;
    updateDemo();
  }
  
  const handleMinFont = () => {
    minFont = +demo.minFont.value;
    updateDemo();
  }

  const handleMaxFont = () => {
    maxFont = +demo.maxFont.value;
    updateDemo();
  }

  const handleSlide = () => {
    screenSize = +demo.slider.value;
    updateDemo();
  }

  const updateDemo = () => {
    demo.screenSize.innerText = `Screen Size: ${screenSize}px`;
    const linearFontSize = ((widthPercent / 100) * screenSize) + offset;
    const fontSize = +Math.max(minFont, Math.min(linearFontSize, maxFont)).toFixed(2);
    demo.fontSize.innerText = `Font Size: ${fontSize}px`;
    demo.display.style.fontSize = `${fontSize}px`;
  };

  demo.percent.addEventListener("input", handlePercent);
  demo.offset.addEventListener("input", handleOffset);
  demo.minFont.addEventListener("input", handleMinFont);
  demo.maxFont.addEventListener("input", handleMaxFont);
  demo.slider.addEventListener("input", handleSlide);

  demo.percent.value = widthPercent;
  demo.offset.value = offset;
  demo.minFont.value = minFont;
  demo.maxFont.value = maxFont;
  demo.slider.value = screenSize;

  updateDemo();
}

function setupDemo3() {
  const demo = {
    percent: document.getElementById("demo3-percent"),
    offset: document.getElementById("demo3-offset"),
    slider: document.getElementById("demo3-slider"),
    minFont: document.getElementById("demo3-min-font"),
    maxFont: document.getElementById("demo3-max-font"),
    minScreen: document.getElementById("demo3-min-screen"),
    maxScreen: document.getElementById("demo3-max-screen"),
    screenSize: document.getElementById("demo3-screen-size"),
    fontSize: document.getElementById("demo3-font-size"),
    display: document.getElementById("demo3-display"),
  };

  let screenSize = 1980;
  let minFont = 16;
  let maxFont = 20;
  let minScreen = 500;
  let maxScreen = 2000;

  const handleMinFont = () => {
    minFont = +demo.minFont.value;
    updateDemo();
  }

  const handleMaxFont = () => {
    maxFont = +demo.maxFont.value;
    updateDemo();
  }

  const handleMinScreen = () => {
    minScreen = +demo.minScreen.value;
    updateDemo();
  }

  const handleMaxScreen = () => {
    maxScreen = +demo.maxScreen.value;
    updateDemo();
  }

  const handleSlide = () => {
    screenSize = +demo.slider.value;
    updateDemo();
  }

  const updateDemo = () => {

    const slope = (maxFont- minFont) / (maxScreen - minScreen);

    const intercept = maxFont - (slope * maxScreen);
    const linearFontSize = (slope * screenSize) + intercept;
    const fontSize = +Math.max(minFont, Math.min(linearFontSize, maxFont)).toFixed(2);

    const slopePercent = +(slope * 100).toFixed(2);
    const interceptRounded = +intercept.toFixed(2);

    demo.percent.innerText = `Width Percent: ${slopePercent}%`;
    demo.offset.innerText = `Offset: ${interceptRounded}px`;
    demo.screenSize.innerText = `Screen Size: ${screenSize}px`;
    demo.fontSize.innerText = `Font Size: ${fontSize}px`;
    demo.display.style.fontSize = `${fontSize}px`;
  };

  demo.minFont.addEventListener("input", handleMinFont);
  demo.maxFont.addEventListener("input", handleMaxFont);
  demo.minScreen.addEventListener("input", handleMinScreen);
  demo.maxScreen.addEventListener("input", handleMaxScreen);
  demo.slider.addEventListener("input", handleSlide);

  demo.minFont.value = minFont;
  demo.maxFont.value = maxFont;
  demo.minScreen.value = minScreen;
  demo.maxScreen.value = maxScreen;
  demo.slider.value = screenSize;

  updateDemo();
}

setupDemo1();
setupDemo2();
setupDemo3();