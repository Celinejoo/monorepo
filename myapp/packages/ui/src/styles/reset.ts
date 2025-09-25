/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { typography } from "@repo/tokens";

// Pretendard 폰트 로드
export const pretendardFont = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css");
`;

// 글로벌 리셋
export const globalReset = css`
  ${pretendardFont}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    font-family: ${typography.fontFamily.sans.join(", ")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
  }

  input,
  textarea,
  select {
    font: inherit;
  }
`;
