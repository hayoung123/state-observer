{
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '>1%, not dead',
        corejs: { version: '3.8', proposals: true },
      },
    ],
  ];
}
