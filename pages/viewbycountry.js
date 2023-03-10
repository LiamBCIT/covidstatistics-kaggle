import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import record from '../data/topcovidcountries.json'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import react from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function viewbycountry() { 

  console.log(record);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"/>
        <script src="../path/to/soft-ui-dashboard-tailwind.js"></script>
        <link rel="stylesheet" href="soft-ui-dashboard-tailwind.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
      </Head>

  <main class="countrymain">
        <div class="px-64 py-6">
            <div class="flex items-center justify-between">
                <div id="h2-container">
                    <h2 class="font-bold text-5xl text-purpleText z-50">View By Country</h2>
                </div>
                <div id="contrytablet-link" class="flex items-center space-x-12 z-50">
                    <Link href="/" className="border px-4 py-1.5 rounded-md border-black font-semibold">Home</Link>
                </div>
                <img src="/Decore.png" class="absolute right-0 top-0 z-[0]" alt=""/>
            </div>

            <div class="pt-20 flex items-center">
                <div class="w-[450px]">
                
                </div>                    
                        <div className={styles.container}>
                        {
                            record.map( (rek, index) => {
                            return (
                                <div key={index}>
                                <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-black justify-center">{rek.Country}</h2>
                                <h3 class="mb-4 text-2xl font-regular leading-none tracking-tight text-gray-400 md:text-5xl lg:text-2xl justify-center">{rek['Total Cases']}</h3>
                                <h1>{rek.id}</h1>
                                </div>
                            )
                            })
                        }
                </div>
            </div>
        </div>
    </main>
</>
)
}


