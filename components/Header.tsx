import { Josefin_Sans } from 'next/font/google'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from './Image'

const josefin_sans = Josefin_Sans({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-josefin-sans',
})

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image
                src="/static/images/logo.png"
                alt="avatar"
                width={192}
                height={192}
                className="h-16 w-16 rounded-full"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div
                className={`${josefin_sans.className} hidden h-8 text-3xl font-semibold sm:block`}
              >
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
