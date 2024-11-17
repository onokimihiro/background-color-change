export function backgroundColorChange() {
  // 要素を取得
  const color = document.getElementById('background-color') as HTMLInputElement;

  // 16進数から10進数に変換
  // #ffffff -> 255, 255, 255
  function hexToRgb(hex: string) {
    const hexValue = hex.replace('#', '');
    const isOmit = hexValue.length === 3; // #fffなどの省略記法の場合 true
    let r: string;
    let g: string;
    let b: string;

    if (isOmit === true) {
      r = parseInt(hexValue[0].repeat(2), 16).toString();
      g = parseInt(hexValue[1].repeat(2), 16).toString();
      b = parseInt(hexValue[2].repeat(2), 16).toString();
    } else {
      r = parseInt(hexValue.slice(0, 2), 16).toString();
      g = parseInt(hexValue.slice(2, 4), 16).toString();
      b = parseInt(hexValue.slice(4, 6), 16).toString();
    }

    let rgb: string = r + ', ' + g + ', ' + b;

    return rgb;
  }
  console.log('hexToRgb 1: ', hexToRgb('#ffffff'));
  console.log('hexToRgb 2: ', hexToRgb('#fff'));

  // 10進数から16進数に変換
  // 255, 255, 255 -> #ffffff
  function rgbToHex(r: number, g: number, b: number) {
    let colorsDecimal: number[] = [r, g, b];
    let totalHex: string = '#';

    colorsDecimal.forEach((color) => {
      let singleHex = color.toString(16);
      totalHex += singleHex;
    });

    return totalHex;
  }
  console.log('rgbToHex: ', rgbToHex(255, 255, 255));

  function setBackgroundColor(hex: string) {
    document.body.style.backgroundColor = hex;

    const currentColorHex = document.getElementById('hex-color') as HTMLSpanElement;
    currentColorHex.textContent = hex;

    const currentColorRGB = document.getElementById('rgb-color') as HTMLSpanElement;
    currentColorRGB.textContent = hexToRgb(hex);
  }

  color.addEventListener('input', () => {
    setBackgroundColor(color.value);
  });

  setBackgroundColor('#ffffff');
}
