'use client'
import React from 'react'
import ToggleLinks from './navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SwiperSlidefunction from './swiper/SwiperSlider'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    AOS.init({})
  })

  return (
    <>
      {/* ------------------------- navbar -------------------------*/}
      <header className='text-gray-600 m-0 p-0 body-font header'>
        <div className='container m-0 p-1 mx-auto flex pt-0 flex-row justify-around items-center'>
          <div className='flex flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <Image
                src='/SR-logo.svg'
                alt='Logo'
                width={130}
                height={130}
                className='ms-3 w-10 h-10 logo'
              />
            </a>
            <nav className='flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto'>
              <Link href='#' className='ms-10 links text-white custom-link'>
                Services <span className='custom-underline'></span>
              </Link>
              <Link href='#' className='ms-10 links text-white custom-link'>
                Light / Medium <span className='custom-underline'></span>
              </Link>
              <Link href='#' className='ms-10 links text-white custom-link'>
                Heavy Duty <span className='custom-underline'></span>
              </Link>
              <Link href='#' className='ms-10 links text-white custom-link'>
                Gallery <span className='custom-underline'></span>
              </Link>
              <Link href='#' className='ms-10 links text-white custom-link'>
                About Us <span className='custom-underline'></span>
              </Link>
            </nav>
          </div>

          <div className='flex justify-center items-center access-item'>
            <span className='flex justify-center item-center'>
              <span>
                <button className=' callnow access-item flex  bg-yellow-500  border-0  px-3 text-gray-900 font-semibold focus:outline-none  text-base  md:mt-0'>
                  <span className='flex justify-center item-center'>
                    <span>
                      <svg
                        width='18'
                        height='18'
                        className=''
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z'
                          stroke='black'
                          stroke-opacity='0.83'
                          stroke-width='1.66667'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </span>
                    <span> &nbsp;&nbsp;Call now !</span>
                  </span>
                </button>
              </span>

              <span>
                <ToggleLinks />
              </span>
            </span>
          </div>

          <div
            className='flex justify-center items-center links'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <button className='ms-3 inline-flex items-center callbtn border-0 py-1 px-3 text-light font-semibold focus:outline-none rounded-2 text-base mt-4 md:mt-0 relative group custom-transition-btn'>
              <svg
                width='18'
                height='18'
                className='mr-3'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z'
                  stroke='white'
                  strokeOpacity='0.83'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Call 111-123-3456
              <span className='custom-underline'></span>
            </button>

            <button className='custom-transition-btnwhite ms-3 flex items-center contactbtn bg-yellow-500 border-0 py-1  px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base mt-4 md:mt-0'>
              Contact Us
              <span className='custom-underlinewhite'></span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------ hero section------------------------- */}
      <div className='herocontainer  '>
        <div className='herotext'>
          <h1
            className='heroh1 lg:ms-3 md:ms-3'
            data-aos='fade-down'
            data-aos-duration='1000'
          >
            <span className='flex '>
              <span> Empowering</span>
              <span className=' mt-3  youimg items-center'>
                <Image
                  alt='you'
                  src='/headerText.svg'
                  className='ms-3'
                  width={'100'}
                  height={'100'}
                />
              </span>
            </span>
            <span className=''> with ReliableTowing</span>
          </h1>

          <p className='leading-relaxed heropara mb-4 text-white pt-5 '>
            From Al-driven strategies to seamless digital transformation, we
            engineer solutions that align with Vision 2030—embedding
            intelligence into every layer of your operations for a smarter, more
            efficient future.
          </p>

          <div
            className='flex ms-6 lg:flex-row md:flex-row flex-col'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <button className='custom-transition-btnwhite py-2 p-1  bg-yellow-500 border-yellow-600    px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base mt-4 md:mt-0'>
              Get A Free Quote
              <span className='custom-underlinewhite'></span>
            </button>

            <button className='ms-3 inline-flex items-center  py-2 callbtn border-0  px-3 text-light font-semibold focus:outline-none rounded-2 text-base mt-4 md:mt-0 relative group custom-transition-btn'>
              <svg
                width='18'
                height='18'
                className='mr-3'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z'
                  stroke='white'
                  strokeOpacity='0.83'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              View Our Services
              <span className='custom-underline'></span>
            </button>
          </div>
        </div>

        <div className='heroimage'>
          <Image
            alt='truck'
            className='truck-img'
            src='/home-truck-image.svg'
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className='div flex justify-between shadediv'>
        <Image
          src='/yellow-shade.svg'
          alt='shade'
          width={300}
          height={300}
          className='shade  shade1 w-5 h-8 text-center'
        />
        <Image
          src='/blue-shade.svg'
          alt='shade'
          width={300}
          height={300}
          className='shade  shade2  w-5 h-8 text-center'
        />
      </div>

      <div className='text-gray-300 bg-black border-0 justify-center'>
        <p className='w-5 mx-auto'>
          <Image
            src='/bounce-arrow.gif'
            alt='down-arrow'
            width={50}
            height={50}
            className=' w-5 h-8 text-center'
          />
        </p>
        <p className=' text-center border-0  pb-5'>
          Trusted by people just like you!
        </p>
      </div>

      <div className='flex justify-between '>
        <div className='emptydiv1 bg-black border-0 '></div>
        <div className='emptydiv2 bg-black border-0 '></div>
      </div>

      {/* --------------------- second section--------------- */}

      <div className='p-10 secondsection flex  lg:flex-row md:flex-row justify-between items-center   '>
        <div className=''>
          <h1
            className='text-black flex secondsectionh1 lg:ms-3 md:ms-3 flex-wrap '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            The
            <span className='mostimg '>
              <Image
                alt='mosttext-img'
                src='/most-text.svg'
                className='md:ms-3 md:mr-2 '
                width={100}
                height={20}
              />
            </span>
            Experienced Towing company in town
          </h1>

          <p className='text-gray-500 lg:ms-10 md:ms-3'>
            Having car Issues on the road? Worry no more: We make sure that you
            and your vehicle are safe 24/7.
          </p>
          <p className='text-gray-500 lg:ms-10 md:ms-3 mb-5'>
            For the best roadside assistance services available. pleasecall:
          </p>
        </div>

        <div
          className=' justify-center item-center w-80'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <button className='custom-transition-btnwhite ms-3 flex items-center contactbtn bg-yellow-500 border-0 py-1  px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base mt-4 md:mt-0'>
            &nbsp; Call (715) 458-2119
            <span className='custom-underlinewhite'></span>
          </button>
        </div>
      </div>
      <SwiperSlidefunction />

      {/* ------------------------ third section------------------------- */}

      <div className='third-section lg:p-10 md:p-10 p-5'>
        <div className='p-5 pt-0 secondsection flex  lg:flex-row md:flex-row justify-between items-center  '>
          <div className=''>
            <h1
              className='text-white flex secondsectionh1 thirdsectionh1 lg:ms-3 md:ms-3 flex-wrap '
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              Why Choose Us?
            </h1>

            <p className=' lg:ms-10 md:ms-3 flex-wrap text-gray-500'>
              Our localized expertise, combined with global experience, ensures
              that your business stays ahead of industry <br /> demands,
              leveraging cutting-edge technology to build sustainable, scalable
              solutions.
            </p>
          </div>

          <div className=' justify-center item-center w-60'>
            <Image
              src='/circle-text.svg'
              alt='cicle'
              width={200}
              height={200}
              className=' w-10 h-30 text-center circle logo1'
            />
          </div>
        </div>

        <div className='flex lg:flex-row md:flex-row text-white justify-start item-start thirdsectionflexitems-div flex-col  p-5 ps-0 '>
          <div className='thirdsectionflexitems thpara lg:p-10 md:p-10'>
            <p
              className='headingthird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Quick{' '}
            </p>
            <p
              className='parathird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Response time
            </p>
          </div>

          <div className='thirdsectionflexitems  thpara lg:p-10 md:p-10'>
            <p
              className='headingthird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Hassle-free
            </p>
            <p
              className='parathird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              {' '}
              Cleanup{' '}
            </p>
          </div>

          <div className='thirdsectionflexitems  lg:p-10 md:p-10'>
            <p
              className='headingthird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Roadside
            </p>
            <p
              className='parathird'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Assistance
            </p>
          </div>
        </div>

        <div className='flex ms-6 lg:flex-row md:flex-row flex-col  p-5 '>
          <button
            className='custom-transition-btnwhite py-2 p-1  bg-yellow-500 border-yellow-600    px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base md:mt-0'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Get A Free Quote
            <span className='custom-underlinewhite'></span>
          </button>
          <Image
            src='/blue-circle-shade.svg'
            alt='shade'
            width={300}
            height={300}
            className='shade  shade3  w-2 h-2 text-center'
          />
        </div>
      </div>
      <div className='emptydiv3  border-0 bg-black'></div>

      {/* ------------------------ forth section------------------------- */}
      <div className='p-10  justify-center items-center text-center '>
        <Image
          src='/truck-picture.svg'
          alt='truck-picture'
          width={200}
          height={200}
          className='w-auto mx-auto mt-5'
          data-aos='fade-down'
          data-aos-duration='1000'
        />
      </div>

      <div className='div div1 lg:p-10 md:p-10  p-5  pt-0 flex justify-between items-center lg:flex-row md:flex-row flex-col'>
        <div className=' w-full'>
          <h1
            className='text-black secondsectionh1  '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            Working around the clock
            <span className=' '>
              <Image
                alt='mosttext-img'
                src='/time-text.svg'
                className='md:ms-3 md:mr-2 '
                width={80}
                height={20}
              />
            </span>
          </h1>
        </div>
        <div className=' w-full  '>
          <p data-aos='fade-down' data-aos-duration='1000'>
            We specializing in the design and construction of top-of-the-line
            NRC Carriers, reckers, and Quickswap units using the finest chassis
            from leading brands such as senworth, Peterbilt, Western Star, and
            more.
          </p>
        </div>
      </div>

      <div
        className='flex lg:flex-row md:flex-row flex-col pt-0 md:ps-10 mt-0'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <button className='custom-transition-btnwhite py-2 p-1  bg-yellow-500 border-yellow-600    px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base mt-0 m-2 md:mt-0'>
          Get A Free Quote
          <span className='custom-underlinewhite'></span>
        </button>

        <button className='ms-3 inline-flex items-center text-black  py-2  border border-slate-600  px-5 text-light font-semibold focus:outline-none rounded-2 text-base mt-0 m-2 md:mt-0 relative group custom-transition-btn'>
          <svg
            width='18'
            height='18'
            className=''
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z'
              stroke='white'
              strokeOpacity='0.83'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          View Our Services
          <span className='custom-underline'></span>
        </button>
      </div>

      <section className='text-gray-600  forthsection flex lg:flex-row md:flex-row  flex-col pt-0 md:ps-10 mt-10 mb-0'>
        <div className='md:p-10 p-2 justify-center items-center  forthsectionchild1 '>
          <h1
            className='text-white  forthsectionh1  '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            In a rush?
          </h1>

          <p className=' forthsectionpara text-gray-500'>
            Our teams work 24/7 around the clock for your safety and security.
          </p>

          <div className='mt-16'>
            <button className=' inline-flex items-center callbtn border-0 py-1 px-3 text-light font-bold focus:outline-none rounded-2 text-base  md:mt-0 relative group custom-transition-btn'>
              <svg
                width='18'
                height='18'
                className='mr-3'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z'
                  stroke='white'
                  strokeOpacity='0.83'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Call us at (111-123-3456)
              <span className='custom-underline'></span>
            </button>
          </div>
        </div>

        <div
          className='md:p-16 md:mr-10 p-2 mt-5 justify-center items-center  forthsectionchild2 mb-0'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          <div className='relative mb-4 flex justify-between  '>
            <div className=''>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                className='w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>

            <div className='ms-2'>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                className='w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>
          <div className='relative mb-4'>
            <input
              type='number'
              id='number'
              name='number'
              placeholder='Phone (eg: 123-456-7890)'
              className='w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>

          <div className='relative mb-4 '>
            <textarea
              id='message'
              name='message'
              placeholder='Your Message '
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>

          <div className='flex items-center gap-3  w-full'>
            <svg
              width='40'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.8287 8.2574L9.1718 13.9142C8.78127 14.3047 8.78127 14.9379 9.1718 15.3284C9.56232 15.719 10.1955 15.719 10.586 15.3284L16.2429 9.67161C17.4144 8.50004 17.4144 6.60055 16.2429 5.42897C15.0713 4.2574 13.1718 4.2574 12.0002 5.42897L6.34337 11.0858C4.39075 13.0384 4.39075 16.2042 6.34337 18.1569C8.29599 20.1095 11.4618 20.1095 13.4144 18.1569L19.0713 12.5L20.4855 13.9142L14.8287 19.5711C12.095 22.3047 7.66283 22.3047 4.92916 19.5711C2.19549 16.8374 2.19549 12.4053 4.92916 9.67161L10.586 4.01476C12.5386 2.06214 15.7045 2.06214 17.6571 4.01476C19.6097 5.96738 19.6097 9.1332 17.6571 11.0858L12.0002 16.7427C10.8287 17.9142 8.92916 17.9142 7.75759 16.7427C6.58601 15.5711 6.58601 13.6716 7.75759 12.5L13.4144 6.84319L14.8287 8.2574Z'
                fill='white'
                fill-opacity='0.5'
              />
            </svg>

            <div className='w-full'>
              <h1 className='text-white'>Attach File</h1>
              <h1 className='text-gray-500 lg:text-sm text-xs mt-1'>
                Upload any JPEG, PNG or PDF file
              </h1>
            </div>
            <div className='bg-gray-200 cursor-pointer   rounded-md w-44 lg:text-sm text-xs lg:p-3 p-2 text-center text-white   bg-opacity-10'>
              Choose File
              <input id='fileInput' type='file' className='hidden' />
            </div>
          </div>

          <div className='mt-5'>
            <button className='custom-transition-btnwhite py-2 p-1 w-full  bg-yellow-500 border-yellow-600    px-3 text-gray-900 font-semibold focus:outline-none rounded-2 text-base md:mt-0'>
              Send Message
              <span className='custom-underlinewhite'></span>
            </button>
          </div>
        </div>
      </section>

      <section className='text-gray-600  forthsection flex lg:flex-row md:flex-row mt-0 flex-col '>
        <div className=' w-full md:p-10 '>
          <hr />
        </div>
      </section>

      <footer className='text-gray-600 body-font  fifthsection'>
        <div className='flex justify-between item-center mt-0 pt-0 fifth md:p-16  p-2'>
          <div className='  '>
          <Image
                src='/SR-logo.svg'
                alt='Logo'
                width={130}
                height={130}
                className='ms-3 w-10 h-10 logofooter'
              />
          </div>

          <div className='flex mt-0 pt-0'>
            <div className='m-5 mt-0 pt-0'>
              <h2 className='title-font font-medium text-white tracking-widest text-xl mb-3'>
               Pages
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                   Services
                  </a>
                </li>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                   Light / Medium
                  </a>
                </li>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                  heavy Duty
                  </a>
                </li>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                  Gallery
                  </a>
                </li>
              </nav>
            </div>

            <div className='m-5 mt-0 pt-0'>
              <h2 className='title-font font-medium text-white tracking-widest text-xl mb-3'>
               Company
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                   About Us
                  </a>
                </li>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                  Careers
                  </a>
                </li>
                <li>
                  <a className='text-gray-500 hover:text-yellow-600'>
                 Contact
                  </a>
                </li>
              
              </nav>
            </div>
          </div>
        </div>

      </footer>



      <section className='text-gray-600  forthsection flex lg:flex-row md:flex-row h-1 flex-col '>
        <div className=' w-full md:pr-10 md:ps-10 '>
          <hr />
        </div>
      </section>

        <div className='fifthsection p-2 '>
          <div className='container mx-auto  p-2 py-5 px-5 md:p-10  flex flex-wrap flex-col sm:flex-row'>
            <p className='text-white text-sm text-center sm:text-left'>
              © 2025 SR Towing. All rights reserved.
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <a className='text-white'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-7'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>

              <a className='ml-3 text-white '>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-7'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
              <a className='ml-3 text-white'>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='0'
                  className='w-10 h-7'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
    </>
  )
}

export default Home
