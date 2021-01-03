import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Thing, WithContext } from 'schema-dts';
import { useAmp } from "next/amp";
import { useRouter } from "next/router"
import { config } from '../../config';

type Props = {
  children?: ReactNode;
  title?: string;
  keywords?: string;
  description?: string;
  structuredData?: WithContext<Thing>;
}

export const Layout = ({ 
  children, 
  title = '',
  keywords = "",
  description = "",
  structuredData
}: Props) => {

  const isAmp = useAmp();
  const router = useRouter();
  
  if (title.length < 50) {
    throw new Error("Invalid length of title");
  }
  if (description.length < 110) {
    throw new Error("Invalid length of description");
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="yandex-verification" content="2f0734bcc1260adb" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="favicon.ico" />
        <link rel="canonical" href={config.domain + router.pathname} />
        {
          isAmp ? 
          <>
            
          </> : 
          null
        }
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
