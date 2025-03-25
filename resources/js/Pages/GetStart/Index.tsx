import { Link, usePage, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
  Users2Icon, 
  FileArchiveIcon, 
  FileX2Icon, 
  FileCheck2Icon,
  MonitorIcon,
  CreditCardIcon,
  WifiIcon,
  ClockIcon,
  CheckCircleIcon
} from 'lucide-react';

function GetStartPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 getstarted-page">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started with Online Notarization</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete your notarization quickly and securely from anywhere. Here's what you'll need to prepare.
        </p>
      </div>

      {/* Requirements Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Requirement 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex">
          <div className="mr-5">
            <div className="bg-blue-50 p-3 rounded-full">
              <CreditCardIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Valid Photo ID</h3>
            <p className="text-gray-600">
              You'll need a government-issued photo ID such as a driver's license, passport, or state ID card.
            </p>
          </div>
        </div>

        {/* Requirement 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex">
          <div className="mr-5">
            <div className="bg-blue-50 p-3 rounded-full">
              <FileArchiveIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Your Documents</h3>
            <p className="text-gray-600">
              Have your documents ready in PDF format. Make sure they're complete and unsigned.
            </p>
          </div>
        </div>

        {/* Requirement 3 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex">
          <div className="mr-5">
            <div className="bg-blue-50 p-3 rounded-full">
              <MonitorIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Device with Camera</h3>
            <p className="text-gray-600">
              You'll need a computer, tablet, or smartphone with a working camera and microphone.
            </p>
          </div>
        </div>

        {/* Requirement 4 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex">
          <div className="mr-5">
            <div className="bg-blue-50 p-3 rounded-full">
              <WifiIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Internet Connection</h3>
            <p className="text-gray-600">
              A stable internet connection is required for the video session with our notary.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative flex md:items-center flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Schedule Your Appointment</h3>
                <p className="text-gray-600">
                  Choose a convenient date and time for your online notarization session.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-500 shadow">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="flex md:hidden mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Schedule Your Appointment</h3>
                </div>
                <div className="md:block hidden">
                  <ClockIcon className="w-16 h-16 text-blue-400 ml-8" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex md:items-center flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-2">
                <div className="md:block hidden">
                  <FileCheck2Icon className="w-16 h-16 text-blue-400 ml-auto mr-8" />
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-500 shadow">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                <div className="flex md:hidden mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Upload Your Documents</h3>
                </div>
                <div className="md:block">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Upload Your Documents</h3>
                  <p className="text-gray-600">
                    Securely upload your documents before the appointment for review.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex md:items-center flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Meet with Notary</h3>
                <p className="text-gray-600">
                  Connect with our licensed notary via secure video conference.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-500 shadow">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="flex md:hidden mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Meet with Notary</h3>
                </div>
                <div className="md:block hidden">
                  <Users2Icon className="w-16 h-16 text-blue-400 ml-8" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex md:items-center flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-2">
                <div className="md:block hidden">
                  <CheckCircleIcon className="w-16 h-16 text-blue-400 ml-auto mr-8" />
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-500 shadow">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                <div className="flex md:hidden mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Receive Notarized Documents</h3>
                </div>
                <div className="md:block">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Receive Notarized Documents</h3>
                  <p className="text-gray-600">
                    Get your legally notarized documents delivered to your email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link 
          href="/book-appointment" 
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Book Your Appointment
        </Link>
        <p className="mt-4 text-sm text-gray-500">
         <Link href="/faqs" className="text-blue-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Visit our FAQ</Link> or <Link href="/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">contact support</Link>.
        </p>
      </div>
    </div>
  );
}

GetStartPage.layout = (page: React.ReactNode) => (
    <MainLayout title="Get Started" children={page} />
  );

export default GetStartPage;