import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface pb-12">
      <div className="w-full max-w-[1310px] mx-auto flex flex-col gap-[40px] md:gap-[60px] px-4 md:px-0">
        {/* Top Border */}
        <div className="w-full h-[1px] bg-[#E5E5E5]" />

        {/* Logo and Pages */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-0">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/brand/logotype-dark.svg"
              alt="Skyhook"
              className="h-12 w-auto"
            />
          </Link>

          {/* Pages */}
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-[85px]">
            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[#101927] font-['DM_Sans'] text-[18px] font-semibold leading-normal">Company</h4>
              <div className="flex flex-col gap-3">
                <Link href="/pricing" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Pricing</Link>
                <Link href="/blog" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Blog</Link>
                <a href="mailto:contact@skyhook.io" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Contact Us</a>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[#101927] font-['DM_Sans'] text-[18px] font-semibold leading-normal">Resources</h4>
              <div className="flex flex-col gap-3">
                <a href="https://docs.skyhook.io" target="_blank" rel="noopener noreferrer" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Documentation</a>
                <Link href="/changelog" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Changelog</Link>
                <Link href="/status" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Status</Link>
                <a href="https://trust.skyhook.io" target="_blank" rel="noopener noreferrer" className="text-[#445166] font-['DM_Sans'] text-[14px] font-normal leading-normal hover:text-[#101927]">Trust Center</a>
              </div>
            </div>
          </div>
        </div>

        {/* Partners and Badges */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[31px]">
          {/* Backed By YC */}
          <div className="flex h-[30px] items-center gap-3">
            <span className="text-[#101927] font-['DM_Sans'] text-[18px] font-medium leading-normal">Backed By</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clipPath="url(#clip0_251_33703)">
                <path d="M30 0H0V30H30V0Z" fill="#FB651E" />
                <path d="M13.9891 16.9626L8.83984 7.31641H11.1931L14.2221 13.421C14.2687 13.5297 14.3231 13.6424 14.3852 13.7589C14.4474 13.8754 14.5017 13.9957 14.5483 14.12C14.5794 14.1666 14.6027 14.2093 14.6182 14.2482C14.6338 14.287 14.6493 14.3219 14.6648 14.353C14.7425 14.5083 14.8124 14.6598 14.8745 14.8074C14.9367 14.9549 14.991 15.0908 15.0376 15.2151C15.1619 14.951 15.2978 14.6676 15.4454 14.3647C15.593 14.0618 15.7444 13.7472 15.8997 13.421L18.9753 7.31641H21.1655L15.9696 17.0791V23.3002H13.9891V16.9626Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_251_33703">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-0 h-[32.684px] border-l border-[#E5E5E5]" />

          {/* Google Cloud Partner */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
              <path d="M23.6548 8.26145H24.7918L28.0323 5.02097L28.1915 3.64518C26.3351 2.00669 24.0917 0.868492 21.6731 0.338098C19.2546 -0.192296 16.7407 -0.0973739 14.3691 0.613898C11.9974 1.32517 9.84621 2.62931 8.1187 4.40313C6.39119 6.17694 5.1444 8.36187 4.49609 10.7515C4.8571 10.6035 5.257 10.5796 5.63311 10.6833L12.1141 9.6145C12.1141 9.6145 12.4438 9.06873 12.6144 9.10284C14.003 7.57773 15.9221 6.64109 17.9788 6.48468C20.0355 6.32826 22.0742 6.96389 23.6775 8.26145H23.6548Z" fill="#EA4335" />
              <path d="M32.6491 10.7512C31.9043 8.00832 30.375 5.54249 28.2489 3.65625L23.7008 8.2043C24.6487 8.9788 25.4083 9.95842 25.9224 11.0693C26.4365 12.1801 26.6916 13.3932 26.6684 14.6171V15.4243C27.2 15.4243 27.7264 15.529 28.2175 15.7325C28.7086 15.9359 29.1548 16.234 29.5306 16.6099C29.9065 16.9858 30.2047 17.432 30.4081 17.9231C30.6115 18.4142 30.7162 18.9406 30.7162 19.4721C30.7162 20.0037 30.6115 20.53 30.4081 21.0211C30.2047 21.5122 29.9065 21.9584 29.5306 22.3343C29.1548 22.7102 28.7086 23.0083 28.2175 23.2118C27.7264 23.4152 27.2 23.5199 26.6684 23.5199H18.5729L17.7656 24.3385V29.1936L18.5729 30.0009H26.6684C28.9291 30.0185 31.1354 29.3079 32.9609 27.9744C34.7865 26.6409 36.1343 24.7552 36.8051 22.5963C37.4758 20.4374 37.4339 18.1199 36.6854 15.9867C35.937 13.8535 34.5217 12.0178 32.6491 10.7512Z" fill="#4285F4" />
              <path d="M10.4692 29.9503H18.5647V23.4693H10.4692C9.89242 23.4692 9.32241 23.3451 8.79778 23.1055L7.66076 23.4579L4.39753 26.6984L4.11328 27.8354C5.94323 29.2173 8.17615 29.9602 10.4692 29.9503Z" fill="#34A853" />
              <path d="M10.4659 8.93366C8.27235 8.94676 6.13771 9.64464 4.36008 10.9298C2.58245 12.215 1.25061 14.0233 0.550566 16.1021C-0.149476 18.1809 -0.182755 20.4265 0.455376 22.5252C1.09351 24.6238 2.37118 26.4708 4.10995 27.8081L8.80581 23.1122C8.20907 22.8426 7.68664 22.4323 7.28335 21.9164C6.88007 21.4004 6.60797 20.7944 6.49039 20.1502C6.37282 19.506 6.41329 18.8429 6.60833 18.2178C6.80337 17.5927 7.14715 17.0243 7.61018 16.5613C8.07321 16.0982 8.64167 15.7544 9.26677 15.5594C9.89187 15.3644 10.555 15.3239 11.1991 15.4415C11.8433 15.559 12.4494 15.8311 12.9653 16.2344C13.4812 16.6377 13.8915 17.1601 14.1611 17.7569L18.857 13.061C17.8714 11.7725 16.6011 10.7295 15.1454 10.0135C13.6897 9.29744 12.0881 8.92788 10.4659 8.93366Z" fill="#FBBC05" />
            </svg>
            <span className="text-[#101927] font-['DM_Sans'] text-[18px] font-medium leading-normal">Google Cloud Partner</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-0 h-[32.684px] border-l border-[#E5E5E5]" />

          {/* SOC Image */}
          <div className="relative" style={{ width: '65.122px', height: '64.759px' }}>
            <img
              src="/images/badges/soc2.png"
              alt="AICPA SOC 2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E5E5E5] pt-8 text-left">
          <p className="text-sm text-ink-tertiary">
            &copy; {new Date().getFullYear()} Skyhook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
