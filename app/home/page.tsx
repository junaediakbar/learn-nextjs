'use client';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  HiOutlineBell as BellIcon,
  HiOutlineClock as ClockIcon,
  HiOutlineCog as CogIcon,
  HiOutlineCreditCard as CreditCardIcon,
  HiOutlineDocumentReport as DocumentReportIcon,
  HiOutlineHome as HomeIcon,
  HiOutlineMenuAlt1 as MenuAlt1Icon,
  HiOutlineQuestionMarkCircle as QuestionMarkCircleIcon,
  HiOutlineScale as ScaleIcon,
  HiOutlineShieldCheck as ShieldCheckIcon,
  HiOutlineUserGroup as UserGroupIcon,
  HiOutlineX as XIcon,
  HiCash as CashIcon,
  HiCheckCircle as CheckCircleIcon,
  HiChevronDown as ChevronDownIcon,
  HiChevronRight as ChevronRightIcon,
  HiOfficeBuilding as OfficeBuildingIcon,
  HiSearch as SearchIcon,
  HiAcademicCap,
} from 'react-icons/hi';
import Image from 'next/image';

import logo from '@/public/images/logo.png';

import { classNames } from '@/lib/helper';
import UnstyledLink from '@/components/UnstyledLink';
import Seo from '@/components/Seo';
import withAuth from '@/components/hoc/withAuth';

const navigation = [
  { name: 'Home', href: '/admin', icon: HomeIcon, current: true },
  {
    name: 'Kelola Kelas',
    href: '/admin/kelas',
    icon: HiAcademicCap,
    current: false,
  },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  // { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const cards = [
  {
    name: 'Pendapatan',
    href: '#',
    icon: ScaleIcon,
    amount: 'Rp 3.000.000',
  },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'Pembayaran a\\n  Jessica Tasyanita',
    href: '/riwayat/pembelian/success',
    amount: 'Rp 150.000',
    currency: 'IDR',
    status: 'success',
    date: 'July 11, 2021',
    datetime: '2021-07-11',
  },
  {
    id: 2,
    name: 'Pembayaran a\\n  Clarence',
    href: '/riwayat/pembelian/processing',
    amount: 'Rp 110.000',
    currency: 'IDR',
    status: 'processing',
    date: 'July 11, 2021',
    datetime: '2021-07-11',
  },
  {
    id: 3,
    name: 'Pembayaran a\\n  Nevin',
    href: '/riwayat/pembelian/cancelled',
    amount: 'Rp 50.000',
    currency: 'IDR',
    status: 'cancelled',
    date: 'July 12, 2021',
    datetime: '2021-07-12',
  },
  // More transactions...
];
function statusStyles(status: string): string {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-800';
      break;
    case 'processing':
      return 'bg-yellow-100 text-yellow-800';
      break;
    case 'failed':
      return 'bg-gray-100 text-gray-800';
      break;
    default:
      return 'bg-yellow-100 text-yellow-800';
      break;
  }
}
export default withAuth(Home, 'all');
function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Seo title='Pembelian | Admin' />

      <div className='flex h-screen overflow-hidden bg-gray-100'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            static
            className='fixed inset-0 z-40 flex lg:hidden'
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-sky-700'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 pt-2 -mr-12'>
                    <button
                      className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='w-6 h-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex items-center flex-shrink-0 px-4'>
                  <Image
                    className='w-10'
                    src={logo}
                    placeholder='blur'
                    alt=''
                  />
                </div>
                <nav
                  className='flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-sky-800'
                  aria-label='Sidebar'
                >
                  <div className='px-2 space-y-1'>
                    {navigation.map((item) => (
                      <UnstyledLink
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-sky-800 text-white'
                            : 'text-sky-100 hover:text-white hover:bg-sky-600',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className='w-6 h-6 mr-4 text-sky-200'
                          aria-hidden='true'
                        />
                        {item.name}
                      </UnstyledLink>
                    ))}
                  </div>
                  <div className='pt-6 mt-6'>
                    <div className='px-2 space-y-1'>
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='flex items-center px-2 py-2 text-base font-medium rounded-md group text-sky-100 hover:text-white hover:bg-sky-600'
                        >
                          <item.icon
                            className='w-6 h-6 mr-4 text-sky-200'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:flex-shrink-0'>
          <div className='flex flex-col w-64'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-sky-700'>
              <div className='flex items-center flex-shrink-0 px-4'>
                <Image className='w-16' src={logo} placeholder='blur' alt='' />
              </div>
              <nav
                className='flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-sky-800'
                aria-label='Sidebar'
              >
                <div className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <UnstyledLink
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-sky-800 text-white'
                          : 'text-sky-100 hover:text-white hover:bg-sky-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className='w-6 h-6 mr-4 text-sky-200'
                        aria-hidden='true'
                      />
                      {item.name}
                    </UnstyledLink>
                  ))}
                </div>
                <div className='pt-6 mt-6'>
                  <div className='px-2 space-y-1'>
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md group text-sky-100 hover:text-white hover:bg-sky-600'
                      >
                        <item.icon
                          className='w-6 h-6 mr-4 text-sky-200'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex-1 overflow-auto focus:outline-none'>
          <div className='relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none'>
            <button
              className='px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt1Icon className='w-6 h-6' aria-hidden='true' />
            </button>
            {/* Search bar */}
            <div className='flex justify-between flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search_field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div
                      className='absolute inset-y-0 left-0 flex items-center pointer-events-none'
                      aria-hidden='true'
                    >
                      <SearchIcon className='w-5 h-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search_field'
                      name='search_field'
                      className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search transactions'
                      type='search'
                    />
                  </div>
                </form>
              </div>
              <div className='flex items-center ml-4 md:ml-6'>
                <button className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='w-6 h-6' aria-hidden='true' />
                </button>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50'>
                          <img
                            className='w-8 h-8 rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                          <span className='hidden ml-3 text-sm font-medium text-gray-700 lg:block'>
                            <span className='sr-only'>Open user menu for </span>
                            Admin Maya
                          </span>
                          <ChevronDownIcon
                            className='flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block'
                            aria-hidden='true'
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items
                          static
                          className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
          <main className='relative z-0 flex-1 pb-8 overflow-y-auto'>
            {/* Page header */}
            <div className='bg-white shadow'>
              <div className='px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
                <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
                  <div className='flex-1 min-w-0'>
                    {/* Profile */}
                    <div className='flex items-center'>
                      <img
                        className='hidden w-16 h-16 rounded-full sm:block'
                        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80'
                        alt=''
                      />
                      <div>
                        <div className='flex items-center'>
                          <img
                            className='w-16 h-16 rounded-full sm:hidden'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80'
                            alt=''
                          />
                          <h1 className='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'>
                            Halo, Admin Maya
                          </h1>
                        </div>
                        <dl className='flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
                          <dt className='sr-only'>Company</dt>
                          <dd className='flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6'>
                            <OfficeBuildingIcon
                              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            Campuspedia Academy
                          </dd>
                          <dt className='sr-only'>Account status</dt>
                          {/* <dd className='flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0'>
                            <CheckCircleIcon
                              className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
                              aria-hidden='true'
                            />
                            Verified account
                          </dd> */}
                        </dl>
                      </div>
                    </div>
                  </div>
                  {/* <div className='flex mt-6 space-x-3 md:mt-0 md:ml-4'>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                    >
                      Add money
                    </button>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                    >
                      Send money
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
                <h2 className='text-lg font-medium leading-6 text-gray-900'>
                  Overview
                </h2>
                <div className='grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3'>
                  {/* Card */}
                  {cards.map((card) => (
                    <div
                      key={card.name}
                      className='overflow-hidden bg-white rounded-lg shadow'
                    >
                      <div className='p-5'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0'>
                            <card.icon
                              className='w-6 h-6 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <div className='flex-1 w-0 ml-5'>
                            <dl>
                              <dt className='text-sm font-medium text-gray-500 truncate'>
                                {card.name}
                              </dt>
                              <dd>
                                <div className='text-lg font-medium text-gray-900'>
                                  {card.amount}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className='px-5 py-3 bg-gray-50'>
                        <div className='text-sm'>
                          <a
                            href={card.href}
                            className='font-medium text-sky-700 hover:text-sky-900'
                          >
                            View all
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className='max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8'>
                Recent activity
              </h2>
              {/* Activity list (smallest breakpoint only) */}
              <div className='shadow sm:hidden'>
                <ul className='mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden'>
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      <a
                        href={transaction.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block px-4 py-4 bg-white hover:bg-gray-50'
                      >
                        <span className='flex items-center space-x-4'>
                          <span className='flex flex-1 space-x-2 truncate'>
                            <CashIcon
                              className='flex-shrink-0 w-5 h-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='flex flex-col text-sm text-gray-500 truncate'>
                              <span className='truncate'>
                                {transaction.name}
                              </span>
                              <span>
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}
                                </span>{' '}
                                {transaction.currency}
                              </span>
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className='flex-shrink-0 w-5 h-5 text-gray-400'
                            aria-hidden='true'
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <nav
                  className='flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200'
                  aria-label='Pagination'
                >
                  <div className='flex justify-between flex-1'>
                    <a
                      href='#'
                      className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500'
                    >
                      Previous
                    </a>
                    <a
                      href='#'
                      className='relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500'
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
              {/* Activity table (small breakpoint and up) */}
              <div className='hidden sm:block'>
                <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
                  <div className='flex flex-col mt-2'>
                    <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead>
                          <tr>
                            <th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                              Transaction
                            </th>
                            <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                              Amount
                            </th>
                            <th className='hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block'>
                              Status
                            </th>
                            <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className='bg-white'>
                              <td className='w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap'>
                                <div className='flex'>
                                  <a
                                    href={transaction.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex space-x-2 text-sm truncate group'
                                  >
                                    <CashIcon
                                      className='flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                      aria-hidden='true'
                                    />
                                    <p className='text-gray-500 truncate group-hover:text-gray-900'>
                                      {transaction.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}{' '}
                                </span>
                                {transaction.currency}
                              </td>
                              <td className='hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block'>
                                <span
                                  className={classNames(
                                    statusStyles(transaction.status),
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                  )}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                              <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                                <time dateTime={transaction.datetime}>
                                  {transaction.date}
                                </time>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <nav
                        className='flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6'
                        aria-label='Pagination'
                      >
                        <div className='hidden sm:block'>
                          <p className='text-sm text-gray-700'>
                            Showing <span className='font-medium'>1</span> to{' '}
                            <span className='font-medium'>10</span> of{' '}
                            <span className='font-medium'>20</span> results
                          </p>
                        </div>
                        <div className='flex justify-between flex-1 sm:justify-end'>
                          <a
                            href='#'
                            className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
                          >
                            Previous
                          </a>
                          <a
                            href='#'
                            className='relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
