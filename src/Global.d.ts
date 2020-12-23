//Thanks to https://codepen.io/codiechanel/post/css-modules-in-typescript

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
