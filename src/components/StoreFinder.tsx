import Link from "next/link";

export default function StoreFinder() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-lg p-6 md:px-8 md:py-6 shadow-xs mt-8">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary shrink-0">
            <i className="material-icons text-2xl">place</i>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-main">20+ Physical Stores</h3>
            <p className="text-sm text-text-muted mt-0.5">Visit Our Store &amp; Get Your Desired IT Product!</p>
          </div>
        </div>
        <Link href="/information/contact" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors shrink-0">
          Find Our Store
          <i className="material-icons text-lg">search</i>
        </Link>
      </div>
    </div>
  );
}
