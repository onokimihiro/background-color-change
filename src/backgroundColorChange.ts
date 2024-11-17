export function backgroundColorChange() {
  // 要素を取得
  const color = document.getElementById('background-color') as HTMLInputElement;

  color.addEventListener('input', () => {
    return (document.body.style.backgroundColor = color.value);
  });
}
