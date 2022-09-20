import { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import { Arial } from "@components/fonts";
import { blue, grey, lightGrey } from "@components/colors";

const theme = createTheme({
  typography: {
    fontFamily: Arial
  },
  palette: {
    primary: {
      main: blue
    },
    secondary: {
      main: grey
    },
    info: {
      main: lightGrey
    }
  }
});

type MetaTag = {
  name: string;
  content?: string;
  property?: string;
};

export type PageProps = {
  children?: ReactNode | ReactNode[];
  title?: string;
  showFooter?: boolean;
  description?: string;
  keywords?: string;
  metaTags?: MetaTag[];
};

export const Page: FunctionComponent<PageProps> = ({
  children,
  title,
  description,
  keywords,
  metaTags,
  showFooter = true
}: PageProps) => {
  return (
    <div className="container">
      <Head>
        <title>{title ?? "Calculator"}</title>
        {metaTags?.map((props: MetaTag) => (
          <meta {...props} />
        ))}
        <meta
          name="description"
          content={description ?? "A simple calculator"}
        />
        <meta name="keywords" content={keywords ?? "calculator"} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </main>
    </div>
  );
};
