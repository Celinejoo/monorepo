import { generateTypographyClasses } from "./generateTypographyClasses";

export const injectTypographyClasses = () => {
  const styleElement = document.createElement("style");
  styleElement.setAttribute("id", "typography-utilities"); // 나중에 찾기 쉽게 id 달아주기
  styleElement.innerHTML = generateTypographyClasses(); // 만들어둔 유틸리티 클래스들 넣기
  document.head.appendChild(styleElement); // <head> 안에 추가
};
