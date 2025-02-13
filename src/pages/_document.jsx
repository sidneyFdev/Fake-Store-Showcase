// pages/_document.js
import ApiProvider from '@/contexts/useAPIContext';
import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Teste</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

