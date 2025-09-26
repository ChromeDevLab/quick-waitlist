import { Mail } from "lucide-react";
import Link from "next/link";

const TwitterLink1 = "https://x.com/mytwillot";
const TwitterLink2 = "https://x.com/RobinLinee";
const ContactEmail = "contact@deletetweets.net";

// Custom Twitter/X icon component
const TwitterIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="transition-colors"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center space-y-4">
          {/* Developers & Contact Info */}
          <div className="flex flex-col items-center space-y-3">
            <div className="text-sm text-slate-600 text-center">
              由{" "}
              <Link
                href={TwitterLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[#4A90E2] hover:text-[#357ABD] transition-colors"
              >
                <TwitterIcon size={14} />
                <span>@mytwillot</span>
              </Link>
              {" "}和{" "}
              <Link
                href={TwitterLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[#4A90E2] hover:text-[#357ABD] transition-colors"
              >
                <TwitterIcon size={14} />
                <span>@RobinLinee</span>
              </Link>
              {" "}共同开发
            </div>

            <div className="flex items-center space-x-2 text-slate-600">
              <Mail size={16} />
              <a
                href={`mailto:${ContactEmail}`}
                className="text-sm transition-colors hover:text-[#4A90E2]"
              >
                {ContactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
