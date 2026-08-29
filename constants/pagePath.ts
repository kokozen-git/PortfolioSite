export type PagePath = {
  href: string;
  text: string;
};

export const pagePath: Record<string, PagePath> = {
  top    : { href: "/"        , text: "top"     },
  about  : { href: "/about"   , text: "about"   },
  museum : { href: "/museum"  , text: "museum"  },
  blog   : { href: "/blog"    , text: "blog"    },
  contact: { href: "/contact" , text: "contact" },
  policy : { href: "/policy"  , text: "プライバシーポリシー" },
  tech   : { href: "/tech"    , text: "ページ使用技術"      },
};