import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabasProvider'
import ModalProvider from '@/providers/ModalProvider'
import UserProvider from '@/providers/UserProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import getSongsByUserId from '@/actions/getSongsByUserId'
// import Player from '@/components/Player';

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Muzify',
  description: 'Listen to your favourite music!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products}/>
            <Sidebar songs = {userSongs}>
              {children}
            </Sidebar>  
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
