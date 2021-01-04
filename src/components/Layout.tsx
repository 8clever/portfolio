import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Thing, WithContext } from 'schema-dts';
import { useRouter } from "next/router"
import { config } from '../../config';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  structuredData?: WithContext<Thing>;
}

export const Layout = ({ 
  children, 
  title = '',
  description = "",
  structuredData
}: Props) => {

  const router = useRouter();

  if (title.length < 50 || title.length > 65) {
    throw new Error("Invalid length of title. Length: " + title.length);
  }
  if (description.length < 110 || description.length > 170) {
    throw new Error("Invalid length of description. Length: " + description.length);
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content={description} />
        <meta name="yandex-verification" content="2f0734bcc1260adb" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="favicon.ico" />
        <link rel="canonical" href={config.domain + router.pathname} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {
          structuredData ?
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script> : 
          null
        }
      </Head>
      {children}
    </div>
  )
}
