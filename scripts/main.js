var date = new Date();
var hour = date.getHours();
var root = document.querySelector(':root');

function dark() {
  root.style.setProperty('--mainTextColor', 'var(--mainTextColor-dark)');
  root.style.setProperty(
    '--secondaryTextColor',
    'var(--secondaryTextColor-dark)',
  );
  root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-dark)');
  root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-dark)');
  root.style.setProperty('--mainBGColor', 'var(--mainBgColor-dark)');
}

function light() {
  root.style.setProperty('--mainTextColor', 'var(--mainTextColor-light)');
  root.style.setProperty(
    '--secondaryTextColor',
    'var(--secondaryTextColor-light)',
  );
  root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-light)');
  root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-light)');
  root.style.setProperty('--mainBGColor', 'var(--mainBgColor-light)');
}

function checkHour() {
  if (hour >= 7 && hour <= 17) {
    light();
  } else if (hour >= 18 && hour >= 6) {
    dark();
  }
}

checkHour();
