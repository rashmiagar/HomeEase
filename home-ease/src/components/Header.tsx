import React from 'react'
import { Globe, Menu, UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';

export default function Header() {
  return (
    // ToDo not centered
    <header className="flex justify-between items-center px-10 h-20">  

      <div className="flex-1">
        <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M52.7032 8.04048C52.7032 9.19374 51.7969 10.1224 50.6721 10.1224C49.5474 10.1224 48.6417 9.19374 48.6417 8.04048C48.6417 6.88723 49.5165 5.9586 50.6721 5.9586C51.8287 5.9906 52.7032 6.91955 52.7032 8.04048ZM44.3306 12.2369V12.7495C44.3306 12.7495 43.3625 11.4676 41.3005 11.4676C37.8957 11.4676 35.2398 14.1264 35.2398 17.8099C35.2398 21.4617 37.8645 24.1522 41.3005 24.1522C43.3937 24.1522 44.3306 22.8389 44.3306 22.8389V23.3832C44.3306 23.6395 44.5184 23.8312 44.7681 23.8312H47.2982V11.787H44.7681C44.5184 11.7879 44.3306 12.0126 44.3306 12.2369ZM44.3306 19.9561C43.8624 20.661 42.9249 21.2697 41.8005 21.2697C39.8013 21.2697 38.2702 19.9884 38.2702 17.8099C38.2702 15.6317 39.8013 14.3504 41.8005 14.3504C42.894 14.3504 43.8936 14.9911 44.3306 15.6637V19.9561ZM49.1729 11.7879H52.1717V23.8322H49.1729V11.7879ZM93.9711 11.4673C91.9092 11.4673 90.9405 12.7492 90.9405 12.7492V5.9906H87.9417V23.8322H90.4724C90.7223 23.8322 90.9093 23.6078 90.9093 23.3835V22.8392C90.9093 22.8392 91.878 24.1525 93.9393 24.1525C97.3448 24.1525 100 21.4626 100 17.8108C100 14.1591 97.3448 11.4673 93.9711 11.4673ZM93.4712 21.2373C92.3149 21.2373 91.4092 20.6293 90.9405 19.9241V15.6317C91.4092 14.9911 92.4089 14.3184 93.4712 14.3184C95.4704 14.3184 97.0012 15.5997 97.0012 17.7779C97.0012 19.9561 95.4707 21.2373 93.4712 21.2373ZM86.38 16.6893V23.8642H83.3805V17.0413C83.3805 15.0557 82.7557 14.2544 81.0699 14.2544C80.1642 14.2544 79.2267 14.7351 78.6322 15.44V23.8325H75.634V11.7882H78.0074C78.2574 11.7882 78.4449 12.0126 78.4449 12.2369V12.7495C79.3197 11.8202 80.4753 11.4676 81.631 11.4676C82.9433 11.4676 84.0369 11.8526 84.9116 12.6212C85.9733 13.5181 86.38 14.6711 86.38 16.6893ZM68.354 11.4673C66.2926 11.4673 65.3239 12.7492 65.3239 12.7492V5.9906H62.3251V23.8322H64.8552C65.1051 23.8322 65.2927 23.6078 65.2927 23.3835V22.8392C65.2927 22.8392 66.2614 24.1525 68.3227 24.1525C71.7282 24.1525 74.3834 21.4626 74.3834 17.8108C74.4146 14.1588 71.7594 11.4673 68.354 11.4673ZM67.854 21.2373C66.6983 21.2373 65.7927 20.6293 65.3239 19.9241V15.6317C65.7927 14.9911 66.7923 14.3184 67.854 14.3184C69.8538 14.3184 71.3843 15.5997 71.3843 17.7779C71.3843 19.9561 69.8538 21.2373 67.854 21.2373ZM59.732 11.4673C60.6376 11.4673 61.1064 11.6279 61.1064 11.6279V14.4784C61.1064 14.4784 58.6072 13.6135 57.0455 15.4397V23.8638H54.0461V11.7879H56.5768C56.8268 11.7879 57.0137 12.0122 57.0137 12.2366V12.7492C57.5767 12.0762 58.7951 11.4673 59.732 11.4673ZM28.5862 22.7429C28.4301 22.3586 28.2738 21.9423 28.1177 21.5897C27.8674 21.0133 27.6175 20.4684 27.3993 19.9561L27.3681 19.9241C25.2122 15.1191 22.9009 10.2507 20.4638 5.4463L20.3702 5.25365C20.1139 4.75525 19.8641 4.25336 19.6209 3.74809C19.3082 3.17114 18.9961 2.56315 18.4962 1.9862C17.4965 0.704946 16.0594 0 14.5289 0C12.9666 0 11.561 0.70495 10.5305 1.92189C10.0617 2.49819 9.71782 3.10683 9.40574 3.68377C9.16192 4.18872 8.91213 4.69061 8.65642 5.18934L8.56248 5.38197C6.15693 10.1864 3.8141 15.0551 1.65853 19.8598L1.62702 19.9234C1.40856 20.4367 1.15826 20.981 0.908282 21.557C0.752239 21.9096 0.596196 22.294 0.440154 22.7103C0.0338189 23.8952 -0.0913333 25.0165 0.0653335 26.17C0.408939 28.5726 1.97061 30.5898 4.1265 31.4874C4.93886 31.84 5.78242 32 6.65689 32C6.90687 32 7.21896 31.968 7.46925 31.9357C8.50038 31.8077 9.5624 31.4557 10.5935 30.8471C11.8743 30.1101 13.0927 29.0535 14.4671 27.5159C15.8416 29.0535 17.0911 30.1101 18.3407 30.8471C19.3722 31.4557 20.4339 31.8077 21.4647 31.9357C21.7147 31.9683 22.0274 32 22.2774 32C23.1521 32 24.0266 31.84 24.8075 31.4874C26.9945 30.5898 28.525 28.5406 28.8689 26.17C29.117 25.0491 28.9922 23.9285 28.5862 22.7429ZM14.4974 24.4085C12.8103 22.2303 11.7167 20.1804 11.3422 18.4512C11.1862 17.7142 11.1547 17.0736 11.2486 16.497C11.3107 15.9843 11.4986 15.5357 11.7486 15.1514C12.3421 14.2871 13.3418 13.7421 14.4977 13.7421C15.654 13.7421 16.6848 14.2548 17.2472 15.1514C17.4972 15.5357 17.6844 15.9846 17.7475 16.497C17.8408 17.0739 17.8096 17.7462 17.6535 18.4512C17.2775 20.1484 16.1839 22.1986 14.4974 24.4085ZM26.9615 25.914C26.743 27.5796 25.6495 29.0215 24.119 29.6621C23.3694 29.9821 22.5567 30.0784 21.745 29.9821C20.9641 29.8858 20.1827 29.6295 19.3709 29.1495C18.2462 28.5082 17.1217 27.5159 15.8094 26.042C17.8711 23.4478 19.1206 21.077 19.5894 18.9635C19.8082 17.9702 19.8397 17.0736 19.7454 16.2403C19.6209 15.4397 19.3394 14.7027 18.9022 14.0621C17.9331 12.6202 16.3084 11.7879 14.4971 11.7879C12.6858 11.7879 11.061 12.6529 10.0926 14.0621C9.6554 14.7027 9.3739 15.4397 9.24906 16.2403C9.12423 17.0736 9.15513 18.0022 9.40511 18.9635C9.87355 21.077 11.1544 23.4795 13.1848 26.074C11.904 27.5476 10.748 28.5409 9.62326 29.1815C8.8109 29.6621 8.03038 29.9184 7.24954 30.0141C6.40629 30.1104 5.59362 29.9821 4.8752 29.6941C3.34473 29.0535 2.25118 27.6116 2.03272 25.946C1.9391 25.1454 2.0012 24.3448 2.31391 23.4478C2.40723 23.1272 2.56389 22.8072 2.71993 22.4229C2.93871 21.9103 3.18806 21.3653 3.43835 20.821L3.46988 20.7573C5.62514 15.9843 7.93675 11.1156 10.3423 6.37523L10.4359 6.1826C10.6862 5.70261 10.9362 5.18998 11.1859 4.70935C11.4359 4.19672 11.7167 3.71609 12.0606 3.29946C12.7166 2.53147 13.5911 2.11452 14.5598 2.11452C15.5285 2.11452 16.403 2.53147 17.059 3.29946C17.4029 3.71705 17.6838 4.19768 17.9338 4.70935C18.1841 5.18998 18.434 5.70261 18.6834 6.1826L18.7773 6.37523C21.1462 11.1353 23.4271 15.9409 25.6189 20.7893V20.8213C25.8692 21.3346 26.0876 21.9106 26.3376 22.4239C26.4936 22.8075 26.65 23.1275 26.7436 23.4482C26.993 24.2802 27.0866 25.0814 26.9615 25.914Z" fill="#FF5A5F"/>
        </svg>
      </div>
      <div className="flex flex-1 gap-6 justify-center">
        <button>Stays</button>
        <button>Experiences</button>
      </div>
      <div className="flex flex-1 items-center gap-3 justify-end">
        <a>Airbnb your home</a>
        <Globe size={16} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex border w-[86px] h-12 p-4 rounded-full border-slate-400 items-center justify-around">
              <Menu size={16} />
              <div className="bg-slate-400 rounded-full p-1">
                <UserRound className="rounded-full" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Log In</DropdownMenuItem>   
            <DropdownMenuItem>Sign Up</DropdownMenuItem>
            {/* //ToDo: color not showing */}
            <DropdownMenuSeparator /> 
            <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
            <DropdownMenuItem>Help Centre</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
